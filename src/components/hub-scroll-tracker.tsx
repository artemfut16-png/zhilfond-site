"use client";

import * as React from "react";
import { rememberHub, saveScroll, readScroll } from "@/lib/nav-memory";

export function HubScrollTracker({ path }: { path: string }) {
  React.useEffect(() => {
    rememberHub(path);

    const saved = readScroll(path);
    // Run after Next's own post-navigation scroll handling so this wins.
    const restoreId =
      saved !== null
        ? window.setTimeout(() => window.scrollTo(0, saved), 100)
        : null;

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        saveScroll(path, window.scrollY);
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (restoreId !== null) window.clearTimeout(restoreId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [path]);

  return null;
}
