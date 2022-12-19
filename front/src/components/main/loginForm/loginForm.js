//
import sytle from './loginForm.scss';

import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from "react-router";
import axios from "axios";
import {getCLS} from "web-vitals";



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" marginBottom='3px'>
            @EWHA DEEPDEEP
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    body: {
        backgroundColor: "#0B0B3B",
    },
    logo: {
        // marginTop: '1em',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '4.5em',
    },
    description: {
        marginTop: '5em',
        fontSize: '1em',
    },
    back: {
        backgroundColor: "white",
        borderRadius: '0.5em',
        boxShadow: '3px 3px 3px black',
        // marginTop: '150px',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginRight: theme.spacing(1),
        backgroundColor: "#0B0B3B",
    },
    iconLogin: {
        display: 'flex',
        marginRight: theme.spacing(5),
    },
    loginText: {
        marginTop: theme.spacing(3.5),
    },
    signupText: {
        float: 'right',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    palette: {
        primary: '#0B0B3B',
    },
    item: {
        alignContent: 'right',
    },
    id: {

    },
    pwd: {

    }
}));


export default function SignIn(props) {

    let [JoinLoign,setJoinLogin] = useState('로그인')
    const history = useHistory()

    let [email, setEmail] = useState()
    let [password, setPassword] = useState()

    const handleNameChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = "#0B0B3B";

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" className={classes.back}>
            <CssBaseline/>
            <div className={classes.paper}>
                <div className={classes.description}>
                    도서관 출입 반입 금지 물품 탐지 시스템
                </div>
                <div className={classes.logo}>
                    AUTO.DETECT
                </div>
                <div className={classes.iconLogin}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5" className={classes.loginText} >
                        로그인
                    </Typography>
                </div>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="emaile"
                        label="이메일"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleNameChange}
                    />
                    <TextField
                        className={classes.pwd}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handlePasswordChange}
                    />
                    {/*<FormControlLabel*/}
                    {/*    control={<Checkbox value="remember" color="primary" />}*/}
                    {/*    label="Remember me"*/}
                    {/*/>*/}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={(e) => {
                        e.preventDefault()
                        fetch(`/api/signin`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                email: email,
                                password: password
                            })
                        })
                            .then(res => res.json())
                            .then(json => {
                                // user data와 token정보가 일치하면 로그인 성공
                                if (json.success === 'True') {
                                    sessionStorage.setItem('token', json.token)
                                    sessionStorage.setItem('id', json.id)
                                    console.log(json.token)
                                    console.log(json.id)
                                    axios.defaults.headers.common['Authorization'] = `Bearer ${json.token}`
                                    console.log(sessionStorage.getItem('token'))
                                    //props.userHasAuthenticated(true, json.user.email, json.token);
                                    history.push("/home");
                                    //props.setModal(true)
                                    alert("반갑습니다 :)")
                                } else {
                                    alert("아이디 또는 비밀번호를 확인해주세요.")
                                }
                            })
                            .catch(error => alert(error));
                    }}>
                        로그인
                    </Button>
                    <Grid container>
                        {/*<Grid item xs>*/}
                        {/*    /!*    <Link href="#" variant="body2">*!/*/}
                        {/*    /!*        비밀번호 찾기가필요한가?*!/*/}
                        {/*    /!*    </Link>*!/*/}
                        {/*</Grid>*/}
                        <Grid item xs>
                            <Link href="/signUp" variant="body2" justify="flex-end" className={classes.signupText}>
                                {"회원가입하기"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
}