import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink, useHistory, useParams} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 10,
        float: "left",
    },
    media: {
        height: 180,
    },
});

export default function MediaCard({id1, detectedItem, image, captureTime}) {
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams()

    return (
        <Card className={classes.root}>
            {/*<NavLink to={`/past/${id}/detail`} >*/}
            <CardActionArea onClick={(e) => {
                e.preventDefault()
                history.push({
                    pathname: `/past/${id}/detail`,
                    // search: '?id='+json.record_id,
                    state: { image: image, captureTime:captureTime}
                })
            }}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {detectedItem}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {captureTime}   적발
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/*</NavLink>*/}
        </Card>
    );
}
