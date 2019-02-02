import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Nav = styled.nav`
  background-color: black;
  color: white;
  padding: 10px;
`

const NavToggle = styled.button`
  color: white;
`

const NavComponent = class extends React.Component {
  render() {
    return (
    <Nav role="navigation" aria-label="main-navigation">
      <NavToggle onClick={() => console.log('clicky')}>o</NavToggle>
      <div>this is the nav</div>
    </Nav>
  )}
}

export default NavComponent
