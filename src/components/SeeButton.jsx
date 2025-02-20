import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
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
    .button {
      font-size: 1.8rem;
    }
  }
`;

const SeeButton = ({
  worksLink = "/projects/",
  text = "View My Works",
  outline = false,
}) => {
  return (
    <ButtonStyle className="button-wrapper" outline={outline}>
      <Link className="button" to={{ pathname: worksLink }}>
        {" "}
        {text}
      </Link>
    </ButtonStyle>
  );
};

export default SeeButton;
