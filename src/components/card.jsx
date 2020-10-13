import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Detail from './Detail'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '1rem 0 0 .5rem',
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const [isValid, setValid] = useState(false)

  return (
    <>
    <Card onClick={() => setValid(!isValid)} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.news.urlToImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.news.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Author : {props.news.author} <br/>
          Published At: {props.news.publishedAt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => setValid(!isValid)} size="small" color="primary">
          Learn More
        </Button>
        <Button size="small" href={props.news.url} color="primary">
          Official website
        </Button>
      </CardActions>
    </Card>
    { isValid ? <Detail news={props.news} /> : null}
    </>
  );
}