import React, { useState } from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import Logo from './components/Logo';
import Hamburger from './components/Hamburger';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';
import LeftIcons from './components/LeftIcons';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    MobileNav: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);

const NAV_ITEMS = [
  {
    name: 'Fandoms',
    link: ''
  },
  {
    name: 'About',
    link: ''
  },
  {
    name: 'Contact Us',
    link: ''
  }
]

const Header= () => {
  const classes = useStyles();
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  const drawerHandler = () => {setIsNavDrawerOpen(!isNavDrawerOpen)}
  return (
    <div className="Header">
      <AppBar className="Header__Container">
        <Toolbar className="Header__Container--Toolbar">
          <div className="Header__Container--Toolbar__section">
            <Hamburger className={classes.sectionMobile} drawerHandler={drawerHandler} />
            <Logo  className="Header__Container--Toolbar__section--Logo"/>
          </div>
          <div className="Header__Container--Toolbar__section">
            <DesktopNav navItems={NAV_ITEMS} className={classes.sectionDesktop} />
            <LeftIcons />
          </div>
        </Toolbar>
      </AppBar>
      <MobileNav className={classes.MobileNav} navItems={NAV_ITEMS} drawerState={isNavDrawerOpen} drawerHandler={(flag) => setIsNavDrawerOpen(flag)} />
    </div>
  );
}

export default Header