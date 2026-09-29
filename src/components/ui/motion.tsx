"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { canHover, createSpring, type SpringConfig } from "@/lib/spring";
import { EASE } from "@/lib/constants";
import { useSite } from "@/providers/LumoraProvider";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  /** Gate on intro loader ready (default false). Hero uses true. */
  gateReady?: boolean;
  from?: CSSProperties;
  to?: CSSProperties;
  duration?: number;
  ease?: string;
  as?: "div" | "span" | "li" | "section" | "article";
};

export function Reveal({
  children,
  className,
  style,
  delay = 0,
  gateReady = false,
  from = { opacity: 0, transform: "translateY(14px)" },
  to = { opacity: 1, transform: "translateY(0)" },
  duration = 700,
  ease = EASE.spring210,
  as: Tag = "div",
}: RevealProps) {
  const { ready } = useSite();
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const gated = !gateReady || ready;

  useEffect(() => {
    const el = ref.current;
    if (!el || !gated) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [gated]);

  const merged: CSSProperties = {
    ...style,
    ...(shown ? to : from),
    transition: shown
      ? `opacity ${duration}ms ${ease} ${delay}ms, transform ${duration}ms ${ease} ${delay}ms`
      : undefined,
    willChange: "opacity, transform",
  };

  return (
    // @ts-expect-error polymorphic
    <Tag ref={ref} className={className} style={merged}>
      {children}
    </Tag>
  );
}

type HoverSpringProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  from?: Record<string, number>;
  to?: Record<string, number>;
  config?: SpringConfig;
  /** Apply transforms from these spring keys */
  map?: (values: Record<string, number>) => CSSProperties;
  as?: "div" | "span" | "button" | "a";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  "aria-label"?: string;
  disabled?: boolean;
};

const defaultMap = (v: Record<string, number>): CSSProperties => ({
  transform: `translate(${v.x ?? 0}px, ${v.y ?? 0}px) scale(${v.scale ?? 1}) rotate(${v.rotate ?? 0}deg)`,
  opacity: v.opacity ?? 1,
});

export function HoverSpring({
  children,
  className,
  style,
  from = { scale: 1 },
  to = { scale: 1.04 },
  config = { tension: 320, friction: 18 },
  map = defaultMap,
  as: Tag = "span",
  href,
  onClick,
  type = "button",
  "aria-label": ariaLabel,
  disabled,
}: HoverSpringProps) {
  const [values, setValues] = useState(from);
  const springsRef = useRef<Record<string, ReturnType<typeof createSpring>>>(
    {},
  );
  const keys = Object.keys({ ...from, ...to });

  useEffect(() => {
    const springs: Record<string, ReturnType<typeof createSpring>> = {};
    const current: Record<string, number> = { ...from };
    for (const key of keys) {
      springs[key] = createSpring(config, (v) => {
        current[key] = v;
        setValues({ ...current });
      });
      springs[key].setImmediate(from[key] ?? 0);
    }
    springsRef.current = springs;
    return () => {
      Object.values(springs).forEach((s) => s.stop());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activate = (active: boolean) => {
    if (!canHover()) return;
    const target = active ? to : from;
    for (const key of keys) {
      springsRef.current[key]?.set(target[key] ?? from[key] ?? 0);
    }
  };

  const common = {
    className,
    style: { ...style, ...map(values), display: style?.display ?? "inline-flex" },
    onMouseEnter: () => activate(true),
    onMouseLeave: () => activate(false),
    "aria-label": ariaLabel,
  };

  if (Tag === "a") {
    return (
      <a {...common} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }
  if (Tag === "button") {
    return (
      <button {...common} type={type} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }
  return (
    <Tag {...common} onClick={onClick}>
      {children}
    </Tag>
  );
}

type LineRevealProps = {
  lines: readonly string[] | string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  lineStagger?: number;
  gateReady?: boolean;
  as?: "h1" | "h2" | "h3" | "p";
};

export function LineReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  lineStagger = 120,
  gateReady = false,
  as: Tag = "h2",
}: LineRevealProps) {
  const { ready } = useSite();
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const gated = !gateReady || ready;

  useEffect(() => {
    const el = ref.current;
    if (!el || !gated) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [gated]);

  return (
    // @ts-expect-error polymorphic
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden"
          style={{ display: "block", overflow: "hidden" }}
        >
          <span
            className={lineClassName}
            style={{
              display: "block",
              transform: shown ? "translateY(0)" : "translateY(100%)",
              opacity: shown ? 1 : 0,
              transition: `transform 900ms ${EASE.easeOutCubic} ${delay + i * lineStagger}ms, opacity 900ms ${EASE.easeOutCubic} ${delay + i * lineStagger}ms`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

type WordRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  wordStagger?: number;
};

export function WordReveal({
  children,
  className,
  delay = 0,
  wordStagger = 35,
}: WordRevealProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [shown, setShown] = useState(false);
  const text =
    typeof children === "string"
      ? children
      : Array.isArray(children)
        ? children
        : null;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!text || typeof text !== "string") {
    // Complex children: wrap as block reveal
    return (
      <p ref={ref} className={className}>
        <span
          style={{
            display: "inline-block",
            transform: shown ? "translateY(0)" : "translateY(24px)",
            opacity: shown ? 1 : 0,
            transition: `transform 700ms ${EASE.easeOutQuart} ${delay}ms, opacity 700ms ${EASE.easeOutQuart} ${delay}ms`,
          }}
        >
          {children}
        </span>
      </p>
    );
  }

  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            marginRight: "0.3em",
            transform: shown ? "translateY(0)" : "translateY(24px)",
            opacity: shown ? 1 : 0,
            transition: `transform 700ms ${EASE.easeOutQuart} ${delay + i * wordStagger}ms, opacity 700ms ${EASE.easeOutQuart} ${delay + i * wordStagger}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

/** Split mixed React nodes into word reveals (supports muted spans). */
export function StatementReveal({
  className,
  delay = 0,
  parts,
}: {
  className?: string;
  delay?: number;
  parts: { text: string; muted?: boolean }[];
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [shown, setShown] = useState(false);
  let wordIndex = 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <h2 ref={ref} className={className}>
      {parts.map((part, pi) =>
        part.text.split(" ").map((word, wi) => {
          const i = wordIndex++;
          const isLastInPart =
            wi === part.text.split(" ").length - 1 &&
            pi === parts.length - 1;
          return (
            <span
              key={`${pi}-${wi}`}
              style={{
                display: "inline-block",
                marginRight: isLastInPart ? 0 : "0.3em",
                color: part.muted ? "var(--muted)" : undefined,
                transform: shown ? "translateY(0)" : "translateY(24px)",
                opacity: shown ? 1 : 0,
                transition: `transform 700ms ${EASE.easeOutQuart} ${delay + i * 35}ms, opacity 700ms ${EASE.easeOutQuart} ${delay + i * 35}ms`,
              }}
            >
              {word}
            </span>
          );
        }),
      )}
    </h2>
  );
}
