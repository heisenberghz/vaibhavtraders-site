import StarRating from "./StarRating";

type ReviewCardProps = {
  name: string;
  text: string;
  rating: number;
};

export default function ReviewCard({ name, text, rating }: ReviewCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <StarRating rating={rating} />
      <p className="mt-4 flex-1 text-base leading-relaxed text-gray-700">&ldquo;{text}&rdquo;</p>
      <p className="mt-4 border-t border-gray-100 pt-4 text-sm font-semibold text-brand-blue">
        — {name}
      </p>
      <p className="mt-1 text-xs text-gray-400">Google Review</p>
    </article>
  );
}
