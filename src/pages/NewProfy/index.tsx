import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Paper,
  Divider,
  TextField,
} from '@material-ui/core';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import profy from '../../assets/Proffy.svg';
import back from '../../assets/Voltar.svg';
import emoji from '../../assets/Emoji.svg';
import useWindowDimensions from '../../utils/windowsDimension';

const NewProfyPage = () => {
  const { width } = useWindowDimensions();
  const [stylesProps, setStylesProps] = useState({
    visibility: 'hidden',
    display: 'block',
    whatsapp: '',
  });

  useEffect(() => {
    if (width < 960) {
      setStylesProps({ ...stylesProps, display: 'none' });
    } else if (width >= 960) {
      setStylesProps({ ...stylesProps, display: 'block' });
    }
  }, [width]);

  const classes = useStyles(stylesProps);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar className={classes.tollbar}>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img src={back} alt="" />
            </IconButton>
          </Link>
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
          justify={width < 960 ? 'center' : 'space-around'}
        >
          <span className={classes.textWel}>
            Que incrível que você <br />
            quer dar aulas.
          </span>
          <div className={classes.empty}>
            <p>Div inisivel</p>
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
          justify={width < 960 ? 'center' : 'space-around'}
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
      <Grid container xs={12} xl={12}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          justify="center"
          className={classes.paperGrid}
        >
          <Paper variant="outlined" className={classes.paperRoot}>
            <Grid container xs={12} xl={12}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                justify="flex-start"
                className={classes.paperTitle}
              >
                <span className={classes.titleForm}>Seus Dados</span>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.paperDivider}
              >
                <Divider />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.paperForm}
              >
                <TextField
                  id="outlined-full-width"
                  label="Nome"
                  name="name"
                  className={classes.textfield}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.paperForm}
              >
                <TextField
                  id="outlined-full-width"
                  label="Link da sua foto"
                  name="picture"
                  className={classes.textfield}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.paperForm}
              >
                <TextField
                  id="outlined-full-width"
                  label="Whatsapp"
                  name="wapp"
                  className={classes.textfield}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.paperForm}
              >
                <TextField
                  id="outlined-multiline-static"
                  label="Biografia (Max 300 caracteres)"
                  name="bio"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textfield}
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  variant="outlined"
                  helperText="300 restante"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                justify="flex-start"
                className={classes.paperTitle}
              >
                <span className={classes.titleForm}>Sobre a Aula</span>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.paperDivider}
              >
                <Divider />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.paperForm}
              >
                <TextField
                  id="outlined-full-width"
                  label="Matéria"
                  name="materia"
                  className={classes.textfield}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.paperForm}
              >
                <TextField
                  id="outlined-full-width"
                  label="Custo de sua hora aula"
                  name="cost"
                  className={classes.textfield}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                justify="flex-start"
                className={classes.paperTitle}
              >
                <span className={classes.titleForm}>Horários disponíveis</span>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.paperDivider}
              >
                <Divider />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.paperForm}
              >
                <TextField
                  id="outlined-full-width"
                  label="Dia da Semana"
                  name="dsemana"
                  className={classes.textfield}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
                className={classes.paperForm}
              >
                <TextField
                  id="outlined-full-width"
                  label="Das"
                  name="de"
                  className={classes.textfield}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
                className={classes.paperForm}
              >
                <TextField
                  id="outlined-full-width"
                  label="Até"
                  name="ate"
                  className={classes.textfield}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewProfyPage;
