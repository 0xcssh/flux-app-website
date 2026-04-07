import SectionHeading from "@/components/ui/SectionHeading";

const facts = [
  {
    stat: "20-43%",
    label:
      "Testosterone drops from its morning peak to evening nadir. The decline reaches 25% in young men and up to 43% across all ages.",
    source: "Brambilla et al., 2008 & Diver et al., 2003 — J Clin Endocrinol Metab",
  },
  {
    stat: "5:30-8 AM",
    label:
      "The testosterone peak window. Your body produces the most testosterone during late sleep and early morning hours, driven by REM sleep.",
    source: "Luboshitzky et al., 2001 — Sleep Research",
  },
  {
    stat: "10-15%",
    label:
      "Testosterone reduction caused by just one week of sleeping only 5 hours per night. Sleep is the #1 lever for hormonal health.",
    source: "Leproult & Van Cauter, 2011 — JAMA",
  },
];

const phases = [
  {
    name: "Rise",
    time: "4-8 AM",
    color: "bg-flux-blue",
    description: "Testosterone surges during late sleep. You wake with peak hormonal drive.",
  },
  {
    name: "Peak",
    time: "8 AM-12 PM",
    color: "bg-flux-green",
    description: "Highest energy, focus, and physical strength. Ideal for demanding tasks and workouts.",
  },
  {
    name: "Decline",
    time: "12-7 PM",
    color: "bg-flux-amber",
    description: "Gradual hormonal descent. Switch to creative work, lighter exercise, social activities.",
  },
  {
    name: "Recovery",
    time: "7 PM-4 AM",
    color: "bg-flux-red",
    description: "Lowest testosterone. Wind down, avoid caffeine, prioritize sleep quality.",
  },
];

export default function Science() {
  return (
    <section id="science" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Backed by Science, Not Bro Science"
          subtitle="Flux is built on peer-reviewed endocrinology research — not influencer claims or supplement marketing."
        />

        {/* Stats grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.stat}
              className="rounded-2xl border border-flux-border bg-flux-card p-8 text-center"
            >
              <div className="mb-3 text-4xl font-bold gradient-text">
                {fact.stat}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-flux-text">
                {fact.label}
              </p>
              <p className="text-xs text-flux-muted italic">{fact.source}</p>
            </div>
          ))}
        </div>

        {/* 4 phases */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            The 4 Phases of Your Daily Hormonal Cycle
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase) => (
              <div
                key={phase.name}
                className="rounded-2xl border border-flux-border bg-flux-surface p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full ${phase.color}`} />
                  <span className="font-semibold text-white">{phase.name}</span>
                  <span className="ml-auto text-xs text-flux-muted">{phase.time}</span>
                </div>
                <p className="text-sm leading-relaxed text-flux-muted">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Explainer */}
        <div className="mt-12 rounded-2xl border border-flux-border bg-flux-surface p-8 sm:p-12">
          <h3 className="mb-4 text-xl font-semibold text-white">
            Why track your hormonal rhythm?
          </h3>
          <p className="mb-4 leading-relaxed text-flux-muted">
            Unlike the monthly female cycle, the male hormonal cycle operates on
            a <strong className="text-flux-text">24-hour loop</strong>. Testosterone peaks
            between 5:30-8:00 AM and gradually declines throughout the day, reaching
            its lowest point around 7 PM. Research shows this rhythm directly affects
            your energy, mood, focus, libido, and physical performance — following a
            well-documented inverted-U curve.
          </p>
          <p className="mb-4 leading-relaxed text-flux-muted">
            Emerging research also suggests the existence of{" "}
            <strong className="text-flux-text">~20-30 day infradian cycles</strong> in
            men. A landmark study (Doering et al., 1975) found detectable testosterone
            cycles in 60% of subjects, with periods clustering around 20-22 days.
            More recent salivary studies confirmed both ~20-day and ~30-day rhythms
            with high statistical significance.
          </p>
          <p className="leading-relaxed text-flux-muted">
            Flux helps you understand these rhythms so you can schedule workouts,
            deep work, rest, and social activities at the optimal time — working{" "}
            <em className="text-flux-text">with</em> your biology instead of against it.
          </p>
        </div>
      </div>
    </section>
  );
}
