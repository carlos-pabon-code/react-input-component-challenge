import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

const Main = styled.main`
  margin: 0 auto;
  width: 65vw;
  padding: 20px;

  #challenge-title {
    color: var(--gray);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    padding: 20px;
  }

  #card-ctn {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  }

  @media (min-width: 1800px) {
    #card-ctn {
      grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    }
  }
`;

function App() {
  return (
    <div id="app">
      <Header />
      <Main id="main" role="main">
        <h2 id="challenge-title">Inputs</h2>
        <section id="card-ctn">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
