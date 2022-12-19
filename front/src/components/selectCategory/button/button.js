import React from "react";
import { MdAdd } from "react-icons/md";
import "./button.scss";
import {NavLink} from "react-router-dom";


const href= '../../../LiveCam';
const label = '시작하기';

const Button = () => (


    <div className="Button">
        <NavLink to={ href }>
            { label }
        </NavLink>
   </div>
);

export default Button;