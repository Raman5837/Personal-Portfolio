import React from 'react'
import ContactSection from '../components/ContactSection'
import styled from 'styled-components';


const ContactPageStyles = styled.div`
    padding: 20rem 0;
`

const Contact = () => {
    return (
        <>
            <ContactPageStyles>
                <ContactSection />
            </ContactPageStyles>
            {/* <Footer /> */}
        </>
    )
}

export default Contact
