import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
} from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles';
import profy from '../../assets/Proffy.svg';
import back from '../../assets/Voltar.svg';
import emoji from '../../assets/Emoji.svg';

const NewProfyPage = () => {
  const [stylesProps, setStylesProps] = useState({
    visibility: 'hidden',
    display: 'block',
    whatsapp: '',
  });

  const classes = useStyles(stylesProps);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar className={classes.tollbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={back} alt="" />
          </IconButton>
          <Typography className={classes.title}>Dar Aulas</Typography>
          <img src={profy} width={70} alt="" />
        </Toolbar>
      </AppBar>
      <Grid
        container
        className={classNames(classes.rootGridBotton)}
        xs={12}
        xl={12}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={classes.gridTextWel}
          justify="space-around"
        >
          <span className={classes.textWel}>
            Que incrível que você <br />
            quer dar aulas.
          </span>
          <div className={classes.empty}>
            <p>ssffdsg</p>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className={classes.gridTextWel}
          justify="space-around"
        >
          <span className={classes.textNext}>
            O primeiro passo, é preencher esse <br />
            formulário de inscrição.
          </span>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className={classes.gridTextWel}
          justify="center"
        >
          <img src={emoji} alt="" className={classes.emojiPosition} />
          <span className={classes.textPrepare}>
            Preparare-se! <br />
            vai ser o máximo.
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewProfyPage;
