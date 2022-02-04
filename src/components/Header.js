import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  background: var(--header);

  padding: 10px;

  .header__title {
    font-size: 30px;
    color: var(--white);
  }
`;

export default function Header() {
  return (
    <HeaderStyle className="header">
      <h1 className="header__title">Input Component Challenge</h1>
    </HeaderStyle>
  );
}
