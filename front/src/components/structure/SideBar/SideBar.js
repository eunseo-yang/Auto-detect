/* src/layouts/Main/SideBar/SideBar.js */
/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Sub Components */
import SideBarNav from './SideBarNav';
import PersonBar from "./PersonBar";

/* Styled Components */
const Container = styled.div`
  position: fixed;
  margin-top: 5rem;
  left: 0;
  height: 100%;
  width: 240px;
  box-shadow: 2px 0 2px darkgrey;
  background-color: rgba(0, 0, 0, 0.54);
`;

/* Constant Variables */
const items = [
    { label: "홈", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "과거기록보기", href: "/past" },
    { label: "메모", href: "/memo" }
];

/* Main Compoent */
const SideBar = props => {
    /* Props */
    const {
        className,
    } = props;

    /* Renderer */
    return (
        <Container className={ className }>
            <PersonBar />
            <SideBarNav items={ items } />
        </Container>
    );
}

/* Main Component Settings */
SideBar.propTypes = {
    className: PropTypes.string,
}

/* Exports */
export default SideBar;