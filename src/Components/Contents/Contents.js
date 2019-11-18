import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import BottomSheet from './../BottomSheet/BottomSheet';
import Markdown from './Markdown';

import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import roverImg from './../../Assets/images/Rover.png';
import dochatImg from './../../Assets/images/dochat.png';
import handRec from '../../Assets/images/hand-recog.jpeg';
import mainCover from '../../Assets/images/cover.png';
import angularImg from '../../Assets/images/angular.png';
import reactImg from '../../Assets/images/react-sqr.png';
import ionicImg from '../../Assets/images/ionic.jpg';
import uxImg from '../../Assets/images/ux.png';
import expressjsImg from '../../Assets/images/expressjs.png';
import mongoImg from '../../Assets/images/mongoleaf.png';
import codeigImg from '../../Assets/images/codeig.png';
import nodejslogoImg from '../../Assets/images/nodejslogo.png';

import leftArrow from '../../Assets/svgs/left-arrow.svg';
import rightArrow from '../../Assets/svgs/right-arrow.svg';

import './Content.css';
import SimpleCollapse from '../SimpleCollapse/SimpleCollapse';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        hemaalhansda.ml
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ffffff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${mainCover})`,
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
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: '#616161 !important',
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel',
];

const featuredPosts = [
  {
    title: 'Rover',
    date: 'Nov 12, 2016',
    description:
      `Rover is a bot that is smart and platform-independent, based on IoT. 
      And the most amazing part is that it can be controlled from anywhere, it 
      doesn\'t require the user\'s presence near the rover.`,
    image: roverImg,
  },
  {
    title: 'DoChat',
    date: 'August 02, 2017',
    description:
      `DoChat is a Chating Website based on MERN Stack. This project is not an open source project, so I can't provide the project link but anyone can access the website though.`,
    image: dochatImg,
  },
  {
    title: 'Hand Sign Recognition',
    date: 'March 08, 2018',
    description:
      `Number of Fingers Detector using OpenCV Python, made for Deaf persons
      It detects the angle between the fingers and find out how many fingers are there.(OpenCV Python)`,
    image: handRec,
  },
  {
    title: 'DoChat',
    date: 'August 02, 2017',
    description:
      `DoChat is a Chating Website based on MERN Stack. This project is not an open source project, so I can't provide the project link but anyone can access the website though.`,
    image: 'https://source.unsplash.com/user/erondu',
  },
  {
    title: 'Rover',
    date: 'Nov 12, 2016',
    description:
      `Rover is a bot that is smart and platform-independent, based on IoT. 
      And the most amazing part is that it can be controlled from anywhere, it 
      doesn\'t require the user\'s presence near the rover.`,
    image: 'https://source.unsplash.com/user/erondu',
  },
  {
    title: 'DoChat',
    date: 'August 02, 2017',
    description:
      `DoChat is a Chating Website based on MERN Stack. This project is not an open source project, so I can't provide the project link but anyone can access the website though.`,
    image: 'https://source.unsplash.com/user/erondu',
  },
];

const posts = [post1, post2, post3];

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

let state = {
  showSheet: false
};

let sliderScrollerVal = 0;

export default function Contents(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const expandDetails = () => {
    simpleCollapse.handleChange();
  };

  const ref = React.createRef();

  let simpleCollapse = undefined;

  let sliderWidth = `${((featuredPosts.length * 100)/2) + 5}%`;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Button size="small">Portfolio</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Hemaal Taras Hansda
          </Typography>
          <Button variant="outlined" size="small">
            DOWNLOAD RESUME
          </Button>
        </Toolbar>
        {/* <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))}
        </Toolbar> */}
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={12}>
                <div className={classes.mainFeaturedPostContent + ' main-intro'}>
                  <Typography className="heading-one" component="h1" variant="h3" color="inherit" gutterBottom>
                    Full Stack Developer
                  </Typography>
                  <Typography className="subtitles" variant="h7" color="inherit" paragraph style={{fontWeight: 'bolder', textAlign: 'center'}}>
                  An experienced and trained Programmer and Full Stack Developer pursuing 
                  Bachelor of Technology in Information Technology from Maulana Abul Kalam Azad 
                  University of Technology. A growing engineer who has the technical knowledge of 
                  how things work in the world of zeroes and ones, ready with an edge to dive into the 
                  design process to discover, ideate and build some cool product. 
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          <h3 className="project-text">PROJECTS</h3>
          {/* Sub featured posts */}
          <div style={{overflowX: 'auto', scrollBehavior: 'smooth'}} id="corsoSlider">
            <div style={{display: 'flex', flexWrap: 'nowrap', width: sliderWidth}}>
              {featuredPosts.map(post => (
                <div key={post.title} style={{marginRight: '15px'}}>
                  <CardActionArea component="a" onClick={expandDetails} className="card-hover">
                    <Card className={classes.card}>
                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Typography component="h2" variant="h5">
                            {post.title}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {post.date}
                          </Typography>
                          <Typography variant="subtitle1" paragraph>
                            {post.description}
                          </Typography>
                        </CardContent>
                      </div>
                      <Hidden xsDown>
                        <CardMedia
                          className={classes.cardMedia + ' filter-adder'}
                          image={post.image}
                          title="Image title"
                        />
                      </Hidden>
                    </Card>
                  </CardActionArea>
                </div>
              ))}
            </div>
          </div>
          <div className="buttons-slider">
            <button className="carosuel-btn-slider" onClick={() => props.slideProjects('left')}>
              <img className="arrow" src={leftArrow} alt="Slide Left" />
            </button>
            <button className="carosuel-btn-slider" onClick={() => props.slideProjects('right')}>
              <img className="arrow" src={rightArrow} alt="Slide Right" />
            </button>
          </div>
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            {/* End main content */}
            {/* Sidebar */}
            {/* End sidebar */}
          </Grid>
          <SimpleCollapse ref={ref => simpleCollapse = ref} />
        </main>
        <h3 className="work-on-text">I WORK ON</h3>
        <main>
          <div id="carousel">
            <div className="hideLeft">
              <img src={nodejslogoImg} />
            </div>
            <div className="prevLeftSecond">
              <img src={codeigImg} />
            </div>
            <div className="prev">
              <img src={angularImg} />
            </div>
            <div className="selected">
              <img src={reactImg} />
            </div>
            <div className="next">
              <img src={uxImg} />
            </div>
            <div className="nextRightSecond">
              <img src={mongoImg} />
            </div>
            <div className="hideRight">
              <img src={ionicImg} />
            </div>
          </div>
          <div className="buttons">
            <button id="prev" className="carosuel-btn"> &lt; </button>
            <button id="next" className="carosuel-btn"> &gt; </button>
          </div>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            <Button variant="contained" className={classes.button} onClick={toggleDrawer('bottom', true)}>
              Contact
            </Button>
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Architectured With Love! Hemaal &hearts;
          </Typography>
          <Copyright />
        </Container>
      </footer>
      <BottomSheet 
        controller={state}
        toggleDrawer={toggleDrawer}
        showNotification={props.showNotification}
      />
      {/* End footer */}
    </ThemeProvider>
  );
}
