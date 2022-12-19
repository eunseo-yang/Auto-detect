/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Router */
import { NavLink } from 'react-router-dom';

/* Styled */
import styled from 'styled-components';

/* Styled Components */
const TopItem = styled.div`
  float: left;
  font-size: 20px;
  font-weight: bold;
  background-color: lightgrey;
  width: 10rem;
  height: 2.9rem;

  &:hover {
    background-color: darkgrey;
    border-radius: 0.3em;
    //box-shadow: 2px 2px 2px 2px dimgrey;
    color: black;
  };

`;

/* Main Component */
const selectCategoryNavItem = props => {
    /* Props */
    const {
        className,
        label,
        href,
    } = props;

    /* Renderer */
    return (
        <TopItem className={ className }>
            {/*<NavLink to={ href }>*/}
            {/*    { label }*/}
            {/*</NavLink>*/}
        </TopItem>
    );
}

/* Main Component Settings */
selectCategoryNavItem.propTypes = {
    label: PropTypes.string,
    href: PropTypes.string,
}

/* Exports */
export default selectCategoryNavItem;