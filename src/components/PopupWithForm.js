import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        ></button>
        <form
          className={`popup__form popup__form_${props.name}`}
          name={`${props.name}-form`}
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__button-submit" type="submit">
            {props.textButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
