import React from 'react'
import {Outlet ,Link } from "react-router-dom";
import styled from 'styled-components';


const StyledUl = styled.ul`
  list-style-type:none;
`

const Layout = () => {
  return (
    <>
    <nav>
        <StyledUl>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/advertise">Advertise</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </StyledUl>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout