import React from 'react'
import PText from './PText'
import SeeButton from './SeeButton'
import styled from 'styled-components';

const ContactBannerStyles = styled.div`

    padding: 10rem 0;
    .contactBanner__wrapper{
        background-color: var(--deep-dark);
        border-radius: 10px;
        padding: 5rem 0rem;
        text-align: center;
    }
    .contactBanner__heading{
        font-size: 4rem;
        margin-bottom: 2rem;

    }

    @media only screen and (max-width: 768px) {
        padding: 3rem 0;
        .contactBanner__heading{
            font-size: 2.8rem;
        }
    }
`

const ContactBanner = () => {
    return (
        <ContactBannerStyles>
            <div className="container">
                <div className="contactBanner__wrapper">
                    <PText>Have a project in mind</PText>
                    <h3 className="contactBanner__heading">Let Me Help You</h3>
                    <SeeButton text="Contact Now" worksLink="/contact" />
                </div>

            </div>
        </ContactBannerStyles>
    )
}

export default ContactBanner
