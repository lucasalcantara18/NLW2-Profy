import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Paper,
  Divider,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import classNames from 'classnames';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import profy from '../../assets/Proffy.svg';
import back from '../../assets/Voltar.svg';
import emoji from '../../assets/Emoji.svg';
import plus from '../../assets/+.svg';
import caution from '../../assets/Atenção.svg';
import useWindowDimensions from '../../utils/windowsDimension';
import Horario from '../../models/horario';
import counterAtom from '../../estados/Atom';

const NewProfyPage = () => {
  const { width } = useWindowDimensions();
  const [stylesProps, setStylesProps] = useState({
    visibility: 'hidden',
    display: 'block',
    whatsapp: '',
  });
  const [formData, setFormData] = useState({
    name: '',
    link: '',
    wapp: '',
    bio: '',
    materia: '',
    cost: '',
  });
  const [bioLength, setBioLength] = useState<number>(0);
  const [counter, setCounter] = useRecoilState(counterAtom);
  const [bioLengthTotal] = useState<number>(300);
  const [horarios, setHorarios] = useState<Horario[]>([]);
  const [dias] = useState<string[]>([
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
  ]);

  useEffect(() => {
    if (width < 960) {
      setStylesProps({ ...stylesProps, display: 'none' });
    } else if (width >= 960) {
      setStylesProps({ ...stylesProps, display: 'block' });
    }
  }, [width]);

  useEffect(() => {
    console.log(formData);
    console.log(horarios);
  }, [formData, horarios]);

  useEffect(() => {
    setBioLength(formData.bio.length);
  }, [formData.bio]);

  useEffect(() => {
    if (horarios.length === 0) {
      const horario: Horario = { dia: '', horaInicio: '', horaFim: '' };
      setHorarios([...horarios, horario]);
    }
  }, []);

  const classes = useStyles(stylesProps);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputBioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (bioLength < 300 || value.length < 300) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    const idx = event.target.name.split('-')[0];
    const name: string = event.target.name.split('-')[1];

    const horariosCopy = [...horarios]; // copia do estado atual
    const horarioCopy = { ...horariosCopy[idx] }; // copia do item que quero modificar
    horarioCopy[name] = value; // modifico
    horariosCopy[idx] = horarioCopy; // salvo novamente no array
    setHorarios(horariosCopy); // salvo o novo estado
  };

  const handleAAtag = (evt: any) => {
    evt.preventDefault();
    const horariosCopy = [...horarios]; // copia do estado atual
    const newObj: Horario = { dia: '', horaInicio: '', horaFim: '' }; // cria novo obj
    horariosCopy.push(newObj); // adiciona novo obj
    setHorarios(horariosCopy); // salva array com novo obj
  };

  const nadleIncrement = () => {
    setCounter((current: number) => current + 1);
  };

  return (
    <div className={classes.root}>
      {counter}
      <button onClick={nadleIncrement}>Increment</button>
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
            <Grid container xs={12} xl={12} className={classes.paperFGrid}>
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
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={
                  width < 960
                    ? classes.paperForm
                    : classNames(classes.paperForm, classes.inputBetweenRight)
                }
              >
                <TextField
                  id="outlined-full-width"
                  label="Link da sua foto"
                  name="link"
                  className={classes.textfield}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={
                  width < 960
                    ? classes.paperForm
                    : classNames(classes.paperForm, classes.inputBetweenLeft)
                }
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
                  onChange={handleInputChange}
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
                  value={formData.bio}
                  variant="outlined"
                  helperText={`${bioLengthTotal - bioLength} restantes`}
                  onChange={handleInputBioChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                justify="space-between"
                className={classes.paperTitle}
              >
                <span className={classes.titleForm}>Horários disponíveis</span>
                <a href="#" className={classes.a} onClick={handleAAtag}>
                  <span className={classes.newH}>
                    <img src={plus} alt="" /> Novo horário
                  </span>
                </a>
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
              {horarios.map((item: Horario, idx) => (
                <Grid key={idx} container xs={12} xl={12}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    className={
                      width < 960
                        ? classes.paperForm
                        : classNames(
                            classes.paperForm,
                            classes.inputBetweenRight,
                          )
                    }
                  >
                    <FormControl
                      variant="outlined"
                      className={classNames(
                        classes.selectPadding,
                        classes.formControl,
                      )}
                    >
                      <InputLabel id="demo-simple-select-outlined-label" shrink>
                        Dia da semana
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={handleChange}
                        value={horarios[idx].dia}
                        label="Age"
                        className={classes.select}
                        name={`${idx}-dia`}
                        input={
                          <OutlinedInput
                            notched
                            labelWidth={110}
                            name="age"
                            id="outlined-age-always-notched"
                          />
                        }
                      >
                        {dias.map((dia: string) => (
                          <MenuItem value={dia}>{dia}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    lg={3}
                    xl={3}
                    className={
                      width < 960
                        ? classes.paperForm
                        : classNames(
                            classes.paperForm,
                            classes.inputBetweenLeft,
                            classes.inputBetweenRight,
                          )
                    }
                  >
                    <TextField
                      id="outlined-full-width"
                      label="Das"
                      name={`${idx}-horaInicio`}
                      value={horarios[idx].horaInicio}
                      className={classes.textfield}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    lg={3}
                    xl={3}
                    className={
                      width < 960
                        ? classes.paperForm
                        : classNames(
                            classes.paperForm,
                            classes.inputBetweenLeft,
                          )
                    }
                  >
                    <TextField
                      id="outlined-full-width"
                      label="Até"
                      name={`${idx}-horaFim`}
                      value={horarios[idx].horaFim}
                      className={classes.textfield}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid container xs={12} xl={12} className={classes.paperFooter}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.paperDividerFooter}
              >
                <Divider />
              </Grid>
              <Grid
                item
                alignContent="center"
                alignItems="center"
                justify="center"
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.gridFlex}
              >
                <div className={classes.divFooter}>
                  <img
                    src={caution}
                    alt="Cuidado"
                    className={classes.imgFooter}
                  />
                  <span className={classes.textFooter}>
                    Importante! <br />
                    Preencha todos os dados
                  </span>
                </div>
              </Grid>
              <Grid
                alignContent="center"
                alignItems="center"
                justify="center"
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.gridFlex}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.registerButton}
                >
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewProfyPage;
