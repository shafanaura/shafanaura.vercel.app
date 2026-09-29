"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import type { Project } from "@/lib/site";

type SiteContextValue = {
  ready: boolean;
  setReady: (v: boolean) => void;
  menuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  requestOpen: boolean;
  openRequest: () => void;
  closeRequest: () => void;
  activeProject: Project | null;
  openProject: (project: Project) => void;
  closeProject: () => void;
  stopScroll: () => void;
  startScroll: () => void;
  scrollToId: (id: string) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}

/** @deprecated use useSite */
export const useLumora = useSite;

function applyAdaptiveGrid() {
  const FONT_BASE = 16;
  const baseWidth = 1920;
  const coef = 0.6666;
  const w = window.innerWidth;
  const widthReduction = ((baseWidth - w) / baseWidth) * 100;
  const size = FONT_BASE - (FONT_BASE * (widthReduction * coef)) / 100;
  if (size > FONT_BASE) {
    document.documentElement.style.fontSize = `${size}px`;
  } else {
    document.documentElement.style.removeProperty("font-size");
  }
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const lockCount = useRef(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    applyAdaptiveGrid();
    const onResize = () => applyAdaptiveGrid();
    window.addEventListener("resize", onResize);

    const lenis = new Lenis({ smoothWheel: true });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const stopScroll = useCallback(() => {
    lockCount.current += 1;
    lenisRef.current?.stop();
    const html = document.documentElement;
    html.style.position = "relative";
    html.style.overflow = "hidden";
    html.style.height = "100%";
  }, []);

  const startScroll = useCallback(() => {
    lockCount.current = Math.max(0, lockCount.current - 1);
    if (lockCount.current > 0) return;
    lenisRef.current?.start();
    const html = document.documentElement;
    html.style.removeProperty("position");
    html.style.removeProperty("overflow");
    html.style.removeProperty("height");
  }, []);

  const scrollToId = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      stopScroll();
      window.setTimeout(() => {
        const top = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top, behavior: "smooth" });
        window.setTimeout(() => startScroll(), 100);
      }, 50);
    },
    [startScroll, stopScroll],
  );

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    stopScroll();
  }, [stopScroll]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    startScroll();
  }, [startScroll]);

  const openRequest = useCallback(() => {
    setRequestOpen(true);
    stopScroll();
  }, [stopScroll]);

  const closeRequest = useCallback(() => {
    setRequestOpen(false);
    startScroll();
  }, [startScroll]);

  const openProject = useCallback(
    (project: Project) => {
      setActiveProject(project);
      stopScroll();
    },
    [stopScroll],
  );

  const closeProject = useCallback(() => {
    setActiveProject(null);
    startScroll();
  }, [startScroll]);

  const value = useMemo(
    () => ({
      ready,
      setReady,
      menuOpen,
      openMenu,
      closeMenu,
      requestOpen,
      openRequest,
      closeRequest,
      activeProject,
      openProject,
      closeProject,
      stopScroll,
      startScroll,
      scrollToId,
    }),
    [
      ready,
      menuOpen,
      openMenu,
      closeMenu,
      requestOpen,
      openRequest,
      closeRequest,
      activeProject,
      openProject,
      closeProject,
      stopScroll,
      startScroll,
      scrollToId,
    ],
  );

  return (
    <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
  );
}

/** @deprecated use SiteProvider */
export const LumoraProvider = SiteProvider;
