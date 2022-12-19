import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import {NavLink, useHistory} from "react-router-dom";
import {Router} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        //display: 'flex',
        //flexWrap: 'wrap',
        minWidth: 300,
        // marginTop: '10%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        textAlign:"center",
        marginTop: "10%",
        fontSize: "5em",
        fontWeight: "bold"
    },
    icon: {
        fontSize: 70,
        fontWeight: "bold"
    },
    movehome: {
        cursor: "pointer",
        textAlign:"center",
        textDecoration: "underline",
        textDecorationPosition: "under",
    }
}));

export default function ButtonBases() {
    const classes = useStyles();
    const history = useHistory();

    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = "white";


    return (
        <div className={classes.root}>
            <h3 className={classes.text}><ErrorIcon className={classes.icon}/> Not Found</h3>
            <h3 className={classes.movehome} onClick={(e)=>{
                history.push("/home")
            }}>
                홈으로 이동하기
            </h3>
        </div>
    );
}