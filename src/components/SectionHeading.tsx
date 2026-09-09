interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: Props) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {label && (
        <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.3em] text-gold uppercase mb-4 block">
          {label}
        </span>
      )}
      <h2
        className={`font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase ${
          light ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-silver-dark max-w-2xl leading-relaxed text-sm md:text-base mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 w-16 h-0.5 bg-gold ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
