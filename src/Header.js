import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  AppBar,
  Toolbar
} from '@material-ui/core';
import logo from "./img/logo/logo.jpg";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      items: {}
    };
  }

  handleClose = event => {
    if (this.state.anchorEl !== null && this.state.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ anchorEl: null });
  }

  handleToggle = (event, items) => {
    this.setState({ anchorEl: event.target, items: items });
  }

  getMenu = () => {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Popper open={open} anchorEl={anchorEl} transition disablePortal className="front">
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={this.handleClose}>
                <MenuList>
                  {Object.keys(this.state.items).map(item => {
                    if (this.state.items[item].charAt(0) === '/') {
                      return (
                        <Link to={this.state.items[item]}><MenuItem>{item}</MenuItem></Link>
                      );
                    } else {
                    return (
                      <a href={this.state.items[item]}><MenuItem>{item}</MenuItem></a>
                    );
                    }
                  })}
                </MenuList>
              </ClickAwayListener>
             </Paper> 
          </Grow>
        )}
      </Popper>
    );
  }

  render() {
    const { open } = this.state;
    

    return (
      <AppBar position="static" color="default" square={{"bool": "true"}}>
        <Toolbar>
          <div>
            <img src={logo} alt width="241" height="80"/>
          </div>
          <Grid container justify="flex-end" position="static">
            <Grid item>
              <Button href="/">Home</Button>
            </Grid>
            <Grid item>
              <div>
                <Button
                  aria-owns={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={e => this.handleToggle(e, {'About Us': '/aboutus', 'Testimonials': '/testimonials', 'Photos': '/photos'})}
                >About Us</Button>
                {this.getMenu()}
              </div>
            </Grid>
            <Grid item>
              <div>
                <Button
                  aria-owns={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={e => this.handleToggle(e, {'Why China': '/whychina', 'China Trip Plans': '/tripplans','Custom Tours': '/customtours', 'Book a Tour': '/bookatour'})}
                >China Tours</Button>
                {this.getMenu()}
              </div></Grid>
            <Grid item>
              <Button href="/studyinchina">Study in China</Button>
            </Grid>
            <Grid item>
              <Button href="/teachinchina">Teach in China</Button>
            </Grid>
            <Grid item>              
              <div>
                <Button
                  aria-owns={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={e => this.handleToggle(e, {'Passport & Visa': '/passport', 'Vaccinations': '/vaccinations', 'Trip Planning': '/tripplanning','China Info': '/chinainfo'})}
                >Info Center</Button>
                {this.getMenu()}
              </div></Grid>
            <Grid item>              
              <div>
                <Button
                  aria-owns={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={e => this.handleToggle(e, {'Contact Info': '/contact', 'Visit Us on Facebook': 'https://www.facebook.com/profile.php?id=100001525701996&sk=about' })}
                >Contact Us</Button>
                {this.getMenu()}
              </div></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;