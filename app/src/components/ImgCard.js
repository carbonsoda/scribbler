import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { renewShareUrl } from '../apiClient';

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
  fileName, cardUrl, timeCreated, shareUrl, sharedAtTime, user,
}) {
  const [activeShareUrl, setActiveShareUrl] = React.useState(shareUrl);
  const [activeUrlTime, setActiveUrlTime] = React.useState(sharedAtTime);

  const refreshUrl = async (e) => {
    e.preventDefault();

    if (user) {
      const { url, time } = await renewShareUrl(user.sub, fileName);
      setActiveShareUrl(url);
      setActiveUrlTime(time);
    }
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
          image={cardUrl}
          title={fileName}
        />
        <CardContent>
          <Typography variant="body2" component="p">
            Time created:
            {timeCreated}
          </Typography>
          <Typography variant="body2" component="p">
            Share it:
            { ' ' }
            <a href={activeShareUrl}>click</a>
            <br />
            Active since
            {' '}
            { activeUrlTime }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Button size="medium" color="primary" onClick={(e) => refreshUrl(e)}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
