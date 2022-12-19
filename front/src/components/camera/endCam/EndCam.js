import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from "react-router";


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

export default function EndCam() {
    const history = useHistory()

    let [title, setTitle] = useState()
    let [etc, setEtc] = useState()

    if (!sessionStorage.getItem("token")) {
        alert("로그인이 필요한 서비스입니다.");
        history.push('/');
    }


    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleEtcChange = (e) => {
        setEtc(e.target.value)
    }

    const classes = useStyles();

    const recordId = history.location.state.detail

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AddAPhotoIcon/>
                </Avatar>
                <Typography component="h2" variant="h6">
                    촬영이 성공적으로 끝났어요!
                </Typography>
                <Typography component="h1" variant="h5">
                    비고란을 수정하고 싶다면 적어주세요.
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="etc"
                                rows={10}
                                label="비고"
                                type="etc"
                                id="etc"
                                onChange={handleEtcChange}
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
                            let userId = sessionStorage.getItem('id');
                            console.log(token);
                            const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
                            const date = new Date();
                            fetch(`/api/home/record/${recordId}`, {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json',
                                    "Authorization": `Bearer ${token}`
                                },
                                params: {'id': `${recordId}`},
                                body: JSON.stringify({
                                    id: recordId,
                                    endTime: date,
                                    recordNum: 0,
                                    etc: etc,
                                    userId: userId,
                                })
                            })
                                .then(res => res.json())
                                .then(json => {
                                    if (json.success === true) {
                                        alert("촬영 내역을 성공적으로 저장했습니다.")
                                        history.push("/home");
                                    } else {
                                        console.log(json)
                                        alert("정보 입력에 실패했습니다. 다시 시도해주세요.")
                                    }
                                })
                                .catch(error => alert(error));
                        }}
                    >
                        촬영 결과 저장하기
                    </Button>
                </form>
            </div>
        </Container>
    );
}