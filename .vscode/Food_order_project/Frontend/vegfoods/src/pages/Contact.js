// Contact.js
import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const ContactTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Helpline = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactInfo>Email: support@vegfoods.com</ContactInfo>
      <ContactInfo>Phone: +91 8263857651</ContactInfo>
      <Helpline>Helpline: 8263857651</Helpline>
    </ContactContainer>
  );
};

export default Contact;
