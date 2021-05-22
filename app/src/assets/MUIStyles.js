import React from 'react';

import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    textDecoration: 'none',
    fontFamily: 'Raleway, Arial',
  },
}));

export const ToolButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#edeaf5'),
    backgroundColor: '#edeaf5',
    border: 'solid 1px #3D00B8',
    '&:hover': {
      backgroundColor: '#7735e8',
      color: theme.palette.getContrastText('#7735e8'),
    },
    '&a:hover': {
      backgroundColor: '#7735e8',
      color: theme.palette.getContrastText('#7735e8'),
    },
    borderRadius: '.5em',
    textDecoration: 'none',
    fontFamily: 'Open Sans',
    textTransform: 'none',
    fontSize: '0.95rem',
  },
}))(Button);
