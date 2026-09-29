export type SpringConfig = { tension: number; friction: number };

/** Critically-ish-damped spring stepper (mass = 1). */
export function createSpring(
  config: SpringConfig,
  onUpdate: (value: number) => void,
) {
  let x = 0;
  let v = 0;
  let target = 0;
  let raf = 0;
  const dt = 1 / 60;

  const step = () => {
    const { tension, friction } = config;
    const accel = tension * (target - x) - friction * v;
    v += accel * dt;
    x += v * dt;
    onUpdate(x);
    if (Math.abs(target - x) < 0.001 && Math.abs(v) < 0.001) {
      x = target;
      v = 0;
      onUpdate(x);
      raf = 0;
      return;
    }
    raf = requestAnimationFrame(step);
  };

  return {
    set(next: number) {
      target = next;
      if (!raf) raf = requestAnimationFrame(step);
    },
    setImmediate(next: number) {
      target = next;
      x = next;
      v = 0;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      onUpdate(x);
    },
    stop() {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    },
  };
}

export function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function canHover() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}
