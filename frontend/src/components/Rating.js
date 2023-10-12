import React, { useMemo } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

// Mostrar el número de estrellas de cada producto.

const Rating = ({ value, text, color }) => {
  const starRating = useMemo(
    (color) => {
      let stars = Array(5)
        // Crea un array de 0 [0,0,0,0,0]
        .fill(0)
        // Recorre todo el Array.
        .map((_, i) =>
          // Si la valoración es mayor que el índice + 1 (1 >= 0 + 1)
          value >= i + 1 ? (
            <FontAwesomeIcon
              style={{ color: '#f8e825' }}
              key={i}
              className="pe-2"
              icon={faStar}
              size="xs"
            />
          ) : // Para media estrella.
          value >= i + 0.5 ? (
            <FontAwesomeIcon
              style={{ color: '#f8e825' }}
              key={i}
              className="pe-2"
              icon={faStarHalfAlt}
              size="xs"
            />
          ) : (
            // Para estrella vacía.
            <FontAwesomeIcon
              style={{ color: '#f8e825' }}
              key={i}
              className="pe-2"
              icon={faStarRegular}
              size="xs"
            />
          )
        );

      return stars;
    },
    [value]
  );

  return (
    <div className="rating">
      {starRating}
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
