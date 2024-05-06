'use client';

import data from '@/constants/data.json';
import {
  AppBar,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from '@material-ui/core';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import { useCallback } from 'react';
import { About } from './about';
import { Experience } from './experience';
import { Landing } from './landing';
import { Projects } from './projects';
import { Skills } from './skills';

const { name } = data;

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Props {
  projects: any[];
}

export default function MainPage({ projects }: Props) {
  const classes: any = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true });
  const theme = useTheme();

  const toggleTheme = useCallback(() => {
    // setTheme(theme => (theme.palette.type === 'dark' ? lightTheme : darkTheme));
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        color={!trigger ? 'transparent' : 'inherit'}
        className={classes.appBar}
        position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            {name}
          </Typography>
          <IconButton edge="end" color="inherit" onClick={toggleTheme}>
            {theme.palette.type === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
      <Container>
        <Landing />
        <About />
        <Skills />
        <Experience />
        <Projects data={projects} />
      </Container>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
  },
}));
