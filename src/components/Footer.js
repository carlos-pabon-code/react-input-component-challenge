import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  width: 100%;
  height: 60px;
  background: var(--focus);
  text-align: center;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .footer__text {
    color: var(--white);
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

  .footer__text--strong {
    font-weight: 700;
  }
`;

export default function Footer() {
  return (
    <FooterStyles className="footer">
      <p className="footer__text">
        created by{" "}
        <span className="footer__text--strong"> carlos.pabon.code </span> -
        devChallenges.io
      </p>
    </FooterStyles>
  );
}
