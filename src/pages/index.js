import React, { useCallback } from 'react';
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
import Landing from '../components/Landing';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import About from '../components/About';
import data from '../constants/data.json';
import { darkTheme, lightTheme } from '../theme';
import { Brightness4, Brightness7 } from '@material-ui/icons';
const { name, projects } = data;

export default function Index({ projects, setTheme }) {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true });
  const theme = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme => (theme.palette.type === 'dark' ? lightTheme : darkTheme));
  }, [setTheme]);

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

export async function getStaticProps() {
  const baseURI = projects.baseURI;
  const repos = projects.repositories;
  const reqInit = {
    headers: {
      Authorization: `token ${process.env.GITHUB_API_KEY}`,
    },
  };
  const fullRepoData = await Promise.allSettled(
    repos.map(async name => {
      const repo = await fetch(baseURI + name, reqInit).then(res => res.json());
      const langs = await fetch(baseURI + name + '/languages', reqInit).then(
        res => res.json(),
      );
      return {
        ...repo,
        languages: Object.getOwnPropertyNames(langs),
      };
    }),
  );

  return {
    props: {
      projects: fullRepoData,
    },
    revalidate: 60,
  };
}
