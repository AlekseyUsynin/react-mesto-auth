import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="element">
      <img
        onClick={handleClick}
        className="element__image"
        alt={props.name}
        src={props.link}
      />
      <h2 className="element__title">{props.name}</h2>
      <div className="element__like-container">
        <button className="element__like" type="button"></button>
        <p className="element__likes-number">{props.likes.length}</p>
      </div>
      <button className="element__delete"></button>
    </div>
  );
}

export default Card;
