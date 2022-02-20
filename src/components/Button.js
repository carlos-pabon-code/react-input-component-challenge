import React, { useState } from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  background: var(--focus);
  width: 200px;
  margin-top: 20px;
  color: white;
  height: 35px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out;
  box-shadow: 1px 2px 2px var(--normal);

  &:hover {
    background: var(--interactive);
  }
`;

export default function Button({ disabled, setDisabled }) {
  const [buttonText, setButtonText] = useState("Disable Input");

  const handleClick = (e) => {
    setDisabled(!disabled);
    !disabled ? setButtonText("Enable Input") : setButtonText("Disable Input");
  };
  return <ButtonStyles onClick={handleClick}>{buttonText}</ButtonStyles>;
}
