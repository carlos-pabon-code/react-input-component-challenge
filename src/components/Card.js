import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
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

  .card__helper {
    font-family: "Noto Sans";
    font-size: 10px;
    color: gray;
  }

  ${({ focus, state }) =>
    focus && state === "focus"
      ? css`
          &:focus-within .card__label {
            color: ${focus};
          }
        `
      : ""}

  ${({ focus, state }) =>
    focus && state === "focus"
      ? css`
          &:focus-within .card__helper {
            color: ${focus};
          }
        `
      : ""}

  .card__label {
    font-size: 12px;
    font-family: "Noto Sans", sans-serif;
    padding: 10px 0px 5px 0px;
    ${({ state }) =>
      state === "error" &&
      css`
        color: var(--error);
      `}
  }

  .card__title {
    color: var(--normal);
    font-size: 12px;
    font-weight: 400;
    font-family: "Ubuntu Mono", monospace;
    ${({ grayText }) =>
      grayText &&
      css`
        color: var(--gray);
      `}
  }

  ${({ size }) =>
    size === "full" &&
    css`
      width: 100%;
    `}
`;

const IconStyle = styled.div`
  ${({ iconSide }) =>
    iconSide === "left"
      ? css`
          position: absolute;
          margin-top: 58px;
          margin-left: 10px;
          color: var(--gray);
        `
      : css`
          position: absolute;
          margin-top: 58px;
          margin-left: 160px;
          color: var(--gray);
        `}
`;

export default function Card({
  labelName,
  state,
  grayText,
  err,
  btn,
  helper,
  iconSide,
  icon,
  value,
  size,
  multiline,
  color,
}) {
  const [focus, setFocus] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const handleFocus = (color) => {
    setFocus(color);
  };
  return (
    <CardStyles
      className="card"
      state={state}
      focus={focus}
      err={err}
      grayText={grayText}
      size={size}
    >
      <h2 className="card__title">{labelName}</h2>
      <label className="card__label" htmlFor={labelName}>
        Label
      </label>
      <CardInput
        type={{ state }}
        err={err}
        handleFocus={handleFocus}
        labelName={labelName}
        disabled={disabled}
        iconSide={iconSide}
        value={value}
        size={size}
        multiline={multiline}
        color={color}
      />
      {helper && <p className="card__helper">Some interesting text</p>}
      {btn && (
        <Button disabled={disabled} setDisabled={setDisabled} btn={btn} />
      )}
      {iconSide && <IconStyle iconSide={iconSide}>{icon}</IconStyle>}
    </CardStyles>
  );
}
