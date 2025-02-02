import React from "react";
import styled from "styled-components";

const ParagraphStyle = styled.div`
  max-width: 520px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 3rem;

  @media only screen and (max-width: 1200px) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const PText = ({ children }) => {
  return (
    <ParagraphStyle className="para">
      <p>{children}</p>
    </ParagraphStyle>
  );
};

export default PText;
