/* React */
import PropTypes from 'prop-types';
import React from 'react';


/* Styled */
import styled from 'styled-components';

/* Sub Components */
import SelectCategoryNav from './selectCategoryNav';
import BigCategoryNav from "./bigCategoryNav";
import Button from "../camera/button";

/* Styled Components */
const Container = styled.div`
  margin: 0;
  padding: 0;
  left: 0;
  width: 100%;
`;

/* Constant Variables */
const bigItems = [
    { label: "dddf", href: "/home" },
    { label: "시작f하기", href: "/selectCategory" },
    { label: "f상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작f하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "fdd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" }
];


const items = [
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "dd", href: "/home" },
    { label: "시작하기", href: "/selectCategory" },
    { label: "상품", href: "/product" },
    { label: "상품", href: "/product" }


];

/* Main Compoent */
const SelectCategory = props => {
    /* Props */
    const {
        className,
    } = props;



    /* Renderer */
    return (
        <Container className={ className }>
            <BigCategoryNav items = { bigItems } />
            <SelectCategoryNav items = { items } />
            <Button />
        </Container>
    );
}

/* Main Component Settings */
SelectCategory.propTypes = {
    className: PropTypes.string,
}

/* Exports */
export default SelectCategory;