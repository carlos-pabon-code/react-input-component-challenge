import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import PhoneNormal from "@mui/icons-material/Phone";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import PhoneRounded from "@mui/icons-material/LocalPhoneRounded";
import PhoneTwoTone from "@mui/icons-material/LocalPhoneTwoTone";
import PhoneSharp from "@mui/icons-material/LocalPhoneSharp";
import LockNormal from "@mui/icons-material/Lock";
import LockOutlined from "@mui/icons-material/LockOutlined";
import LockRounded from "@mui/icons-material/LockRounded";
import LockTwoTone from "@mui/icons-material/LockTwoTone";
import LockSharp from "@mui/icons-material/LockSharp";

const Main = styled.main`
  margin: 0 auto;
  width: 65vw;
  padding: 20px;
  height: 100%;
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
    margin-bottom: 100px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
  }

  @media (min-width: 800px) {
    #card-ctn {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
          <Card labelName="&lt;Input /&gt;" />
          <Card labelName="&:hover" state="hover" grayText="true" />
          <Card labelName="&:focus" state="focus" grayText="true" />
          <Card labelName="&lt;Input error /&gt;" state="error" />
          <Card labelName="&:hover error" state="hover" grayText="true" />
          <Card
            labelName="&:focus error"
            state="focus"
            err="error"
            grayText="true"
          />
          <Card labelName="&lt;Input disabled /&gt;" btn="true" />
          <Card labelName="&lt;Input color blue /&gt;" color="blue" />
          <Card labelName="&lt;Input color green /&gt;" color="green" />
          <Card
            labelName='&lt;Input helperText="Some interesting text" /&gt;'
            helper="true"
          />
          <Card
            labelName='&lt;Input helperText="Some interesting text" error /&gt;'
            helper="true"
            err="error"
            state="focus"
          />
          <Card
            labelName="&lt;Input startIcon normal /&gt;"
            iconSide="left"
            icon={<PhoneNormal />}
          />
          <Card
            labelName="&lt;Input endIcon normal /&gt;"
            iconSide="right"
            icon={<LockNormal />}
          />
          <Card
            labelName="&lt;Input startIcon outlined /&gt;"
            iconSide="left"
            icon={<PhoneOutlined />}
          />
          <Card
            labelName="&lt;Input endIcon outlined /&gt;"
            iconSide="right"
            icon={<LockOutlined />}
          />
          <Card
            labelName="&lt;Input startIcon rounded /&gt;"
            iconSide="left"
            icon={<PhoneRounded />}
          />
          <Card
            labelName="&lt;Input endIcon rounded /&gt;"
            iconSide="right"
            icon={<LockRounded />}
          />
          <Card
            labelName="&lt;Input startIcon two-tone /&gt;"
            iconSide="left"
            icon={<PhoneTwoTone />}
          />
          <Card
            labelName="&lt;Input endIcon two-tone /&gt;"
            iconSide="right"
            icon={<LockTwoTone />}
          />
          <Card
            labelName="&lt;Input startIcon sharp /&gt;"
            iconSide="left"
            icon={<PhoneSharp />}
          />
          <Card
            labelName="&lt;Input endIcon sharp /&gt;"
            iconSide="right"
            icon={<LockSharp />}
          />
          <Card labelName='&lt;Input value=text" /&gt;' value="true" />
          <Card labelName='&lt;Input size=sm" /&gt;' size="sm" />
          <Card labelName='&lt;Input size=md" /&gt;' size="md" />
          <Card labelName='&lt;Input fullWidth" /&gt;' size="full" />

          <br />
          <Card labelName='&lt;Input multiline row="4" /&gt;' multiline="4" />
        </section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
