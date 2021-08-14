import React, { useState, useEffect } from 'react'
import SectionTitle from './../components/SectionTitle';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md'
import BlogContent from '../components/BlogContent';

import BlogInfo from '../assets/data/Blogs'

const BlogPageStyles = styled.div`

    padding: 15rem 0;

    .allProjects{
        display: grid;
        // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        max-width: 90%;
        gap: 5rem;
        margin: 0 auto;
        margin-top: 5rem;

    }
    .projects__searchBar{
        position: relative;
        max-width: 90%;
        margin: 0 auto;
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

        padding: 10rem 0;

        projects__searchBar,
        projects__searchBar form,
        projects__searchBar input{
            width: 100%;
        }
    }

`

const Blogs = () => {

    const [searchText, setSearchText] = useState('')
    const [blogData, setBlogData] = useState(BlogInfo)

    useEffect(() => {

        if (searchText === '') return;
        setBlogData(() =>
            BlogInfo.filter((item) =>
                item.desc.toLowerCase().match(searchText.toLowerCase())
            )
        )
    }, [searchText])

    function handleChange(e) {

        e.preventDefault()
        // setting the value of the search query inside setSearchText
        setSearchText(e.target.value)
        if (!e.target.value.length > 0) {
            setBlogData(BlogInfo);
        }
    }

    return (
        <>
            <BlogPageStyles>
                <div className="container">
                    <SectionTitle heading="My Blogs" subHeading="" />

                    <div className="projects__searchBar">
                        <form>
                            <input
                                type="text"
                                placeholder="Eg: Search For Blogs"
                                value={searchText}
                                onChange={handleChange}
                            />
                            <MdSearch className="searchIcon" />
                        </form>
                    </div>

                    <div className="allProjects">
                        {blogData.map(blog => (

                            <BlogContent
                                key={blog.id}
                                title={blog.name}
                                description={blog.desc}
                                img={blog.img}
                                url={blog.url}
                            />
                        ))}

                    </div>
                </div>
            </BlogPageStyles>


        </>
    )
}

export default Blogs
