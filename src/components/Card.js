import React from "react";
import styled from "styled-components";
import CardInput from "./CardInput";

const CardStyles = styled.section`
  width: 250px;
  background: blue;
  margin: 10px;
  border-radius: 8px;
  background: var(--back-card);
  padding: 20px;
  display: flex;
  flex-direction: column;

  .card__label {
    font-size: 12px;
    font-family: "Noto Sans", sans-serif;
    padding: 10px 0px 5px 0px;
  }

  .card__title {
    color: var(--normal);
    font-size: 12px;
    font-weight: 400;
    font-family: "Ubuntu Mono", monospace;
  }
`;

export default function Card() {
  return (
    <CardStyles className="card">
      <h2 className="card__title">&lt;Input &gt;</h2>
      <label className="card__label" htmlFor="normal__input">
        Label
      </label>
      <CardInput />
    </CardStyles>
  );
}
