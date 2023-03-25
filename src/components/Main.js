import { useState, useEffect } from "react";
import Card from "./Card";
import api from "../utils/api";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, items]) => {
        setCurrentUser(data);
        setCards(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      {/* раздел профиль */}
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__edit-avatar"
            onClick={() => {
              onEditAvatar(true);
            }}
          >
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="Аватарка"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__title" name="profileTitle">
              {currentUser.name}
            </h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={() => {
                onEditProfile(true);
              }}
            ></button>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={() => {
            onAddPlace(true);
          }}
        ></button>
      </section>

      {/* конструктор карточки */}
      <section className="elements">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            name={card.name}
            link={card.link}
            likes={card.likes}
            onCardClick={() => {
              onCardClick(card);
            }}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
