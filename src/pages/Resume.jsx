import React, { useState, useEffect } from "react";
import styled from "styled-components";
import env from "../config/env";

const ResumePageStyles = styled.div`
  padding: 15rem 0;

  .resume__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .pdf__container {
    width: 70%;
    height: 85vh;
    border: none;
  }

  @media only screen and (max-width: 1024px) {
    padding: 10rem 0;
    .pdf__container {
      width: 90%;
      height: 85vh;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .pdf__container {
      width: 100%;
      height: 500px;
    }
  }
`;

const Resume = () => {
  const [resumeLink, setResumeLink] = useState("");

  useEffect(() => {
    setResumeLink(env.RESUME_LINK);
  }, []);

  return (
    <ResumePageStyles>
      <div className="container">
        <div className="resume__container">
          {resumeLink && (
            <iframe
              src={`${resumeLink}#toolbar=0`}
              title="Resume"
              draggable="false"
              className="pdf__container"
            />
          )}
        </div>
      </div>
    </ResumePageStyles>
  );
};

export default Resume;
