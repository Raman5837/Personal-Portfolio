import React from 'react'
import PText from './../components/PText';
import SeeButton from './../components/SeeButton';
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
        }
    }

`

const About = () => {
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
                                    Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.
                                    <br></br>
                                    <br></br>
                                    If you cannot find me anywhere, try to look into my kitchen space. Maybe I'm making ☕.
                                </PText>
                            </div>
                            <SeeButton text="Download Resume" worksLink="https://drive.google.com/file/d/1jKgmJODB8loveK7HZq7NXYY9JOqNWhz2/view?usp=sharing" />
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
                            <AboutInfoContent title="Programming Languages" info={["Python", "Java"]} />
                            <AboutInfoContent title="Web Development" info={["Django", "React", "JavaScript", "HTML", "CSS", "Bootstrap"]} />
                            <AboutInfoContent title="Database" info={["MySQL"]} />
                            <AboutInfoContent title="Core Skills" info={["DSA", "OOPS", "Problem Solving"]} />
                        </div>

                    </div>
                </div>

            </AboutPageStyles >

        </>

    )
}

export default About
