// Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.footerBg};
  color: ${({ theme }) => theme.footerText};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 0;
  left: 0;
`;

const FooterText = styled.div`
  font-size: 14px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 16px;

  a {
    color: ${({ theme }) => theme.footerLink};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Your Company. All rights reserved.</FooterText>
      <FooterLinks>
       {/* <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>*/}
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
