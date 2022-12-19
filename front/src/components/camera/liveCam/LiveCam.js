//은서꺼
import React, {useEffect, useRef, useState, useCallback} from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
//import config from "../config/config";
import LocalSeeIcon from '@material-ui/icons/LocalSee';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
`;

const useStyles = makeStyles((theme) => ({
    cctv: {
        marginLeft: '3%',
        marginRight: '1%',
        width: '46%',
        height: '46%',
        //display: 'flex',
        //flexWrap: 'wrap',
        minWidth: 300,
        marginTop: '5%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    capture: {
        marginLeft: '1%',
        marginRight: '3%',
        width: '46%',
        height: '46%',
        //display: 'flex',
        //flexWrap: 'wrap',
        minWidth: 300,
        marginTop: '5%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    cctvText: {
        marginLeft: '3%',
        marginRight: '1%',
        width: '46%',
        height: '46%',
        display:"inline-block",
        fontSize: "2em",
        textAlign: "center",
        minWidth: 300,
        marginTop: '5%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    captureText: {
        marginLeft: '1%',
        marginRight: '3%',
        width: '46%',
        height: '46%',
        display:"inline-block",
        fontSize: "2em",
        textAlign: "center",
        minWidth: 300,
        marginTop: '5%',
        justifyContent: 'center',
        alignContent: 'center'
    }
}));

export default function Viewer() {
    const history = useHistory();

    if (!sessionStorage.getItem("token")) {
        alert("로그인이 필요한 서비스입니다.");
        history.push('/');
    }

    const recordId = history.location.state.detail

    const canvasRef = useRef(null);
    const webcamRef = useRef(null);
    const [capturedImg, setCapturedImg] = useState(null);


    const [isPaused, setPause] = useState(false);
    const ws = useRef(null);


    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user", // Can be "environment" or "user"
    };


    const capture = () => {
        const capturedImg = webcamRef.current.getScreenshot();
        setCapturedImg(capturedImg);
        //console.log(capturedImg);
        //sendMessage(capturedImg);
    };

    let token = sessionStorage.getItem('token');


    function drawImge() {
        const video = webcamRef.current;
        const canvas = canvasRef.current;

        let alarm = new Audio();
        alarm.src = "https://freesound.org/data/previews/516/516905_4864041-lq.mp3"; // path to your alarm audio file


        console.log("Start!")
        if (video && canvas) {
            const capturedImg = video.getScreenshot();
            console.log("before post")

            const response = axios.post(
                `/api/video_feed/${recordId}`,
                {
                    headers: {"Authorization": `Bearer ${token}`, "Content-Type": "multipart/form-data"},
                    "imageBase64": capturedImg
                }
            ).then(response => {
                console.log("after post");
                console.log(response.data['leftTopX'])

                const leftTopX = response.data['leftTopX'] * video.video.videoWidth;
                const leftTopY = response.data['leftTopY'] * video.video.videoHeight;
                const width = (response.data['rightBottomX'] - response.data['leftTopX']) * video.video.videoWidth;
                const height = (response.data['rightBottomY'] - response.data['leftTopY']) * video.video.videoHeight;

                if (response.data['success']===1) {
                    alarm.play();
                }

                // if(response.data['success']===0) return;
                var ctx = canvas.getContext('2d');
                canvas.width = video.video.videoWidth;
                canvas.height = video.video.videoHeight;

                console.log(canvas.width)
                console.log(canvas.height)
                // We want also the canvas to display de image mirrored
                //ctx.translate(canvas.width, 0);
                //ctx.scale(-1, 1);
                ctx.drawImage(video.video, 0, 0, canvas.width, canvas.height);
                //ctx.scale(-1, 1);
                //ctx.translate(-canvas.width, 0);
                // var faceArea = 300;
                // var pX = canvas.width / 2 - faceArea / 2;
                // var pY = canvas.height / 2 - faceArea / 2;
                ctx.rect(leftTopX, leftTopY, width, height);

                console.log("hihi")

                ctx.lineWidth = "6";
                ctx.strokeStyle = "red";
                ctx.stroke();


            }).catch(error => {
                console.log(`error:${response.data}`)
            });
        }
    }

    //setTimeout(drawImge, 100);

    let timer = setInterval(drawImge, 200)

    //setInterval(sendImage, 1000)

    const classes = useStyles();
    return (
        <Wrapper>
            <Webcam className={classes.cctv}
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            <canvas className={classes.capture} ref={canvasRef} />

            <h3 className={classes.cctvText}><LocalSeeIcon fontSize="large"/>실시간 영상</h3>

            <h3 className={classes.captureText}><CenterFocusWeakIcon fontSize="large" />검출 영상</h3>


            <div className="Button" onClick={() => {
                console.log("ajdjdj")
                console.log(recordId)
                clearInterval(timer)
                history.push({
                    pathname: '/EndCam',
                    search: '?id=' + `${recordId}`,
                    state: {detail: recordId},
                })
            }
            }>
                완료
            </div>

        </Wrapper>
    );
}
