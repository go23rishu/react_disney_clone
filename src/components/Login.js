import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            {" "}
            NEW EPISODE EVERY FRIDAY,12 AM. In the new 5-part season, Meera and
            her son have moved on from their tumultuous past. That is until
            Akarsh and Alia return to Coonoor...
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
      </Content>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  height: 100vh;
  padding: 3.5vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: top;
    z-index: -1;
    opacity: 0.7;
  }
`;
const Content = styled.div``;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  flex-direction: column;
  display: flex;
  margin-top: 100px;
`;
const CTALogoOne = styled.img`
  height: auto;
`;
const CTALogoTwo = styled.img`
  height: auto;
  width: 95%;
  padding: 0 2vw;
`;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  color: white;
  text-transform: uppercase;
`;
