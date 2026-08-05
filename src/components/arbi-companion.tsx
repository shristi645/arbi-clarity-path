import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sparkles, X } from "lucide-react";
import { Arbi, type ArbiMood } from "@/components/arbi";
import { Button } from "@/components/ui/button";

const LINES = [
  "You're 2 tasks away from protecting your streak. I'd start with the short one.",
  "I predict Thursday gets crowded — want me to move your deep-work block earlier?",
  "Momentum looks good this week. Small steps, remember.",
];

/** Floating Arbi companion — bottom right, opens a soft insight bubble. */
export function ArbiCompanion({ mood = "idle" }: { mood?: ArbiMood }) {
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="glass-strong w-[19rem] rounded-3xl p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="font-display text-sm font-semibold">Arbi</p>
              <button
                onClick={() => setOpen(false)}
                className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Close Arbi"
              >
                <X className="size-4" />
              </button>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{LINES[i]}</p>
            <Button
              variant="soft"
              size="sm"
              className="mt-4 w-full"
              onClick={() => setI((v) => (v + 1) % LINES.length)}
            >
              <Sparkles /> Another insight
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Talk to Arbi"
        className="glass-strong cursor-pointer rounded-full p-2"
      >
        <Arbi mood={open ? "thinking" : mood} size={56} />
      </motion.button>
    </div>
  );
}
