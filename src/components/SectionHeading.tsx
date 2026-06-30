type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`font-heading text-2xl font-bold sm:text-3xl ${
          light ? "text-white" : "text-brand-blue"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 max-w-2xl text-base leading-relaxed sm:text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-blue-100" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-3 h-1 w-16 rounded-full bg-brand-orange ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
