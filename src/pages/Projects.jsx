import React, { useState, useEffect } from 'react'
import SectionTitle from './../components/SectionTitle';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md'
import ProjectContent from './../components/ProjectContent';

import ProjectInfo from '../assets/data/projects'

const ProjectPageStyles = styled.div`

    padding: 15rem 0;

    .allProjects{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 5rem;
        margin-top: 5rem;

    }
    .projects__searchBar{
        position: relative;
        width: 100%;
        margin-top: 5rem;
    }
    .projects__searchBar input{
        width: 100%;
        font-size: 2rem;
        padding: .8rem;
        color: var(--black);
        border-radius: 6px;
        outline: none;
        border: none;
    }
    .projects__searchBar .searchIcon{
        position: absolute;
        width: 2rem;
        right: 1rem;
        
    }
    .projects__searchBar .searchIcon path{
        color: var(--deep-dark);
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        projects__searchBar,
        projects__searchBar form,
        projects__searchBar input{
            width: 100%;
        }
    }

`

const Projects = () => {

    const [searchText, setSearchText] = useState('')
    const [projectData, setProjectData] = useState(ProjectInfo)

    useEffect(() => {

        if (searchText === '') return;
        setProjectData(() =>
            ProjectInfo.filter((item) =>
                item.desc.toLowerCase().match(searchText.toLowerCase())
            )
        )
    }, [searchText])

    function handleChange(e) {

        e.preventDefault()
        // setting the value of the search query inside setSearchText
        setSearchText(e.target.value)
        if (!e.target.value.length > 0) {
            setProjectData(ProjectInfo);
        }
    }

    return (
        <>
            <ProjectPageStyles>
                <div className="container">
                    <SectionTitle heading="Projects" subHeading="" />

                    <div className="projects__searchBar">
                        <form>
                            <input
                                type="text"
                                placeholder="Eg: Search For Python Project"
                                value={searchText}
                                onChange={handleChange}
                            />
                            <MdSearch className="searchIcon" />
                        </form>
                    </div>

                    <div className="allProjects">
                        {projectData.map(project => (

                            <ProjectContent
                                key={project.id}
                                title={project.name}
                                description={project.desc}
                                img={project.img}
                                githubUrl={project.githubUrl}
                                projectUrl={project.projectUrl}
                            />
                        ))}

                    </div>
                </div>
            </ProjectPageStyles>


        </>
    )
}

export default Projects
