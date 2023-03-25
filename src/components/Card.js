import React from "react";

function Card({ card, onCardClick, name, link, likes }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="element">
      <img
        onClick={handleClick}
        className="element__image"
        alt={name}
        src={link}
      />
      <h2 className="element__title">{name}</h2>
      <div className="element__like-container">
        <button className="element__like" type="button"></button>
        <p className="element__likes-number">{likes.length}</p>
      </div>
      <button className="element__delete"></button>
    </div>
  );
}

export default Card;
