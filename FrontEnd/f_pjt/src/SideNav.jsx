import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMartiniGlassCitrus, faGamepad, faBomb } from "@fortawesome/free-solid-svg-icons"

function SideNav() {
  const menus = [
    { name: "game", path: "/game"},
    { name: "drink", path: "/drink"},
    { name: "shot"},
    { name: "cocktail", path: "/cocktail"}
  ]

  return (
    <Bar>
    <Side>
      <NavStyle to="/game" >
        <FontAwesomeIcon icon= { faGamepad } size="4x"/>
        {/* <FontAwesomeIcon icon="fa-solid fa-gamepad" /> */}
        {/* <Img alt="game" src="img/game.png"/> */}
      </NavStyle>
      <NavStyle to="/drink">
        <FontAwesomeIcon icon = { faBomb } size="4x"/>
        {/* <FontAwesomeIcon icon="fa-solid fa-bomb" /> */}
        {/* <Img alt="drink" src="img/drink.png"/> */}
      </NavStyle>
      {/* <Button><Img alt="shot" src="img/shot.png"/></Button> */}
      <Shot>Shot!</Shot>
      <NavStyle to="/cocktail">
        <FontAwesomeIcon icon={ faMartiniGlassCitrus } size="4x" />
        {/* <FontAwesomeIcon icon="fa-solid fa-martini-glass-citrus" /> */}
        {/* <Img alt="cocktail" src="img/cocktail.png"/> */}
      </NavStyle>
    </Side>
    </Bar>
  );
}

const Bar = styled.div`
  display: flex;
  background: #004680;
`


const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center ;
  justify-content: space-evenly;
  width: 20vh;
  height : 100vh;
  background: #004680;
`
const NavStyle = styled(NavLink)`
  align-items: center ;
  justify-content: center;
  margin: auto;
  color: white;
  padding: 2vh;
  &:link {
    transition : 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: lightyellow;
  }
  &.active {
    color: 	Goldenrod;
    position: relative;
    top: 1vh;
    border-bottom: 1vh solid 	Goldenrod;
  }
`
const Shot = styled.div`
  font-family: 'Irish Grover';
  font-style: normal;
  font-size: 5vh;
  color: #ffffff;
  align-items: center ;
  justify-content: center;
  margin: auto;
  color: white;
  padding: 2vh;
`
// const Img = styled.img`
//   width: 10vh;
// `
// https://m.blog.naver.com/hyj5657/110167206983
export default SideNav;
