/* React */
import React, {useState} from 'react';
import PropTypes from 'prop-types';

/* Router */
import { NavLink } from 'react-router-dom';

/* Styled */
import styled from 'styled-components';

/* Styled Components */
const Circle= styled.div`
  float: left;
  font-size: 20px;
  font-weight: bold;
  width: 15rem;
  height: 15rem;
  background: #F3F3F4;
  border-radius: 30%;
  margin: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  
  &:hover {
    background-color: #E1E3EA;
    box-shadow: 3px 3px 3px 3px darkgrey;
    color: black;
    cursor: pointer;
  };
  
`;



const handleDelete = () => {
    console.info('You clicked the delete icon.');
};




/* Main Component */
//const selectCategoryNavItem = props => {
function selectCategoryNavItem (props ){

//class selectCategoryNavItem extends Component{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [color, setColor] = useState('');

    const handleClick = () => {
        setColor('black');
        Circle.background = 'black';
        console.info('You clicked the Chip.');
    };
    /* Props */
    const {
        className,
        label,
        href,
    } = props;



    /* Renderer */
    return (
        <Circle className={ className } onClick={handleClick} onDelete={handleDelete}>
            {/*<NavLink to={ href }>*/}
            {/*    { label }*/}
            {/*</NavLink>*/}
        </Circle>
    );
}

/* Main Component Settings */
selectCategoryNavItem.propTypes = {
    label: PropTypes.string,
    href: PropTypes.string,
}

/* Exports */
export default selectCategoryNavItem;