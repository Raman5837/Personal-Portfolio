import React from 'react'
import { Link } from 'react-router-dom';
import PText from './../components/PText';
import AboutImage from '../assets/images/Aman-PPic.jpg'
import styled from 'styled-components';
import AboutInfoContent from '../components/AboutInfoContent';


// #ffe9b5
const AboutPageStyles = styled.div`

    padding: 20rem 0 10rem 0;
    overflow-x: hidden;
    .top-section{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4rem;
    }
    .left{
        flex: 3;
    }
    .right{
        flex: 2;
    }
    .about__subHeading{
        font-size: 2.2rem;
        margin-bottom: 2rem;

        span{
            background-color: var(--deep-dark);
            padding: .7rem 2rem .7rem 2rem;
            border-radius: 10px;
        }
    }
    .about__heading{
        font-size: 5rem;
        margin-bottom: 3rem;
    }
    .about__info{
        margin-bottom: 4rem;
        .para{
            max-width: 100%;
        }
    }
    .right{
        img{
            border: 2px solid var(--gray-1);
        }
    }
    .about__info__contents{
        margin-top: 15rem;
    }
    .about__info__content{
        margin-bottom: 10rem;
    }
    .about__info__heading{
        font-size: 3.6rem;
        text-transform: uppercase;
        
    }
    .button{
        font-size: 2.2rem;
        background-color: ${(props =>
        props.outline ? 'transparent' : 'var(--gray-1)'
    )};
        padding: .7em 2em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid var(--gray-1);
        color: ${(props =>
        props.outline ? 'var(--gray-1)' : 'black'
    )};
    }
    @media only screen and (max-width: 768px) {
        padding: 10rem 0;
        overflow-x: hidden;
        .top-section{
            flex-direction: column;
            gap: 5rem;
        }
        .about__subHeading{
            font-size: 1.6rem;
        }
        .about__heading{
            font-size: 2.6rem;
        }
        .about__info__heading{
            font-size: 3rem;
        }
        .button{
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 100%;
            font-size: 1.8rem;
        }
    }

`

const About = () => {

    const resumeLink = "https://drive.google.com/file/d/1U6d1blkqCFexm-ItRX1C_ArVGUbIKboB/view"

    return (
        <>
            <AboutPageStyles>
                <div className="container">
                    <div className="top-section">
                        <div className="left">
                            <p className="about__subHeading">
                                {/* Hi, I'm <span>Aman</span> */}
                            </p>
                            <h2 className="about__heading">
                                A Little More About Me
                            </h2>
                            <div className="about__info">
                                <PText>Strong in Data Structures and Development with intuitive problem-solving skills.
                                    <br></br>
                                    <br></br>
                                    Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.
                                    <br></br>
                                    <br></br>
                                    I have an overall working experience of 1.5 years.
                                    <br></br>
                                    <br></br>
                                    If you cannot find me anywhere, try to look into my kitchen space. Maybe I'm making ☕.
                                </PText>
                            </div>
                            <div className="button-wrapper">
                                <Link className="button" to={{ pathname: resumeLink }} target="_blank" rel="noreferrer">Download Resume</Link>
                            </div>

                        </div>
                        <div className="right">
                            <img src={AboutImage} alt="Aman" />
                        </div>
                    </div>

                    <div className="about__info__contents">
                        <div className="about__info__content">
                            <h1 className="about__info__heading">
                                Education
                            </h1>
                            <AboutInfoContent title="B.Tech (CSE)" info={["Netaji Subhash Engineering College"]} />

                        </div>

                        {/* 2nd Content */}

                        <div className="about__info__content">
                            <h1 className="about__info__heading">
                                My Skills
                            </h1>
                            <AboutInfoContent title="Programming Languages" info={["Python", "Java", "Go", "JavaScript"]} />
                            <AboutInfoContent title="Development" info={["Django", "DRF", "FastAPI", "MERN Stack"]} />
                            <AboutInfoContent title="Database" info={["MySQL", "PostgreSQL", "NoSQL", "Redis"]} />
                            <AboutInfoContent title="Core Skills" info={["DSA", "OOPS", "Problem-Solving"]} />
                        </div>

                    </div>
                </div>

            </AboutPageStyles >

        </>

    )
}

export default About
