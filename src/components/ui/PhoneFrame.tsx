import Image from "next/image";

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
}

export default function PhoneFrame({ src, alt, className = "" }: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto w-[280px] ${className}`}>
      <div className="overflow-hidden rounded-[2.5rem] border-[3px] border-flux-border bg-flux-surface p-1.5 shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-flux-surface" />
        <div className="overflow-hidden rounded-[2rem]">
          <Image
            src={src}
            alt={alt}
            width={280}
            height={607}
            className="h-auto w-full"
            quality={90}
          />
        </div>
      </div>
    </div>
  );
}
