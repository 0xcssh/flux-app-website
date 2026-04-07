import AppStoreButton from "@/components/ui/AppStoreButton";
import PhoneFrame from "@/components/ui/PhoneFrame";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background sine wave */}
      <div className="sine-wave-bg pointer-events-none absolute inset-0 opacity-40" />
      {/* Blue glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-flux-blue/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-flux-blue/20 bg-flux-blue/5 px-4 py-1.5 text-sm text-flux-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-flux-blue animate-pulse" />
              The first men&apos;s hormonal cycle tracker
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Testosterone Drops{" "}
              <span className="gradient-text">Up to 43%</span>{" "}
              Every Day.{" "}
              <br className="hidden sm:inline" />
              Track It.
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-flux-muted lg:mx-0">
              Your testosterone peaks at 6 AM and crashes by evening. Flux maps
              your 24-hour hormonal rhythm so you know when to train, focus,
              rest, and perform at your best.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <AppStoreButton />
              <a
                href="#science"
                className="text-sm font-medium text-flux-blue transition-colors hover:text-flux-blue-light"
              >
                See the Research &darr;
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-flux-muted lg:justify-start">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-flux-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free to use
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-flux-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                60-second daily check-in
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-flux-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Backed by peer-reviewed research
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-shrink-0">
            <PhoneFrame
              src="/images/screenshot-dashboard.jpg"
              alt="Flux app dashboard showing Vitality Score and daily plan"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
