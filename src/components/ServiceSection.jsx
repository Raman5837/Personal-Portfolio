import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceSectionItems from "./ServiceSectionItems";
import styled from "styled-components";
import serviceData from "./../assets/data/service";

const ServiceSectionStyles = styled.div`

    padding: 10rem 0;

    .services__allItems{
        gap: 5rem;
        display: flex;
        margin-top: 5rem;
        justify-content: space-between;
    }

    .section-title{
        p{
            font-size: 3.6rem;
            font-family: 'Montserrat Bold';
        }
        h2{
            margin-top: 1rem;
            font-size: 1.4rem;
        }
    }

    }

    @media only screen and (max-width: 768px){
        .services__allItems{
            gap: 5rem;
            margin: 0 auto;
            max-width: 350px;
            margin-top: 5rem;
            flex-direction: column;

        }
    }

`;

const ServiceSection = () => {
  return (
    <ServiceSectionStyles>
      <div className="container">
        <SectionTitle
          className="Heading"
          subHeading="Let's Talk Business"
          heading="How Can I Help?"
        />

        <div className="services__allItems">
          {serviceData.map((service, index) => (
            <ServiceSectionItems
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </ServiceSectionStyles>
  );
};

export default ServiceSection;
