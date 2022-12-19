/* React */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import NoFound from "../../errorPage/noRecord";

/* Styled */
import styled from 'styled-components';

/* Sub Components */
import Detail from './detail';
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import {NavLink, useHistory, useParams} from "react-router-dom";
import {List} from "@material-ui/core";
import moment from "moment";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

// /* Styled Components */
// const List = styled.ul`
//   margin: 0;
//   padding: 1rem;
//   align-items: center;
// `;
//


// /* Main Component Settings */
// // detailCardContainer().propTypes = {
// //     className: PropTypes.string,
// //     items: PropTypes.array,
// // }
//
// /* Exports */
// export default detailCardContainer;

// /* Main Compoent */
// const detailCardContainer = props => {
//     /* Props */
//     const {
//         className,
//         items,
//     } = props;



const useStyles = makeStyles( {
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
});

export default function DetailCardContainer() {
    const classes = useStyles();
    const history = useHistory();

    const { id } = useParams()

    const [detailRecords, setDetailRecords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (!sessionStorage.getItem("token")) {
        alert("로그인이 필요한 서비스입니다.");
        history.push('/');
    }


    useEffect(() => {
        const fetchDetailRecords = async () => {
            try {
                setError(null);
                setDetailRecords(null);
                setLoading(true);
                let token = sessionStorage.getItem('token');
                let userId = sessionStorage.getItem('id')
                console.log(userId)
                const response = await axios.get(
                    `/api/home/record/detail/${id}`,
                {headers: {"Authorization": `Bearer ${token}`}}

                );
                console.log(response.data)
                console.log(response.data.data)
                setDetailRecords(response.data.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchDetailRecords();
    }, []);




    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!detailRecords) return null;

    console.log(detailRecords)

    const detailRecord = detailRecords.map((row) => {
        row.captureTime = moment(row.captureTime).format("YYYY년 MM월 DD일 HH시 mm분 ss초")
        return row
    })

    console.log(detailRecord);

    if (detailRecord.length===0) {
        console.log("hfdasfadsfi")
        return <NoFound/>
    }

    return (
        <div/* className={ className }*/>
            {detailRecord.map((row) => (
                <Detail key = {row.id}
                    detectedItem={row.detectedItem}
                    image = {row.image}
                    captureTime = {row.captureTime}
                />
            ))}
        </div>
    );
}

