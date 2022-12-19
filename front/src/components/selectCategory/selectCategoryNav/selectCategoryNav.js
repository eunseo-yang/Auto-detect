/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Sub Components */
import SelectCategoryNavItem from './selectCategoryNavItem';

/* Styled Components */
const List = styled.ul`
  margin: 0;
  padding: 1rem;
`;

/* Main Compoent */
const selectCategoryNav = props => {
    /* Props */
    const {
        className,
        items,
    } = props;




    /* Renderer */
    return (
        <List className={ className }>
            {
                items && items.map((opt, idx)=>(
                    <SelectCategoryNavItem key={ idx } { ...opt }/>
                ))
            }
        </List>
    );
}

/* Main Component Settings */
selectCategoryNav.propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
}

/* Exports */
export default selectCategoryNav;