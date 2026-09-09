interface Props {
  children: React.ReactNode;
  className?: string;
  /** max-w constraint: 'narrow' = 768px, 'medium' = 1024px, 'wide' = 1280px (default) */
  size?: "narrow" | "medium" | "wide";
}

const sizes = {
  narrow: "max-w-3xl",
  medium: "max-w-5xl",
  wide: "max-w-7xl",
};

export default function Container({ children, className = "", size = "wide" }: Props) {
  return (
    <div className={`${sizes[size]} mx-auto px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
