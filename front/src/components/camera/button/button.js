import React from "react";
import { MdAdd } from "react-icons/md";
import "./button.scss";
import {NavLink} from "react-router-dom";


const label = '촬영 완료하기';

const Button = (props) => (


    <button className="Button" onclick={props.onClick}>
            { label }
   </button>
);

export default Button;