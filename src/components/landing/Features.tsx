import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";

const features = [
  {
    title: "Vitality Score",
    description:
      "A single number (0-100) that captures your daily hormonal state based on 6 key metrics. See where you rank among men your age.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "60-Second Check-in",
    description:
      "Log Energy, Mood, Libido, Sleep Quality, Stress, and Physical Activity in under a minute. The science shows these are the key markers.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "AI Daily Plan",
    description:
      "Personalized recommendations based on your phase: when to train, focus, avoid caffeine, and wind down. Powered by predictive AI.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "4 Hormonal Phases",
    description:
      "Rise, Peak, Decline, Recovery — know exactly where you are in your 24-hour cycle. Based on peer-reviewed circadian research.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3,12 C6,6 9,6 12,12 C15,18 18,6 21,12" />
      </svg>
    ),
  },
  {
    title: "Circadian Rhythm Graph",
    description:
      "Visualize your 24-hour testosterone curve — from the 5:30 AM surge to the evening nadir. Plan your day around your biology.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16" />
      </svg>
    ),
  },
  {
    title: "Wearable Integration",
    description:
      "Connect Apple Watch, Oura, or WHOOP to auto-track sleep, HRV, and activity. Less friction, better data, smarter insights.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Built for Men Who Optimize"
          subtitle="Six core tools to understand and leverage your body's natural rhythm — backed by endocrinology, not bro science."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <GlowCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
