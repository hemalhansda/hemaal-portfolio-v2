import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './BottomSheet.css';

import { ChatBox } from './../ChatBox/ChatBox';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
        paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function TemporaryDrawer(props) {
  const classes = useStyles();

  const sideList = side => (
    <div>
    </div>
  );

  const fullList = side => (
    <div className={classes.root} style={{height: '400px'}}>
        <Grid container spacing={3} style={{height: 'inherit'}}>
            <Grid item md={8}>
            </Grid>
            <Grid item md={4}>
                <ChatBox />
            </Grid>
        </Grid>
    </div>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
      <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
      <Button onClick={toggleDrawer('top', true)}>Open Top</Button>
      <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button> */}
      <Drawer open={props.controller.left} onClose={props.toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      <Drawer anchor="top" open={props.controller.top} onClose={props.toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
      <Drawer anchor="bottom" open={props.controller.bottom} onClose={props.toggleDrawer('bottom', false)} style={{opacity: '0.9'}}>
        {fullList('bottom')}
      </Drawer>
      <Drawer anchor="right" open={props.controller.right} onClose={props.toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}