import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import useStyles from './FooterStyles';




function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
         
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }










export default function Footer() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        {/* <Container component="main" className={classes.main} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Sticky footer
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'Pin a footer to the bottom of the viewport.'}
            {'The footer will move as the main element of the page grows.'}
          </Typography>
          <Typography variant="body1">Sticky footer placeholder.</Typography>
        </Container> */}
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body1"></Typography>
            <Copyright />
          </Container>
        </footer>
      </div>
    );
  }