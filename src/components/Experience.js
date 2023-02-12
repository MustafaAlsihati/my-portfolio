import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  Fade,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import Image from 'next/image';
import { DateRange, LocationCity, Code } from '@material-ui/icons';
import data from '../constants/data.json';
import { useRef } from 'react';
import useAnimate from '../hooks/useAnimate';
import { getHumanDiff } from '../js/utils';
const { experience } = data;

export default function Experience() {
  const classes = useStyles();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const align = mdDown ? 'center' : 'flex-end';
  const textAlign = mdDown ? 'center' : 'right';

  const animRef = useRef(null);
  const animate = useAnimate(animRef);

  return (
    <Grid
      direction="row"
      container
      justify="center"
      alignItems="center"
      spacing={10}
      className={classes.cont}>
      <Grid item xs={12} lg={6}>
        <Typography variant="h2" gutterBottom align="center">
          Experience
        </Typography>
        <Hidden mdDown>
          <Fade in={animate} style={{ transitionDelay: '250ms' }}>
            <div>
              <Image
                alt="Experience"
                src="/experience.svg"
                width="996.46"
                height="828.18"
              />
            </div>
          </Fade>
        </Hidden>
      </Grid>
      <Grid
        container
        item
        xs={10}
        lg={6}
        direction="column"
        spacing={1}
        alignItems={align}>
        {Object.getOwnPropertyNames(experience).map((title, id) => (
          <Grid item key={id} className={classes.expObj}>
            <Typography
              variant="h4"
              align={textAlign}
              gutterBottom
              component="p">
              {title}
            </Typography>
            <Grid
              container
              item
              direction="column"
              spacing={1}
              justify="center">
              {experience[title].map(
                (
                  {
                    organization,
                    role,
                    type,
                    startDate,
                    endDate,
                    city,
                    state,
                    country,
                    url,
                    thumbnail,
                    description,
                  },
                  i,
                ) => (
                  <Grid item sm key={i}>
                    <Fade
                      in={animate}
                      style={{ transitionDelay: `${200 * i}ms` }}>
                      <Card className={classes.card}>
                        <CardActionArea
                          className={classes.cardActionArea}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer">
                          <CardHeader
                            avatar={
                              <Avatar variant="rounded">
                                {!!thumbnail && (
                                  <Image
                                    alt={`${organization} logo`}
                                    src={thumbnail}
                                    layout="fill"
                                  />
                                )}
                              </Avatar>
                            }
                            title={organization}
                            subheader={role + (type ? ' - ' + type : '')}
                          />
                          <CardHeader
                            avatar={<DateRange />}
                            title={getHumanDiff(startDate, endDate)}
                            subheader={`${startDate} - ${
                              endDate !== undefined ? endDate : 'Present'
                            }`}
                            className={classes.cardHeader}
                          />
                          <CardHeader
                            avatar={<LocationCity />}
                            subheader={`${city}, ${state}, ${country}`}
                            className={classes.cardHeader}
                          />
                          {!!description && (
                            <CardHeader
                              avatar={<Code />}
                              subheader={`${description}`}
                              className={classes.cardHeader}
                            />
                          )}
                        </CardActionArea>
                      </Card>
                    </Fade>
                  </Grid>
                ),
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <div ref={animRef}></div>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
  },
  card: {
    height: '100%',
  },
  cardHeader: {
    paddingTop: 0,
  },
  cardActionArea: {
    height: '100%',
  },
  expObj: {
    marginBottom: theme.spacing(4),
  },
}));
