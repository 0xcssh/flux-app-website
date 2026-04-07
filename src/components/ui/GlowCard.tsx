import { ReactNode } from "react";

interface GlowCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function GlowCard({ icon, title, description }: GlowCardProps) {
  return (
    <div className="group rounded-2xl border border-flux-border bg-flux-card p-6 transition-all duration-300 hover:border-flux-blue/30 glow-blue-hover">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-flux-blue/10 text-flux-blue">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-flux-muted">{description}</p>
    </div>
  );
}
