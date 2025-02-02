import React from "react";
import PText from "./PText";
import styled from "styled-components";

// AboutInfoContentStyles
// color: #ffe9b5;
const AboutInfoContentStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  position: relative;
  .title {
    font-size: 2rem;
    margin-right: 4rem;
  }
  .content {
    gap: 1.5rem;
    left: 35rem;
    display: flex;
    position: absolute;
  }
  .item {
    border-radius: 8px;
    padding: 0.7rem 2rem 0.7rem 2rem;
    background-color: var(--deep-dark);
  }

  @media only screen and (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;

    .content {
      gap: 1rem;
      flex-wrap: wrap;
      position: initial;
    }
    .title {
      font-size: 1.7rem;
    }
  }
`;

const AboutInfoContent = ({
  title = "This Is Title",
  info = ["Python", "Java", "JavaScript", "React", "Django"],
}) => {
  return (
    <AboutInfoContentStyles>
      <h1 className="title">{title}</h1>
      <div className="content">
        {info.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutInfoContentStyles>
  );
};

export default AboutInfoContent;
