import { useState } from "react";
import PropTypes from "prop-types";

export default function StarRating({ onRatingSubmit }) {
  const [rating, setRating] = useState(0); // Final rating value
  const [hover, setHover] = useState(0); // Hovered star index

  const handleRating = (rate) => {
    setRating(rate);
    if (onRatingSubmit) {
      onRatingSubmit(rate); // Trigger callback with the rating
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <p className="text-lg text-zinc-50 font-medium">
        Dê uma nota para essa aula INCRÍVEL
      </p>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer text-4xl transition-transform transform ${
              star <= (hover || rating)
                ? "text-yellow-500 scale-110"
                : "text-zinc-500"
            }`}
            onMouseEnter={() => setHover(star)} // Highlight on hover
            onMouseLeave={() => setHover(0)} // Remove highlight when not hovering
            onClick={() => handleRating(star)} // Set the rating
            role="button"
            aria-label={`Rate ${star} stars`}
          >
            ★
          </span>
        ))}
      </div>
      {rating > 0 && (
        <p className="text-sm text-zinc-400">
          Você deu{" "}
          <span className="font-bold text-yellow-500">
            {rating} estrelas para esse vídeo.
          </span>{" "}
          <span className="text-zinc-50">
            Mas eu não ligo, eu não salvo essa informação.
          </span>
        </p>
      )}
    </div>
  );
}

StarRating.propTypes = {
  onRatingSubmit: PropTypes.func,
};
