import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Engine, type Key } from '../snake/engine'
import { Screen, W, H } from '../snake/screen'
import { sound } from '../snake/sound'
import '../snake/phone.css'

// Canvas pixels per LCD pixel; each LCD dot is drawn slightly smaller to show the grid.
const DOT = 5

const KEYPAD: { key: Key; label: string; sub: string }[] = [
  { key: '1', label: '1', sub: 'oo' },
  { key: '2', label: '2', sub: 'abc' },
  { key: '3', label: '3', sub: 'def' },
  { key: '4', label: '4', sub: 'ghi' },
  { key: '5', label: '5', sub: 'jkl' },
  { key: '6', label: '6', sub: 'mno' },
  { key: '7', label: '7', sub: 'pqrs' },
  { key: '8', label: '8', sub: 'tuv' },
  { key: '9', label: '9', sub: 'wxyz' },
  { key: '*', label: '*', sub: '+' },
  { key: '0', label: '0', sub: '␣' },
  { key: '#', label: '#', sub: '⇧' },
]

const KEYBOARD: Record<string, Key> = {
  ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: '4', ArrowRight: '6',
  w: 'up', s: 'down', a: '4', d: '6',
  Enter: 'navi', ' ': 'navi',
  Escape: 'c', Backspace: 'c', c: 'c',
  '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
  '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '*': '*', '#': '#',
}

function loadMuted() {
  try {
    return localStorage.getItem('snake.muted') === '1'
  } catch {
    return false
  }
}

export default function Snake() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const engineRef = useRef<Engine | null>(null)
  const [held, setHeld] = useState<Key | null>(null)
  const [muted, setMuted] = useState(loadMuted)

  useEffect(() => {
    sound.enabled = !muted
    try {
      localStorage.setItem('snake.muted', muted ? '1' : '0')
    } catch {
      // Storage unavailable; the setting lasts for this visit only.
    }
  }, [muted])

  useEffect(() => {
    const canvas = canvasRef.current!
    const g = canvas.getContext('2d')!
    const screen = new Screen()
    const engine = new Engine(screen)
    engineRef.current = engine

    // Per-dot darkness, eased toward the framebuffer to mimic slow LCD response.
    const level = new Float32Array(W * H)
    let last = performance.now()
    engine.update(last)
    engine.modeAt = last
    let raf = 0

    const draw = (now: number) => {
      const dt = Math.min(100, now - last)
      last = now
      engine.update(now)
      engine.render()

      const on = 1 - Math.pow(1 - 0.55, (dt * 60) / 1000)
      const off = 1 - Math.pow(1 - 0.3, (dt * 60) / 1000)
      g.fillStyle = '#9fb98a'
      g.fillRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < level.length; i++) {
        const target = screen.buf[i]
        level[i] += (target - level[i]) * (target > level[i] ? on : off)
        const a = 0.05 + level[i] * 0.85
        g.fillStyle = `rgba(22, 34, 18, ${a.toFixed(3)})`
        g.fillRect((i % W) * DOT, Math.floor(i / W) * DOT, DOT - 0.6, DOT - 0.6)
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    const down = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const k = KEYBOARD[e.key] ?? KEYBOARD[e.key.toLowerCase()]
      if (!k) return
      e.preventDefault()
      setHeld(k)
      if (!e.repeat) engine.press(k)
    }
    const up = () => setHeld(null)
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [])

  const keyProps = (k: Key, label: string, cls = '') => ({
    'aria-label': label,
    className: `${cls} ${held === k ? 'is-held' : ''}`.trim() || undefined,
    onPointerDown: (e: React.PointerEvent) => {
      e.preventDefault()
      setHeld(k)
      engineRef.current?.press(k)
    },
    onPointerUp: () => setHeld(null),
    onPointerLeave: () => setHeld(null),
  })

  return (
    <main className="nk-page">
      <div className="nk-phone">
        <div className="nk-earpiece" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
        <div className="nk-logo" aria-hidden="true">NOKIA</div>

        <div className="nk-bezel">
          <canvas
            ref={canvasRef}
            className="nk-lcd"
            width={W * DOT}
            height={H * DOT}
            role="img"
            aria-label="Snake game screen"
          />
        </div>

        <div className="nk-controls">
          <div className="nk-rocker">
            <button type="button" {...keyProps('up', 'Scroll up')}>▲</button>
            <button type="button" {...keyProps('down', 'Scroll down')}>▼</button>
          </div>
          <button type="button" {...keyProps('navi', 'Navi key', 'nk-navi')} />
          <button type="button" {...keyProps('c', 'C key', 'nk-c')}>C</button>
        </div>

        <div className="nk-keypad">
          {KEYPAD.map(({ key, label, sub }) => (
            <button type="button" key={key} {...keyProps(key, `Key ${label}`)}>
              <span className="nk-num">{label}</span>
              <span className="nk-sub">{sub}</span>
            </button>
          ))}
        </div>

        <div className="nk-mic" aria-hidden="true" />
      </div>

      <div className="nk-help">
        <p>
          <kbd>2</kbd> <kbd>4</kbd> <kbd>6</kbd> <kbd>8</kbd> or arrow keys steer ·{' '}
          <kbd>Enter</kbd> is the Navi key · <kbd>Esc</kbd> is C
        </p>
        <div className="nk-links">
          <button type="button" onClick={() => setMuted((m) => !m)}>
            Sound: {muted ? 'off' : 'on'}
          </button>
          <Link to="/">← Back to LUMEA</Link>
        </div>
      </div>
    </main>
  )
}
