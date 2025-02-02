import React from "react";
import { MdDesktopMac } from "react-icons/md";
import PText from "./PText";
import styled from "styled-components";

const ServiceSectionItemsStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
    display: none;
    margin-bottom: 10px;
  }
  .servicesItem__title {
    text-align: left;
    font-size: 2.4rem;
    font-family: "Montserrat SemiBold";
  }
  .para {
    text-align: left;
    margin-top: 3rem;
    font-size: 1.8rem;
  }
`;

const ServiceSectionItems = ({
  icon = <MdDesktopMac />,
  title = "Web Development",
  description = "The Web Development",
}) => {
  return (
    <ServiceSectionItemsStyles>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{description}</PText>
    </ServiceSectionItemsStyles>
  );
};

export default ServiceSectionItems;
