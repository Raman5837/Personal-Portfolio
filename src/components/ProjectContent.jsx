import React from "react";
import projectImg from "../assets/images/projectImg.jpg";
import styled from "styled-components";
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
const ProjectContentStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);

    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .projectItem__info {
    margin-top: 1.5rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
    padding: 1rem;
  }
  .projectItem__description {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1.5rem;
    text-align: center;
    line-height: 2.5rem;
  }
  .readMore {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 1.2rem;
      color: #ffe9b5;
    }
  }
  .project__Link {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
  }
  .project__Link_Logo {
    svg {
      font-size: 2rem;
    }
  }
  .project__githubLink_Logo {
    svg {
      font-size: 2.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

const ProjectContent = ({
  img = projectImg,
  title = "Project Name",
  description = "Project Description",
  githubUrl = "",
  projectUrl = "",
}) => {
  return (
    <ProjectContentStyles>
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="projectItem__img"
      >
        <img src={img} alt="Project" />
      </a>
      <div className="projectItem__info">
        <div className="readMore">
          <a href={githubUrl}>
            <h3 className="projectItem__title">{title}</h3>
          </a>
          <div className="project__Link">
            <a
              className="project__githubLink_Logo"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubAlt />
            </a>
            <a
              className="project__Link_Logo"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <hr />
        <p className="projectItem__description">{description}</p>
      </div>
    </ProjectContentStyles>
  );
};

export default ProjectContent;
