import { useEffect, type ReactNode } from "react";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

export function Modal({
  open,
  onClose,
  title,
  children,
  width = "md",
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  width?: "md" | "lg" | "full";
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-ink-deep/85 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-10 max-h-[88vh] w-full overflow-auto border border-border bg-card p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200 sm:p-8",
          width === "md" && "max-w-lg",
          width === "lg" && "max-w-3xl",
          width === "full" && "max-w-6xl bg-transparent border-0 p-0 shadow-none",
        )}
      >
        {title ? (
          <div className="mb-6 flex items-start justify-between gap-4">
            <h3 className="text-2xl text-ink">{title}</h3>
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon name="close" />
            </button>
          </div>
        ) : (
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 z-20 rounded-full bg-ink/70 p-2 text-white transition-colors hover:bg-primary"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
