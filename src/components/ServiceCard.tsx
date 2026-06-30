import Link from "next/link";

type ServiceCardProps = {
  title: string;
  short: string;
  href?: string;
};

function CardContent({ title, short, href }: ServiceCardProps) {
  return (
    <div className="group h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-brand-blue/30 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <h3 className="font-heading text-lg font-semibold text-brand-blue">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{short}</p>
      {href && (
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-orange group-hover:underline">
          Learn more →
        </span>
      )}
    </div>
  );
}

export default function ServiceCard({ title, short, href }: ServiceCardProps) {
  if (href) {
    return (
      <Link href={href}>
        <CardContent title={title} short={short} href={href} />
      </Link>
    );
  }

  return <CardContent title={title} short={short} />;
}
