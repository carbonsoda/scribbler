import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: '80%',
    objectFit: 'cover',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default function ImgCard({
  name, url, timeCreated, refreshUrl,
}) {
  const refreshClick = (e) => {
    e.preventDefault();
    refreshUrl();
  };

  // TODO: configure time display
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          alt="A Scribble"
          height="140"
          image={url}
          title={name}
        />
        <CardContent>
          <Typography variant="body2" component="p">
            Time created:
            {timeCreated}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Button size="medium" color="primary" onClick={(e) => refreshClick(e)}>
          Share
        </Button>
        {/* <Button size="medium" color="primary">
          Delete
        </Button> */}
      </CardActions>
    </Card>
  );
}
