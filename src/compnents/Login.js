import { signInWithPopup } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

export default function Login(props) {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <CTA>
          <CTAlogoOne src="images/cta-logo-one.svg" />
          <Signup onClick={signInWithGoogle}>GET IT ALL THERE</Signup>
          <Description>
            {" "}
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>

        <BgImage />
      </Content>
    </Container>
  );
}

const BgImage = styled.div`
  height: 100%;
  background-image: url("/images/login-background.jpg");
  z-index: -1;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 850px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  align-items: center;
  text-align: center;
  /* margin-right: auto;
  margin-left: auto; */
`;

const CTAlogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 800px;
  min-height: 1px;
  width: 100%;
  display: block;
`;

const Signup = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0319bd;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
