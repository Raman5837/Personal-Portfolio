import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const InfoStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;

  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
  }
  svg {
    width: 3.5rem;
  }
  .info {
    letter-spacing: 0.2rem;
  }
`;

const ContactInfoContent = ({ icon = <MdPlace />, text = "Contact Info" }) => {
  return (
    <InfoStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </InfoStyles>
  );
};

export default ContactInfoContent;
