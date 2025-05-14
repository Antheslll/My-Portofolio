"use client";
import { usePathname } from "next/navigation";

export default function useCurrentUrl() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return {
    pathname,
    isActive,
  };
}
