import React from 'react'
import styled from 'styled-components'
import PText from './PText'
import SectionTitle from './SectionTitle'
import SeeButton from './SeeButton'
// import AboutImage from '../assets/images/about-sec-img.png'
import AboutImage from '../assets/images/coder-4.jpg'


const AboutSectionStyle = styled.div`

    padding: 10rem 0;

    .container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;

    }
    .aboutSection__left, .aboutSection__right{
        flex: 1;
    }
    .aboutSection__right{
        img{
            object-fit: contain;
        }
    }
    .section-title{
        text-align: left;
    }
    .para{
        margin-top: 2rem;
        margin-left: 0;
    }
    .aboutSection__buttons{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 2rem;

        .button:hover{
            transform: translateY(10%);
            transition: all .3s ease-in-out;
        }
    }

    @media only screen and (max-width: 950px) {
        .aboutSection__left{
            flex: 4;
        }
        .aboutSection__right{
            flex: 3;
        }
    }

    @media only screen and (max-width: 768px){
        .container{
            flex-direction: column;
            text-align: center;
        }
        .aboutSection__left, .aboutSection__right{
            width: 100%;

        }
        .aboutSection__right{
            margin-top: 3rem;
        }
        .section-title{
            text-align: center;
        }
        .para{
            margin: 0 auto;
            margin-top: 2rem;
        }
        .aboutSection__buttons{
            flex-direction: column;
            gap: 0;
            .button-wrapper, a{
                width: 100%;
                text-align: center;
            }
        }
    }

`

const AboutSection = () => {
    return (
        <AboutSectionStyle>
            <div className="container">
                <div className="aboutSection__left">
                    <SectionTitle subHeading="" heading="About Me" />

                    <PText>
                        I'm a Self-Taught Full-Stack Developer.
                        <br></br>
                        I like to make digital experiences easier and simpler for people.
                    </PText>

                    <div className="aboutSection__buttons">
                        <SeeButton worksLink={"https://drive.google.com/file/d/1jKgmJODB8loveK7HZq7NXYY9JOqNWhz2/view?usp=sharing"} text="Download Resume" />
                        <SeeButton worksLink="/about" text="Read More" outline />
                    </div>

                </div>

                <div className="aboutSection__right">
                    <img src={AboutImage} alt="Aman Verma" />
                </div>
            </div>
        </AboutSectionStyle>
    )
}

export default AboutSection
