import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import copy from 'clipboard-copy';
import TimeAgo from 'timeago-react';

import { renewShareUrl } from '../apiClient';
import { cardStyles } from '../assets/MUIStyles';

export default function ImgCard({
  fileName, cardUrl, timeCreated, shareUrl, sharedAtTime, user,
}) {
  // TIME SETUP
  // TODO: Make it so it says 0 min left for expired urls instead
  const shareExpireTime = (startTime) => {
    const current = new Date(startTime);
    return new Date(current.getTime() + 30 * 60000);
  };
  const urlExpired = () => {
    const diff = (expireTime.getTime() - Date.now()) / 60000;
    return Math.abs(Math.round(diff)) >= 30;
  };

  // STATE HOOKS
  const [activeShareUrl, setActiveShareUrl] = React.useState(shareUrl);
  const [urlTimeCreated, setUrlTimeCreated] = React.useState(new Date(sharedAtTime));
  const [expireTime, setExpireTime] = React.useState(shareExpireTime(urlTimeCreated));

  const refreshUrl = async (e) => {
    e.preventDefault();

    if (user && urlExpired()) {
      const { url, time } = await renewShareUrl(user.sub, fileName);
      setActiveShareUrl(url);
      setUrlTimeCreated(new Date(time));
      setExpireTime(shareExpireTime(time));
      copy(url);
    } if (user) {
      copy(activeShareUrl);
    }
  };

  const classes = cardStyles();

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
        <CardContent className={classes.text}>
          <Typography variant="subtitle1" component="p">
            Scribbled this
            { ' ' }
            <TimeAgo datetime={timeCreated} />
            <br />
            Link generated
            { ' ' }
            <TimeAgo datetime={sharedAtTime} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Button
          size="large"
          color="primary"
          onClick={(e) => refreshUrl(e)}
          endIcon={<FileCopyIcon />}
        >
          Share your Scribble
        </Button>
      </CardActions>
    </Card>
  );
}
