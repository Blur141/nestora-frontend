import { Star } from "lucide-react";

export default function Stars({
  fullStars,
  halfStar,
  rating,
  reviews,
}: {
  fullStars: number;
  halfStar: boolean;
  rating: number;
  reviews?: number;
}) {
  return (
    <div className="stars">
      {Array.from({ length: fullStars }).map((_, i) => (
        <i key={i} style={{ display: "inline-flex" }}>
          <Star size={14} fill="currentColor" />
        </i>
      ))}
      {halfStar && (
        <i style={{ display: "inline-flex", opacity: 0.6 }}>
          <Star size={14} fill="currentColor" />
        </i>
      )}
      <span>
        {rating} {reviews !== undefined && `(${reviews} reviews)`}
      </span>
    </div>
  );
}
