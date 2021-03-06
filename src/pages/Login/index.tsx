/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import './styles.css';
import { Grid, Button } from '@material-ui/core';
import classNames from 'classnames';
import { FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import profy from '../../assets/Proffy.svg';
import ilustra from '../../assets/Ilustra.svg';
import hearth from '../../assets/Vector.svg';
import useWindowDimensions from '../../utils/windowsDimension';

const LoginPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const [item, setItem] = useState<boolean>(true);

  const handleClickProfy = () => {
    history.push('/profy');
  };

  return (
    <div className={classes.root}>
      {/* width: {width} ~ height: {height} */}
      <Grid
        container={item}
        className={classNames(classes.rootGridTop, classes.espGridTop)}
      >
        <Grid
          justify={width < 960 ? 'center' : 'flex-end'}
          item={item}
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className={classNames(classes.flexGrid, classes.divProfySpace)}
        >
          <div className={classes.divProfySpace}>
            <img src={profy} width={width < 960 ? 350 : 500} alt="logo" />
            <p className={classes.textUnderProfy}>
              Sua Plataforma de <br /> estudos online.
            </p>
          </div>
        </Grid>
        <Grid
          justify={width < 960 ? 'center' : 'flex-start'}
          alignItems="center"
          item={item}
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
        container={item}
        className={classNames(classes.rootGridBotton, classes.containerFooter)}
      >
        <Grid
          alignContent="center"
          alignItems="center"
          justify={width < 960 ? 'center' : 'flex-end'}
          item={item}
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
              <img src={hearth} alt="" className={classes.imgHearth} />
            </p>
          </div>
        </Grid>
        <Grid
          alignContent="center"
          alignItems="center"
          justify={width < 960 ? 'center' : 'flex-end'}
          item={item}
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          className={classNames(classes.flexGrid, classes.gridSecond)}
        >
          <div>
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
        </Grid>
        <Grid
          alignContent="center"
          alignItems="center"
          justify={width < 960 ? 'center' : 'flex-start'}
          item={item}
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          className={classNames(classes.flexGrid, classes.gridSecond)}
        >
          <div>
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
              onClick={handleClickProfy}
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
