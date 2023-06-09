function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_view-image ${card && "popup_opened"}`}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <figure className="popup__figure">
          <img className="popup__image" src={card?.link} alt={card?.name} />
          <figcaption className="popup__caption">{card?.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
