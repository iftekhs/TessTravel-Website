import { Avatar } from '@material-ui/core';
import React from 'react';
import './Card.css';
import StarIcon from '@material-ui/icons/Star';

function Card({
  avatarImage,
  image,
  name,
  review,
  star,
}) {
  return (
    <div data-Aos="zoom-in" className="card">
      <img src={image} />

      <div className="card_middle">
        <div className="card_middle_top">
          <Avatar src={avatarImage} alt="" />
          <h3> {name} </h3>
        </div>
        <div className="card_middle_info">
          <StarIcon className="searchResult__star" />
          <strong> {star} </strong>
        </div>
        <p>{review}</p>
      </div>
      <div className="card_middle"> </div>
    </div>
  );
}

export default Card;
