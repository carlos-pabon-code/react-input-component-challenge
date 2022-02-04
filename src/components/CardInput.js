import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 200px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid var(--gray);
  outline: none;
  padding-left: 10px;
`;

export default function CardInput() {
  return (
    <Input
      type="text"
      id="normal__input"
      className="card__input"
      name="normal_input"
      placeholder="Placeholder"
    />
  );
}
