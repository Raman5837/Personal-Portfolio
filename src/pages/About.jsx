import React from "react";
import PText from "./../components/PText";
import AboutImage from "../assets/images/Aman-PPic.jpg";
import styled from "styled-components";
import AboutInfoContent from "../components/AboutInfoContent";
import env from "../config/env";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  overflow-x: hidden;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subHeading {
    font-size: 2.2rem;
    margin-bottom: 2rem;

    span {
      background-color: var(--deep-dark);
      padding: 0.7rem 2rem 0.7rem 2rem;
      border-radius: 10px;
    }
  }
  .about__heading {
    font-size: 5rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
      font-size: 1.7rem;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__contents {
    margin-top: 15rem;
  }
  .about__info__content {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? "var(--gray-1)" : "black")};
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    overflow-x: hidden;
    .top-section {
      gap: 5rem;
      flex-direction: column;
    }
    .about__subHeading {
      font-size: 1.6rem;
    }
    .about__heading {
      font-size: 2.6rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .button {
      display: flex;
      max-width: 100%;
      font-size: 1.8rem;
      align-items: center;
      justify-content: center;
    }
  }
`;

const About = () => {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subHeading">
                {/* Hi, I'm <span>Aman</span> */}
              </p>
              <h2 className="about__heading">A Little More About Me</h2>
              <div className="about__info">
                <PText>
                  Skilled in building things from the ground up—taking ideas
                  from concept to reality, designing scalable systems, and
                  ensuring smooth execution.
                  <br></br>
                  <br></br>I enjoy solving real-world problems with technology,
                  whether it's developing new products, optimizing existing
                  systems, or streamlining workflows.
                  <br></br>
                  <br></br>
                  Strong in data structures, algorithms, and software
                  development, with an intuitive approach to problem-solving.
                  Passionate about creating efficient, maintainable solutions
                  that align with business needs.
                  <br></br>
                  <br></br>
                  With 3+ years of experience, I've worked across different
                  domains, turning ideas into functional, high-performing
                  products.
                  <br></br>
                  <br></br>
                  And if I seem to have disappeared? Check the kitchen—I'm
                  probably making ☕
                </PText>
              </div>
              <div className="button-wrapper">
                <a
                  className="button"
                  href={env.RESUME_LINK_VIEW}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="right">
              <img src={AboutImage} alt="Aman" />
            </div>
          </div>

          <div className="about__info__contents">
            <div className="about__info__content">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoContent
                title="B.Tech (CSE)"
                info={["Netaji Subhash Engineering College"]}
              />
            </div>

            <div className="about__info__content">
              <h1 className="about__info__heading">My Skills</h1>
              <AboutInfoContent
                title="Programming Languages"
                info={["Python", "Go", "Java", "JS", "C/C++"]}
              />
              <AboutInfoContent
                title="Development"
                info={["Django", "Spring Boot", "FastAPI", "NodeJS"]}
              />
              <AboutInfoContent
                title="Database"
                info={["MySQL", "PostgreSQL", "NoSQL", "Redis", "Vector"]}
              />
              <AboutInfoContent
                title="Core Skills"
                info={[
                  "Design & Architecture",
                  "Problem-Solving & Optimization",
                ]}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
};

export default About;
