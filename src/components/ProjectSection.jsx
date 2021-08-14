import React from 'react'
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css'
import projects from './../assets/data/projects';
import ProjectContent from './ProjectContent';
import styled from 'styled-components'
import SeeButton from './SeeButton';


SwiperCore.use([Navigation])

const ProjectSectionStyles = styled.div`

    padding: 10rem 0;

    .project_corosol{
        display: flex;
        gap: 3rem;
        margin-top: 5rem;
    }
    .swiper-container{
        padding-top: 8rem;
        max-width: 100%;

    }
    .swiper-button-prev, .swiper-button-next{
        position: absolute;
        height: 50px;
        width: 50px;
        background-color: var(--deep-dark);
        z-index: 10;
        right: 60px;
        left: auto;
        top: 0;
        transform: translateY(50%);
        color: var(--gray-1);
        border-radius: 8px;
    }
    .swiper-button-next{
        right: 0;

    }
    .swiper-button-prev::after, .swiper-button-next::after{
        font-size: 2rem;
    }
    .button{
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 100%;
        
    }
    .button:hover{
            transform: translateY(10%);
            transition: all .3s ease-in-out;
        }

    @media only screen and (max-width: 768px) {
        .project_corosol{
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            margin-top: 7rem;
            gap: 5rem;

            .projectItem__img{
                width: 100%;
            }
        }
    }

`

const ProjectSection = () => {
    return (
        <ProjectSectionStyles>
            <div className="container">
                <SectionTitle heading="Projects" subHeading="Few Of My" />
                <div>
                    <div className="project_corosol">
                        <Swiper spaceBetween={30} slidesPerView={1} navigation
                            breakpoints={
                                {
                                    //  when window width is >= 640px
                                    640: { slidesPerView: 1 },
                                    //  when window width is >= 768px
                                    768: { slidesPerView: 2 },
                                    //  when window width is >= 1200px
                                    1200: { slidesPerView: 3 }
                                }
                            }
                        >
                            {projects.map((project, index) => {
                                if (index >= 5) return (null);
                                return (
                                    <SwiperSlide key={project.id}>
                                        <ProjectContent title={project.name} img={project.img} description={project.desc} githubUrl={project.githubUrl} projectUrl={project.projectUrl} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                    </div>
                    <SeeButton text="Load All Projects" worksLink="/projects" />
                </div>
            </div>
        </ProjectSectionStyles >
    )
}

export default ProjectSection
