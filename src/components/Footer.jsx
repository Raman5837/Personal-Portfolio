import React from "react";
import styled from "styled-components";
import PText from "./PText";

const FooterStyle = styled.div`
  background-color: var(--deep-dark);

  .container {
    display: flex;
    text-align: center;
    justify-content: center;
    .para {
      margin: 2rem auto;
      text-align: center;
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <PText>
          &copy; - 2025 | Made With 🖤 By -{" "}
          <a target="_blank" rel="noreferrer" href="https://amannn.in/">
            Aman Verma
          </a>{" "}
        </PText>
      </div>
    </FooterStyle>
  );
};

export default Footer;
