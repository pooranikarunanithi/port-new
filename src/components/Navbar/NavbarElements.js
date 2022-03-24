import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`


`;

export const NavLink = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
float:right;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
justify-content: space-between;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
border: 1px solid black;
background-color: white;
color: black;
padding: 1px 11px;
font-size: 15px;
cursor: pointer;
border-color: #04AA6D;
border-radius: 8px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`



`;
