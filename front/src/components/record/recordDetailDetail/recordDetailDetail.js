/* React */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Sub Components */
//import Detail from './detail';
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import {NavLink, useHistory, useParams} from "react-router-dom";
import AlarmIcon from '@material-ui/icons/Alarm';
import {List} from "@material-ui/core";
import moment from "moment";
import {Image} from "@material-ui/icons";
import MediaCard from "../detailCardContainer/detail";

const useStyles = makeStyles({
    container: {
        boxShadow: '0px 0px solid white',
        padding: 50,
    },
    root: {
        maxWidth: 345,
        margin: 10,
        float: "left",
    },
    media: {
        height: 180,
    },
    img: {
        textAlign: "center"
    },
    text: {
        fontSize: "1.5rem",
    },
    big: {
        marginTop: "5%",
        textAlign: "center",
    },
    textColor: {
        color: "maroon",
        fontWeight: "bold",
        //float:"left",
        display:"inline-block"
    },
    textOther: {
        fontWeight:"normal",
        //float:"left",
        display:"inline-block"
    },
    time: {
        textAlign:"center"
    }
});

export default function DetailCardContainer() {
    const classes = useStyles();
    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (!sessionStorage.getItem("token")) {
        alert("로그인이 필요한 서비스입니다.");
        history.push('/');
    }

    const imageLink = history.location.state.image;
    const captureTime = history.location.state.captureTime;

    console.log(captureTime)


    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    // if (!detailRecords) return null;
    //
    // console.log(detailRecords)

    // const detailRecord = detailRecords.map((row) => {
    //     row.captureTime = moment(row.captureTime).format("YYYY년 MM월 DD일 HH시 mm분 ss초")
    //     return row
    // }


    return (
        <div className={classes.big}>
            <p className={classes.text}>
                <AlarmIcon style={{fontSize: 40}}/>
                <div className={classes.time}>
                    <h3 className={classes.textColor}>{captureTime}</h3>
                    <h3 className={classes.textOther}>에 적발된 사진입니다.</h3>
                </div>
            </p>
            <div className={classes.img}>
                <img src={imageLink}/>
            </div>
        </div>
    );
}

