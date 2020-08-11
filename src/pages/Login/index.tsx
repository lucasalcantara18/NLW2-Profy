/* eslint-disable linebreak-style */
import React from 'react';
import './styles.css';
import { Grid, Button } from '@material-ui/core';
import classNames from 'classnames';
import { FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';
import useStyles from './styles';
import profy from '../../assets/Proffy.svg';
import ilustra from '../../assets/Ilustra.svg';
import useWindowDimensions from '../../utils/windowsDimension';

const LoginPage = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  return (
    <div className={classes.root}>
      {/* width: {width} ~ height: {height} */}
      <Grid
        container
        className={classNames(classes.rootGridTop, classes.espGridTop)}
        xs={12}
        xl={12}
      >
        <Grid
          justify={width < 960 ? 'center' : 'flex-end'}
          alignItems="center"
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className={classNames(classes.flexGrid, classes.divProfySpace)}
        >
          <div className={classes.divProfySpace}>
            <img src={profy} alt="logo" />
            <p className={classes.textUnderProfy}>
              Sua Plataforma de <br /> estudos online.
            </p>
          </div>
        </Grid>
        <Grid
          justify={width < 960 ? 'center' : 'flex-start'}
          alignItems="center"
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className={classNames(classes.flexGrid, classes.divIlustraSpace)}
        >
          <img
            src={ilustra}
            alt="logo"
            width={width < 960 ? 400 : 700}
            className={classes.divIlustraSpace}
          />
        </Grid>
      </Grid>
      <Grid
        container
        className={classNames(classes.rootGridBotton, classes.containerFooter)}
        xs={12}
        xl={12}
      >
        <Grid
          alignContent="center"
          alignItems="center"
          justify={width < 960 ? 'center' : 'flex-end'}
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className={classNames(classes.flexGrid, classes.gridFirst)}
        >
          <div className={classes.textWelcome}>
            <p>Seja bem-vindo.</p>
            <p>O que deseja fazer?</p>
          </div>
          <div className={classes.textMine}>
            <p>
              Total de 285 conexões <br /> já realizadas
            </p>
          </div>
        </Grid>
        <Grid
          alignContent="center"
          alignItems="center"
          justify={width < 960 ? 'center' : 'flex-start'}
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className={classNames(classes.flexGrid, classes.gridSecond)}
        >
          <div className={classes.gridFirstButton}>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: classes.firstButton }}
              startIcon={
                <FaGraduationCap size={50} className={classes.iconPadding} />
              }
            >
              Estudar
            </Button>
          </div>
          <div className={classes.gridSecondButton}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.secondButton}
              startIcon={
                <FaChalkboardTeacher
                  size={50}
                  className={classes.iconPadding}
                />
              }
            >
              Dar Aulas
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
