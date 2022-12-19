import React from "react";
import styles from "./MainStructure.scss";
import classNames from "classnames/bind";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

const Content = styled.div`
  padding-top: 5rem;
  width: 100%;
  height: 100%;
  left: 0;
`;


// eslint-disable-next-line
const cx = classNames.bind(styles);

const MainStructure = ({ children }) => (
    <div>
        <Header />
        {/*<SideBar />*/}
        <Content>{children}</Content>
    </div>
);

export default MainStructure;