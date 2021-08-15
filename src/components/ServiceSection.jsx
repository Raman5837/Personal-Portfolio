import React from 'react'
import SectionTitle from './SectionTitle'
import ServiceSectionItems from './ServiceSectionItems'
import styled from 'styled-components'
import { MdDesktopMac, MdCode, MdAssistant } from 'react-icons/md';

const ServiceSectionStyles = styled.div`

    padding: 10rem 0;

    .services__allItems{
        display: flex;
        gap: 10rem;
        justify-content: space-between;
        margin-top: 5rem;
        
    }
    
    .section-title{
        p{
            font-size: 3.6rem;
            font-family: 'Montserrat Bold';
        }
        h2{
            font-size: 1.2rem;
        }
    }

    }

    @media only screen and (max-width: 768px){
        .services__allItems{
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 5rem;
        }
    }

`

const ServiceSection = () => {
    return (
        <ServiceSectionStyles>
            <div className="container">
                <SectionTitle className="Heading" subHeading="Let's Talk Business" heading="What Can I Do For You. ?" />

                <div className="services__allItems">
                    <ServiceSectionItems icon={<MdDesktopMac />} title="Web Development" description="I can help you in launching your business over the internet." />

                    <ServiceSectionItems icon={<MdCode />} title="Programming" description="Ping me to get help in solving programming problems. I'll try to resolve your issues." />

                    <ServiceSectionItems icon={<MdAssistant />} title="Projects" description="In my spare time, I like to do experiment with new tech . I’m always interested in new projects, so feel free to drop me a line." />

                </div>
            </div>

        </ServiceSectionStyles>
    )
}

export default ServiceSection
