import { Reveal } from "@/components/Reveal";
import { guestbook, type GuestbookNote } from "@/lib/content";

const stickyColors = {
  blush: "bg-blush",
  sage: "bg-sage/15 border border-sage/25",
  butter: "bg-butter",
  latte: "bg-latte/45",
} as const;

const defaultRotations = [-2, 1.5, -1.5, 2, -2.5, 2] as const;

function getRotation(note: GuestbookNote, index: number) {
  return note.rotate ?? defaultRotations[index % defaultRotations.length];
}

function StickyNote({
  note,
  rotation,
}: {
  note: GuestbookNote;
  rotation: number;
}) {
  const color = note.color ?? "butter";

  return (
    <article
      className={`sticky-note ${stickyColors[color]} h-full w-full px-10 pt-10 pb-5 transition-transform duration-300 hover:rotate-1`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <p className="font-display text-[1.05rem] leading-snug text-espresso md:text-lg">
        &ldquo;{note.text}&rdquo;
      </p>
      <p className="mt-4 border-t border-espresso/10 pt-3 text-xs font-medium tracking-wide text-espresso-muted uppercase">
        {note.author}
      </p>
    </article>
  );
}

function ReceiptNote({
  note,
  rotation,
}: {
  note: GuestbookNote;
  rotation: number;
}) {
  return (
    <article
      className="receipt h-full w-full rounded-sm px-10 py-5 transition-transform duration-300 hover:rotate-1"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <p className="mt-1 font-display text-sm text-sage">{note.author}</p>
      <p className="mt-4 text-xs leading-relaxed text-espresso">{note.text}</p>
      <p className="mt-5 border-t border-dashed border-latte pt-3 text-center text-[10px] text-espresso-muted">
        ♥
      </p>
    </article>
  );
}

export function Guestbook() {
  return (
    <section id="guestbook" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs font-medium tracking-widest text-sage uppercase">
            Gửi Châm
          </p>
          <h2 className="font-display mt-2 text-3xl text-espresso md:text-4xl">
            Thông điệp cột sống
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="guestbook-board mt-12 p-6 md:p-10">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              {guestbook.map((note, i) => (
                <li key={note.id} className="flex min-h-[140px] items-center justify-center p-1">
                  <Reveal delay={i * 60} className="h-full w-full">
                    {note.style === "sticky" ? (
                      <StickyNote
                        note={note}
                        rotation={getRotation(note, i)}
                      />
                    ) : (
                      <ReceiptNote
                        note={note}
                        rotation={getRotation(note, i)}
                      />
                    )}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
