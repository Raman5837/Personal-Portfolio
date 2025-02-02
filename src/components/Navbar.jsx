import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";

const NavMenuStyle = styled.div`

    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background-color: var(--dark-bg);
    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;

        li{
            display: inline-block;
            border-radius: 8px;
            transition: .3s ease background-color;
            &:hover{
                background-color: var(--deep-dark);
            }
        }
        a{
            display: inline-block;
            font-family: 'RobotoMono Regular';
            padding: 1rem 2rem;
            font-size: 2rem;
            color: var(--gray-1)
            outline: none;
        }
        .active{
            color: var(--white);
        }

    }
    .mobile-menu-icon{
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 4rem;
        cursor: pointer;
        display: none;
        outline; none

        *{
            pointer-events: none;
        }
    }
    .closeNavIcon{
        display: none;
    }
    @media only screen and (max-width: 768px){

        padding: 1rem;

        .hide-item{
            transform: translateY(calc(-100% - var(--top)))
        }

        .mobile-menu-icon{
            display: block;
            padding-left: 1rem;
        }
        .navItems{
            --top: 1rem;
            transition: .3s ease transform;
            background-color: var(--deep-dark);
            padding: 2rem;
            width: 90%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top: var(--top);

            .closeNavIcon{
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                *{
                    pointer-events: none;
                }
            }
            li{
                display: block;
                margin-bottom: 1rem;
            }
        }


    }
`;

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavMenuStyle>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={showNav ? "navItems" : "navItems hide-item"}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </NavMenuStyle>
  );
};

export default Navbar;
