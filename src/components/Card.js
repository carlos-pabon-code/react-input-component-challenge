import React from "react";

export default function Card() {
  return (
    <section className="card">
      <h2 className="card__title">&lt;Input &gt;</h2>
      <label className="card__label" htmlFor="normal__input">
        Label
      </label>
      <input
        type="text"
        id="normal__input"
        name="normal_input"
        className="card__input"
      />
    </section>
  );
}
