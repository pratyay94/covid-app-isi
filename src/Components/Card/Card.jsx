import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import cx from 'classnames';
import CountUp from 'react-countup';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {getIcon} from '../../Helpers/IconHelper';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: 'center'
  },
  customCard: {
    transition: 'box-shadow .3s',
    margin: '0.5em',
    [theme.breakpoints.down('sm')]: {
      width: '46%',
      minWidth: '46%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      minWidth: '95%'
    },
    width: '23%',
    minWidth: '23%',
    cursor: 'default',
    '&:hover': {
      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.3),0px 4px 5px 0px rgba(0,0,0,0.24),0px 1px 10px 0px rgba(0,0,0,0.22)'
    }
  },
  confirmed: {
    borderBottom: '10px solid #368bf6'
  },
  active: {
    borderBottom: '10px solid #f2a365'
  },
  recovered: {
    borderBottom: '10px solid #81c784'
  },
  death: {
    borderBottom: '10px solid #eb5569'
  },
  iconStyle: {
    fontSize: '1rem',
    top: '.125em',
    position: 'relative'
  },

}));
const getActionButtonText = (title) => {
  switch (title) {
    case "Confirmed":
      return "Weekly Increase";
    case "Recovered":
      return "Recovery Rate";
    case "Deceased":
      return "Death Rate";
    case "Active":
      return "Concentration";
    default:
      return "";
  }
}
export default function CustomCard(props) {
  const classes = useStyles();

  return (
    <Card className={cx(classes.customCard, classes[props.cardType])}>
      <CardContent className={classes.content}>
        <Typography color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h4">
          <CountUp start={0} end={+props.value} duration={1} separator="," />
        </Typography>
        <Typography color="inherit">
          {props.valueChange > 0 ?
            <ArrowUpwardIcon className={classes.iconStyle}></ArrowUpwardIcon> :
            props.valueChange < 0 ?
              <ArrowDownwardIcon className={classes.iconStyle}></ArrowDownwardIcon> : null}
          {props.valueChange ? Math.abs(props.valueChange) : null}
        </Typography>
        {/*div for padding*/}
        {props.valueChange ? null : <div style={{ height: "24px" }}></div>}
      </CardContent>
      <CardActions disableSpacing>     
        <Button size="small" startIcon={getIcon(props.icon,{style:{ color: green[300] }})}>{getActionButtonText(props.title)}</Button>
      </CardActions>
    </Card>
  );
}