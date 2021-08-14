import React from 'react'
import { MdDesktopMac } from 'react-icons/md';
import PText from './PText';
import styled from 'styled-components'

const ServiceSectionItemsStyles = styled.div`

    text-align: center;
    .servicesItem__icon{
        svg{
            width: 3rem; 
        }
    }
    .servicesItem__title{
        font-size: 2.5rem;
        font-family: 'Montserrat SemiBold'
    }
    .para{
        margin-top: 2rem;
    }

`

const ServiceSectionItems = ({
    icon = <MdDesktopMac />,
    title = "Web Development",
    description = "The Web Development"
}) => {
    return (
        <ServiceSectionItemsStyles>

            <div className="servicesItem__icon">{icon}</div>
            <div className="servicesItem__title">{title}</div>
            <PText>{description}</PText>

        </ServiceSectionItemsStyles>
    )
}

export default ServiceSectionItems
