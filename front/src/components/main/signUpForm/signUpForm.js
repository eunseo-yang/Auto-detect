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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from "react-router";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {/*{'Copyright © '}*/}
            {/*<Link color="inherit" href="https://material-ui.com/">*/}
            {/*    Your Website*/}
            {/*</Link>{' '}*/}
            {/*{new Date().getFullYear()}*/}
            {/*{'.'}*/}
            @EWHA DEEPDEEP
        </Typography>
    );
}

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

export default function SignUp() {
    const history = useHistory()

    let [email, setEmail] = useState()
    let [repassword, setRepassword] = useState()
    let [realUserName, setRealUserName] = useState()
    let [birthDate, setBirthDate] = useState()
    let [password, setPassword] = useState()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleRePasswordChange = (e) => {
        setRepassword(e.target.value)
    }
    const handleRealUserNameChange = (e) => {
        setRealUserName(e.target.value)
    }
    const handleBirthDateChange = (e) => {
        setBirthDate(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    회원가입
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="realUserName"
                                name="realUserName"
                                variant="outlined"
                                required
                                fullWidth
                                id="realUserName"
                                label="이름"
                                autoFocus
                                onChange={handleRealUserNameChange}
                            />
                        </Grid>
                        {/*<Grid item xs={12} sm={6}>*/}
                        {/*    <TextField*/}
                        {/*        variant="outlined"*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        id="lastName"*/}
                        {/*        label="Last Name"*/}
                        {/*        name="lastName"*/}
                        {/*        autoComplete="lname"*/}
                        {/*    />*/}
                        {/*</Grid>*/}
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="이메일 주소"
                                name="email"
                                autoComplete="email"
                                onChange={handleEmailChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="비밀번호"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handlePasswordChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="repassword"
                                label="비밀번호 재확인"
                                type="password"
                                id="repassword"
                                autoComplete="current-password"
                                onChange={handleRePasswordChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <form className={classes.container} noValidate>
                                <TextField
                                    id="birthDate"
                                    label="생년월일"
                                    type="date"
                                    defaultValue="2000-01-01"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={handleBirthDateChange}
                                />
                            </form>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="이용 약관 동의"
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
                            fetch('/api/signup', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    email: email,
                                    username: "아이디값 없음",
                                    realUserName: realUserName,
                                    birthDate: birthDate,
                                    repassword: repassword,
                                    password: password
                                })
                            })
                                .then(res => res.json())
                                .then(json => {
                                    if (json.message === 'ok') {
                                        history.push("/");
                                        //props.setModal(true)
                                        alert("회원가입이 완료되었습니다.")
                                    } else {
                                        alert("회원가입에 실패하였습니다. 정보를 다시 확인해주세요.")
                                    }
                                })
                                .catch(error => alert(error));}}
                    >
                        회원 가입
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                로그인하기
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}