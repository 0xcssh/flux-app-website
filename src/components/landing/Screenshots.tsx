import SectionHeading from "@/components/ui/SectionHeading";
import PhoneFrame from "@/components/ui/PhoneFrame";

const screenshots = [
  {
    src: "/images/screenshot-dashboard.jpg",
    alt: "Dashboard with Vitality Score and daily plan",
    caption: "Dashboard",
  },
  {
    src: "/images/screenshot-cycle.jpg",
    alt: "Circadian rhythm graph showing hormonal phases",
    caption: "Circadian Rhythm",
  },
  {
    src: "/images/screenshot-checkin.jpg",
    alt: "Daily check-in with energy, mood, libido sliders",
    caption: "Daily Check-in",
  },
  {
    src: "/images/screenshot-insights.jpg",
    alt: "Insights showing community benchmarks and predictions",
    caption: "Insights",
  },
];

export default function Screenshots() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="See Flux in Action"
          subtitle="A complete view of your hormonal health, designed for daily use."
        />
        <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide sm:justify-center sm:flex-wrap">
          {screenshots.map((s) => (
            <div key={s.src} className="flex-shrink-0 snap-center">
              <PhoneFrame src={s.src} alt={s.alt} className="w-[220px] sm:w-[240px]" />
              <p className="mt-4 text-center text-sm font-medium text-flux-muted">
                {s.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
