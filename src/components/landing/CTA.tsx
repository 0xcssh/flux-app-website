import AppStoreButton from "@/components/ui/AppStoreButton";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-flux-blue/20 bg-gradient-to-br from-flux-blue/10 via-flux-surface to-flux-surface p-12 text-center sm:p-20">
          {/* Glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-flux-blue/10 blur-[100px]" />

          <h2 className="relative mb-4 text-3xl font-bold text-white sm:text-4xl">
            Your Hormones Are Already Cycling.
            <br />
            Start Paying Attention.
          </h2>
          <p className="relative mx-auto mb-8 max-w-lg text-lg text-flux-muted">
            Join the first generation of men tracking their hormonal rhythm.
            Free to use. 60 seconds a day. Built on real science.
          </p>
          <div className="relative flex justify-center">
            <AppStoreButton />
          </div>
        </div>
      </div>
    </section>
  );
}
