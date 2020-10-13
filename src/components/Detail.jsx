import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Grid, Link, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  // headline with img
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  margin: {
    marginLeft: '2rem',
  },
  marginB: {
    marginBottom: '2rem',
  },
  marginT: {
    marginTop: '2rem',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Main( props ) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.news.title}
            </Typography>
          </Toolbar>
        </AppBar>
        {/* headline with img */}
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${props.news.urlToImage})` }}>
          {/* Increase the priority of the hero background image */}
          {<img style={{ display: 'none' }} src={props.news.urlToImage} alt={props.news.title} />}
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  {props.news.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {props.news.description}
                </Typography>
                <Link variant="subtitle1" href="#">
                  {props.news.url}
                </Link>
              </div>
            </Grid>
          </Grid>
        </Paper>
        {/* title */}
        <Grid className={classes.margin} item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            From The {props.news.source.name}
          </Typography>
          <Divider />
        </Grid>
        <Grid className={classes.margin} item xs={12} md={8}>
          <Typography variant="h5">
            {props.news.title}
          </Typography>
          <br/>
          <Typography className={classes.marginB} variant="p">
            {props.news.publishedAt} By
            <Typography variant="span">
              {props.news.author}
            </Typography>
          </Typography>
          <br/>
          <Typography variant="h6">
            {props.news.content}
          </Typography>
          <Button className={classes.marginT} size="large" variant="contained" href={props.news.url} color="primary">
            Official website
          </Button>
        </Grid>
      </Dialog>
    </div>
  );
}