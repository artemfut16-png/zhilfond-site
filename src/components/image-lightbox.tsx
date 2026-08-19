"use client";

import * as React from "react";
import Image from "next/image";
import { Maximize2Icon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ImageLightboxProps {
  src: string;
  alt: string;
  ratio?: "cover" | "contain";
  className?: string;
}

export function ImageLightbox({
  src,
  alt,
  ratio = "cover",
  className,
}: ImageLightboxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-(--radius) border border-border",
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={ratio === "cover" ? "object-cover" : "object-contain p-4"}
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
          <span className="flex size-10 items-center justify-center rounded-full bg-background/90 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
            <Maximize2Icon className="size-4" />
          </span>
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[min(92vw,1200px)] border-none bg-transparent p-0 shadow-none ring-0 sm:max-w-[min(92vw,1200px)] [&>button]:bg-background [&>button]:text-foreground">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          {open && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-(--radius) bg-card">
              <Image
                src={src}
                alt={alt}
                fill
                priority
                sizes="92vw"
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
