import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/content";

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: Project[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null;

  const next = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % items.length);
  }, [index, items.length, onIndexChange]);

  const prev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + items.length) % items.length);
  }, [index, items.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, next, prev]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/97 backdrop-blur-sm"
        >
          <div className="container-editorial flex h-20 shrink-0 items-center justify-between">
            <span className="text-[0.625rem] tracking-[0.28em] uppercase text-ivory/50">
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar galeria"
              className="grid h-11 w-11 place-items-center text-ivory/70 transition-colors hover:text-ivory"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Projeto anterior"
              className="absolute left-2 z-10 grid h-12 w-12 place-items-center rounded-full border border-border text-ivory/70 transition-colors hover:border-sand hover:text-sand sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <motion.img
              key={item.id}
              src={item.image}
              alt={item.title}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full max-w-full rounded-sm object-contain"
            />
            <button
              type="button"
              onClick={next}
              aria-label="Próximo projeto"
              className="absolute right-2 z-10 grid h-12 w-12 place-items-center rounded-full border border-border text-ivory/70 transition-colors hover:border-sand hover:text-sand sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="container-editorial shrink-0 border-t border-border/60 py-5">
            <p className="text-[0.625rem] tracking-[0.28em] uppercase text-sand">{item.category}</p>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-6 gap-y-1">
              <h3 className="font-display text-xl text-ivory">{item.title}</h3>
              <p className="text-xs text-ivory/50">
                {item.material}
                {item.location ? ` • ${item.location}` : ""}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
