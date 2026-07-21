import Link from "next/link";

type ServiceCardProps = {
  icon?: string;
  title: string;
  short: string;
  href?: string;
};

function renderServiceIcon(iconKey?: string) {
  switch (iconKey?.toLowerCase()) {
    case "plywood":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case "hardware":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "aluminium":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16M4 12h16" />
        </svg>
      );
    case "interior":
    default:
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
  }
}

function CardContent({ icon, title, short, href }: ServiceCardProps) {
  return (
    <div className="group relative h-full rounded-xl border border-gray-200 border-t-4 border-t-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-t-brand-orange hover:border-brand-blue/30 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
        {renderServiceIcon(icon)}
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

export default function ServiceCard({ icon, title, short, href }: ServiceCardProps) {
  if (href) {
    return (
      <Link href={href} className="h-full">
        <CardContent icon={icon} title={title} short={short} href={href} />
      </Link>
    );
  }

  return <CardContent icon={icon} title={title} short={short} />;
}
