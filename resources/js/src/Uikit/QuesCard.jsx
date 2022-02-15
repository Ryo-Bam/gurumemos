import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 450,
    padding: 5,
    display: 'flex',
  },
  title: {
    fontSize: 14,
    marginRight: 10
  },
  pos: {
    marginBottom: 12,
  },
  ButtonLine: {
      paddingTop: 0,
      paddingLeft: 15,
      paddingBottom: 0,
  },
  Button: {
      backgroundColor: '#ededed',
  }
});

const QuesCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.user}
        </Typography>
        <Typography>
          {props.question}
        </Typography>
    </Card>
  );
}

export default QuesCard;
