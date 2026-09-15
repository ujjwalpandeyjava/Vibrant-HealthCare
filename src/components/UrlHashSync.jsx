"use client";

import { useEffect } from "react";

export default function UrlHashSync({ hash }) {
  useEffect(() => {
    if (!hash || typeof window === "undefined") return;
    const targetHash = `#${hash}`;
    if (window.location.hash !== targetHash) {
      window.history.replaceState(null, "", `${window.location.pathname}${targetHash}`);
    }
  }, [hash]);

  return null;
}
