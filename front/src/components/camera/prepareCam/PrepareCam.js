import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from "react-router";
import {Add} from "@material-ui/icons";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        //backgroundColor: theme.palette.secondary.main,
        backgroundColor: '#0B0B3B',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    },
}));

export default function PrepareCam() {
    const history = useHistory()

    let [title, setTitle] = useState()
    let [etc, setEtc] = useState()


    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleEtcChange = (e) => {
        setEtc(e.target.value)
    }

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AddAPhotoIcon />
                </Avatar>
                <Typography component="h2" variant="h6">
                    촬영을 시작하기 전,
                </Typography>
                <Typography component="h1" variant="h5">
                    상황에 대한 기본 정보를 적어주세요.
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="title"
                                name="title"
                                variant="outlined"
                                required
                                fullWidth
                                id="title"
                                label="제목"
                                autoFocus
                                onChange={ handleTitleChange }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="etc"
                                rows = {4}
                                label="비고"
                                type="etc"
                                id="etc"
                                onChange={ handleEtcChange }
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={(e) => {
                            e.preventDefault()
                            let token = sessionStorage.getItem('token');
                            let userId = sessionStorage.getItem('id')
                            console.log(token);
                            const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
                            const date = new Date();
                            fetch('/api/home/record', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    "Authorization": `Bearer ${token}`
                                },
                                body: JSON.stringify({
                                    title: title,
                                    startTime: date,
                                    endTime: date,
                                    recordNum: 0,
                                    etc: etc,
                                    userId: userId,
                                })
                            })
                                .then(res => res.json())
                                .then(json => {
                                    if (json.success === true) {
                                        //history.push("/LiveCam/{$id}");
                                        history.push({
                                            pathname: '/LiveCam',
                                            search: '?id='+json.record_id,
                                            state: { detail: json.record_id }
                                        })
                                    } else {
                                        alert("정보 입력에 실패했습니다. 다시 시도해주세요.")
                                    }
                                })
                                .catch(error => alert(error));}}
                    >
                        촬영 시작하기
                    </Button>
                </form>
            </div>
        </Container>
    );
}