import React from 'react'
import { Link } from 'react-router-dom';
import projectImg from '../assets/images/projectImg.jpg'

import styled from 'styled-components'

const BlogContentStyles = styled.div`

    .projectItem__img{
        width: 100%;
        height: 300px;
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid var(--gray-2);

        img{
            height: 100%;
            object-fit: cover;
        }
    }
    .projectItem__info{
        margin-top: 1.5rem;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 12px;
        

    }
    .projectItem__title{
        font-size: 2.2rem;
        text-align:center;
        padding: 1rem;
        
    }
    .projectItem__description{
        font-size: 1.6rem;
        font-family: 'RobotoMono Regular';
        margin-top: 1rem;
        line-height: 3rem;
    }
    .readMore{
        display: flex;
        align-items: center;
        justify-content: space-between;

        span{
            font-size: 1.5rem;
            color: #ffe9b5;
        }
    }

    @media only screen and (max-width: 768px) {
        .projectItem__img{
            height: 350px;
            object-fit: contain;
        }
    }


`

const BlogContent = ({

    img = projectImg,
    title = "Blog Name",
    description = "Blog Information",
    url = ""


}) => {


    return (
        <BlogContentStyles>
            <Link to={{ pathname: url }} target="_blank" rel="noreferrer" className="projectItem__img">
                <img src={img} alt="Project" />
            </Link>
            <div className="projectItem__info">
                <Link className="readMore" to={{ pathname: url }} target="_blank" rel="noreferrer"> 
                    <h3 className="projectItem__title">{title}</h3>
                    <span>Read More</span>
                </Link>
                <hr />
                <p className="projectItem__description">{description}</p>
            </div>
        </BlogContentStyles>
    )
}

export default BlogContent
