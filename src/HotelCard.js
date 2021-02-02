import React from 'react';
import './HotelCard.css';
import StarIcon from '@material-ui/icons/Star';
function Card({
  image,
  title,
  description,
  date,
  star,
}) {
  return (
    <div
      data-Aos="zoom-in"
      className="hotel__card">
      <img src={image} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{date}</h3>
        <h4 className="rating">
          {' '}
          <StarIcon className="rating_star" />{' '}
          {star}{' '}
        </h4>
      </div>
    </div>
  );
}

export default Card;
