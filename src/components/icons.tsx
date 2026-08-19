import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type IconProps = ImgHTMLAttributes<HTMLImageElement>;

export function TelegramIcon({ className, ...props }: IconProps) {
  return (
    <img
      src="/icons/telegram.svg"
      alt=""
      className={cn("size-4", className)}
      {...props}
    />
  );
}

export function MaxIcon({ className, ...props }: IconProps) {
  return (
    <img
      src="/icons/max.svg"
      alt=""
      className={cn("size-4", className)}
      {...props}
    />
  );
}
