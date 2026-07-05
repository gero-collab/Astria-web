"use client";

import { cloneElement, isValidElement, useEffect, useRef, useState, type ReactElement } from "react";

type RevealProps = {
  children: ReactElement;
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!isValidElement(children)) return children;

  const child = children as ReactElement<{ style?: React.CSSProperties; className?: string }>;

  const extraProps: Record<string, unknown> = {
    ref,
    style: {
      ...(child.props.style || {}),
      transition: `opacity .8s ease ${delay}s, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}s`,
      willChange: "opacity, transform",
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(26px)",
    },
  };

  return cloneElement(child, extraProps as never);
}
