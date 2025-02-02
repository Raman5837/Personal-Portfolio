import React from "react";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";
import ContactInfoContent from "./ContactInfoContent";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";

const StyleContactSection = styled.div`
  padding: 10rem 0;

  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    // background-color: var(--gray-1);
    background-color: #ffe9b5;
    left: 50%;
    top: 22%;
    transform: translate(-50%, -30%);
  }
  .left {
    margin-top: 7rem;
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
  }

  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

const ContactSection = () => {
  return (
    <>
      <StyleContactSection>
        <div className="container">
          <SectionTitle subHeading="" heading="Contact Me" />

          <div className="contactSection__wrapper">
            <div className="left">
              <ContactInfoContent
                icon={<MdEmail />}
                text="helpmeamann@gmail.com"
              />
              <ContactInfoContent text="India" />
            </div>

            <div className="right">
              <ContactForm />
            </div>
          </div>
        </div>
      </StyleContactSection>
    </>
  );
};

export default ContactSection;
