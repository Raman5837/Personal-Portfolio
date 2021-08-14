import React from 'react'
import styled from 'styled-components'
// import HeroImg from '../assets/images/hero.png'
import HeroImg from '../assets/images/coder-5.svg'
import PText from './PText'
import SeeButton from './SeeButton'
import SocialMediaArrow from '../assets/images/social-media-arrow.svg'
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg'
import Github from '../assets/images/github.png'
import LinkedIn from '../assets/images/linkedIn.png'
import Twitter from '../assets/images/twitter.png'

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 5rem;
  }
  .hero__heading {
    font-size: 1.5rem;
    margin-top: 4rem;
    margin-bottom: -8rem;
    position: relative;
    span {
      font-size: 1.8rem;
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 5.5rem;
      color: var(--white);
      margin-bottom: 6rem;
    }
  }
  
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    margin-top: 5rem;
    border: 2px solid var(--gray-1);
    // position: relative;
    
    img{
      
      object-fit: contain;
      vertical-align: middle;
      
    }
  }
  .hero__info {
    margin-top: 2rem;
   
  }
  .button{
      width: 70%;
      align-items: center;
      margin: 0 auto;
      padding: .7em 0em;
  }
  .button:hover{
    transform: translateY(10%);
    transition: all .3s ease-in-out;
  }
  
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 70px;
    

  }
  .hero__scrollDown {
    right: 70px;
    
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
      margin-bottom: 4rem;
      color: #ffe9b5;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

const HeroSection = () => {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hi , I'm </span>
            <span className="hero__name">Aman Verma</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am a pre-final year under-graduate student who loves to build things from scratch.
            </PText>

            <SeeButton btnText="see my works" btnLink="/projects" />


          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>FindMeOn</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://github.com/Raman5837"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Github} alt="Raman5837" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aman5837/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={LinkedIn} alt="Raman5837" />

                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/_______Aman"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt="Raman5837" />
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

export default HeroSection
