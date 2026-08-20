"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import { getLastHub } from "@/lib/nav-memory";

export function BackLink() {
  const router = useRouter();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    router.push(getLastHub());
  }

  return (
    <a
      href="/"
      onClick={handleClick}
      className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
    >
      <ArrowLeftIcon className="size-4" />
      На главную
    </a>
  );
}
