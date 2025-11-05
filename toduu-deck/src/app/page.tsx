const slides = [
  {
    id: "prelude",
    badge: "Haiku 01",
    title: "Toduu",
    headline: "Radical Simplicity · Elegant Intent",
    body: "A radically simple workspace for instructors and students. Crafted as a digital haiku—where every interaction is light, precise, and instinctive.",
    haiku: ["morning quiet hum", "tasks bloom in shared stillness", "clarity takes root"],
    background:
      "radial-gradient(circle at 15% 25%, rgba(123, 148, 255, 0.32), rgba(123, 148, 255, 0)), radial-gradient(circle at 80% 20%, rgba(255, 165, 229, 0.35), rgba(255, 165, 229, 0))",
    accent: "rgba(112, 195, 255, 0.22)",
  },
  {
    id: "essence",
    badge: "Essence",
    title: "Clarity through Reduction",
    headline: "The interface disappears so intention can surface.",
    body: "Toduu is an ecosystem, not a crowded app. Lists breathe, whitespace guides, and every control is purposeful. Participants orient in seconds—without training, without friction.",
    haiku: ["handwritten whisper", "only the needed strokes stay", "mind like open sky"],
    background:
      "radial-gradient(circle at 90% 10%, rgba(180, 236, 255, 0.35), rgba(180, 236, 255, 0)), radial-gradient(circle at 15% 85%, rgba(223, 211, 255, 0.28), rgba(223, 211, 255, 0))",
    accent: "rgba(232, 214, 255, 0.25)",
  },
  {
    id: "flow",
    badge: "Flow",
    title: "Onboarding, Invisible",
    headline: "Invite, share, synchronize—no setup ever required.",
    body: "Instructors spin up cohorts instantly. Participants step into shared clarity: tasks, micro-timelines, and rhythms already tuned. The choreography of collaboration becomes muscle memory.",
    haiku: ["open gate, soft dawn", "footsteps meet a ready path", "flow answers the call"],
    background:
      "radial-gradient(circle at 20% 70%, rgba(132, 255, 204, 0.2), rgba(132, 255, 204, 0)), radial-gradient(circle at 85% 30%, rgba(140, 178, 255, 0.3), rgba(140, 178, 255, 0))",
    accent: "rgba(132, 255, 204, 0.18)",
  },
  {
    id: "collaboration",
    badge: "Cohesion",
    title: "Shared Lists, Zero Friction",
    headline: "Trust-rich collaboration without privacy risk.",
    body: "Toduu balances openness with calm boundaries. Instructors orchestrate shared spaces while participants keep their personal cadence. No personal data ever leaves the local horizon.",
    haiku: ["two rivers converse", "each keeps its clear direction", "meeting without merge"],
    background:
      "radial-gradient(circle at 15% 15%, rgba(255, 221, 190, 0.28), rgba(255, 221, 190, 0)), radial-gradient(circle at 70% 80%, rgba(122, 215, 255, 0.24), rgba(122, 215, 255, 0))",
    accent: "rgba(255, 221, 190, 0.2)",
  },
  {
    id: "privacy",
    badge: "Architecture",
    title: "Private by Design",
    headline: "GDPR-safe, personal-data-free. Calm by default.",
    body: "Toduu stores no personal identifiers. Trust is embedded in the architecture: encrypted channels, ephemeral sessions, verifiable deletion. Compliance is inherited, not bolted on.",
    haiku: ["sealed garden breathes", "gentle walls keep minds at ease", "quiet lanterns glow"],
    background:
      "radial-gradient(circle at 80% 15%, rgba(255, 238, 170, 0.28), rgba(255, 238, 170, 0)), radial-gradient(circle at 20% 80%, rgba(187, 221, 255, 0.3), rgba(187, 221, 255, 0))",
    accent: "rgba(255, 238, 170, 0.23)",
  },
  {
    id: "engineered",
    badge: "Underneath",
    title: "Meticulously Engineered Calm",
    headline: "A Supabase-backed monorepo composed for resilience.",
    body: "Event-sourced timelines, optimistic sync, and typed contracts ensure every gesture feels immediate. Observability stays invisible thanks to structured traces and self-healing tasks.",
    haiku: ["beneath satin waves", "quiet gears align in time", "craft hides in the hush"],
    background:
      "radial-gradient(circle at 30% 20%, rgba(191, 215, 255, 0.35), rgba(191, 215, 255, 0)), radial-gradient(circle at 75% 75%, rgba(200, 255, 230, 0.22), rgba(200, 255, 230, 0))",
    accent: "rgba(191, 215, 255, 0.22)",
  },
  {
    id: "principles",
    badge: "Principles",
    title: "Radical Simplicity in Practice",
    headline: "Every detail is a decision to remove friction.",
    body: "Observability dashboards tuned for non-technical leads. Template libraries distilled to essentials. Motion tuned to the breath, type scales tuned to comprehension speed.",
    haiku: ["ink stroke, then a pause", "space remembers intention", "focus learns to stay"],
    background:
      "radial-gradient(circle at 50% 10%, rgba(255, 204, 220, 0.3), rgba(255, 204, 220, 0)), radial-gradient(circle at 10% 70%, rgba(174, 221, 255, 0.28), rgba(174, 221, 255, 0))",
    accent: "rgba(255, 204, 220, 0.22)",
  },
  {
    id: "invitation",
    badge: "Haiku 08",
    title: "Invitation to Calm",
    headline: "Let focus feel natural again.",
    body: "Toduu is a sanctuary for educators and learners who crave clarity. Step into the ecosystem where intention is effortless and progress feels poetic.",
    haiku: ["dusk settles in peace", "shared lanterns trace tomorrow", "toduu waits, awake"],
    background:
      "radial-gradient(circle at 20% 20%, rgba(136, 199, 255, 0.3), rgba(136, 199, 255, 0)), radial-gradient(circle at 80% 80%, rgba(255, 189, 210, 0.28), rgba(255, 189, 210, 0))",
    accent: "rgba(136, 199, 255, 0.24)",
  },
];

const Slide = ({
  badge,
  title,
  headline,
  body,
  haiku,
  background,
  accent,
}: (typeof slides)[number]) => {
  return (
    <section
      className="relative flex h-[100dvh] max-h-[1200px] w-full snap-start overflow-hidden px-6 py-14 md:px-16 lg:px-24"
      style={{ background }}
    >
      <div className="pointer-events-none absolute inset-0 backdrop-grid opacity-40" />
      <div
        className="absolute left-1/2 top-24 h-60 w-[32rem] -translate-x-1/2 rounded-full blur-3xl md:left-auto md:right-8 md:top-20 md:translate-x-0"
        style={{ background: accent }}
      />
      <div className="absolute -left-24 top-1/3 h-40 w-40 rounded-full aurora bg-white/8" />
      <div className="absolute -bottom-16 right-12 h-52 w-52 rounded-3xl border border-white/10 bg-white/5" />

      <div className="relative z-10 flex w-full flex-col gap-12 md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-white/60">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold">
              {badge}
            </span>
            <span className="h-px w-16 bg-gradient-to-r from-white/10 via-white/30 to-white/5" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-light leading-tight text-white/90 md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              {headline}
            </p>
            <p className="max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              {body}
            </p>
          </div>
        </div>

        <aside className="flex flex-col items-start gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <span className="text-xs uppercase tracking-[0.45em] text-white/40">
            Digital Haiku
          </span>
          <div className="flex flex-col gap-1 text-base font-light text-white/80">
            {haiku.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <span className="h-px w-full bg-gradient-to-r from-white/10 via-white/40 to-white/0" />
          <p className="text-xs uppercase tracking-[0.28em] text-white/35">
            Focus · Calm · Trust
          </p>
        </aside>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="relative mx-auto flex h-[100dvh] w-full max-w-[1400px] snap-y snap-mandatory flex-col overflow-y-scroll rounded-[40px] border border-white/10 bg-white/5 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
      <div className="pointer-events-none sticky top-10 z-20 mx-auto flex h-12 w-48 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs uppercase tracking-[0.32em] text-white/70 backdrop-blur">
        Toduu · Digital Haiku
      </div>
      {slides.map((slide) => (
        <Slide key={slide.id} {...slide} />
      ))}
    </main>
  );
}
