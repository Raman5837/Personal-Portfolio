import React from "react";
import styled from "styled-components";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import SeeButton from "./SeeButton";
import { Link } from "react-router-dom";
import AboutImage from "../assets/images/coder-4.jpg";
import env from "../config/env";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;

  .container {
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: flex-start;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .aboutSection__right {
    img {
      object-fit: contain;
    }
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-left: 0;
    margin-top: 2rem;
  }
  .aboutSection__buttons {
    gap: 2rem;
    display: flex;
    margin-top: 2rem;
    align-items: center;
    justify-content: flex-start;

    .button:hover,
    .Button:hover {
      transform: translateY(10%);
      transition: all 0.3s ease-in-out;
    }
  }
  .Button {
    margin-top: 1.8rem;
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? "var(--gray-1)" : "black")};
  }

  @media only screen and (max-width: 1200px) {
    .aboutSection__buttons {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      text-align: center;
      flex-direction: column;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle subHeading="" heading="About Me" />

          <PText>
            I like keeping things smart, efficient, and hassle-free, whether
            it's work, problem-solving, or just life in general.
            <br></br>
            <br></br>I believe in making things simpler, not harder, and I don't
            mind taking the clever route to get there.
            <br></br>
            <br></br>A bit of practicality, a touch of wit, and a no-fuss
            attitude—that's how I roll.
          </PText>

          <div className="aboutSection__buttons">
            <Link
              className="Button"
              to={{ pathname: env.RESUME_LINK }}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </Link>

            <SeeButton worksLink="/about" text="Read More" outline />
          </div>
        </div>

        <div className="aboutSection__right">
          <img src={AboutImage} alt="Aman Verma" />
        </div>
      </div>
    </AboutSectionStyle>
  );
};

export default AboutSection;
