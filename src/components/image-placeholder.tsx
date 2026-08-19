import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label?: string;
  ratio?: "square" | "video" | "portrait" | "wide" | "photo";
  className?: string;
}

const ratioClass: Record<NonNullable<ImagePlaceholderProps["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
  photo: "aspect-[4/3]",
};

export function ImagePlaceholder({
  label,
  ratio = "video",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-(--radius) border border-dashed border-border bg-muted text-muted-foreground",
        ratioClass[ratio],
        className
      )}
    >
      <ImageIcon className="size-8 opacity-40" strokeWidth={1.5} />
      {label ? (
        <span className="px-4 text-center text-xs opacity-60">{label}</span>
      ) : null}
    </div>
  );
}
