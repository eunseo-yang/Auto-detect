import React from "react";
import classNames from "classnames/bind";
import styles from "./PersonBar.scss";

const cx = classNames.bind(styles);

const PersonBar = () => (
    <div className= {cx("PersonBar")}>
        <div className = {cx("PersonImage")} />
        <div className = {cx("PersonName")} > 0 0 0 님 </div>
        <div className = {cx("ChangeInfo")} > 회원정보 수정 </div>

    </div>
);

export default PersonBar;