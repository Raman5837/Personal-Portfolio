import React from 'react'
import PText from './PText'
import styled from 'styled-components';

// AboutInfoContentStyles
// color: #ffe9b5;
const AboutInfoContentStyles = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 3rem;
    position: relative;
    .title{
        font-size: 2.4rem;
        margin-right: 4rem;
        
    }
    .content{
        
        display: flex;
        gap: 1.5rem;
        position: absolute;
        left: 35rem;
        
    }
    .item{
        background-color: var(--deep-dark);
        padding: .7rem 2rem .7rem 2rem;
        border-radius: 8px;
        
        
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        .content{
            position: initial;
            gap: 1rem;
        }
        .title{
            font-size: 1.8rem;
        }
        .info{
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }
    }
    

`


const AboutInfoContent = ({
    title = "This Is Title",
    info = [
        "Python", "Java", "JavaScript", "React", "Django"
    ]
}) => {
    return (
        <AboutInfoContentStyles>
            <h1 className="title">{title}</h1>
            <div className="content">
                {info.map((item, index) => (
                    <div className="item" key={index}>
                        <PText>{item}</PText>
                    </div>
                ))}
            </div>
        </AboutInfoContentStyles>
    )
}

export default AboutInfoContent
