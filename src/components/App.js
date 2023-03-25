import React, { useState } from "react";
import "../index.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="app">
      <div className="page">
        <Header />
        <Main
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
          onCardClick={(card) => setSelectedCard(card)}
        />
        <Footer />
      </div>
      <PopupWithForm // popup avatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="popup-form-avatar"
        title="Обновить аватар"
        textButton="Сохранить"
      >
        <input
          id="avatar"
          className="popup__input popup__input_type_avatar"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="avatar-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm // popup редактирования профиля
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        textButton="Сохранить"
      >
        <input
          className="popup__input popup__input_type_name"
          id="title"
          type="text"
          placeholder="Имя"
          name="titleSelector"
        />
        <span className="title-error popup__input-error"></span>
        <input
          id="info"
          className="popup__input popup__input_type_job"
          type="text"
          placeholder="О себе"
          name="infoSelector"
          required
        />
        <span className="info-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm // popup добавлекния карточек
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add-profile"
        title="Новое место"
        textButton="Сохранить"
      >
        <input
          id="name"
          className="popup__input popup_edit-profile"
          type="text"
          placeholder="Название"
          name="name"
          required
        />
        <span className="name-error popup__input-error"></span>
        <input
          id="link"
          className="popup__input popup__input_type_link"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          required
        />
        <span className="link-error popup__input-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
