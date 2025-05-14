"use client";
import { useEffect, useState } from "react";

export default function useScreenOrientation() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
    orientation: "portrait",
  });

  useEffect(() => {
    const getSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const orientation = width > height ? "landscape" : "portrait";

      return { width, height, orientation };
    };

    setSize(getSize());

    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
