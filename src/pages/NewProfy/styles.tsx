import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    flexGrow: 1,
    background: '#E5E5E5',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: 'Archivo',
    fontWeight: 500,
    fontStyle: 'normal',
    color: '#A380F6',
    fontSize: '16px',
    lineHeight: '17px',
    textAlign: 'center',
  },
  gridTextWel: {
    display: 'flex',
    paddingTop: '45px',
    paddingBottom: '20px',
  },
  textWel: {
    fontFamily: 'Archivo',
    fontWeight: 700,
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontSize: '36px',
    lineHeight: '42px',
    textAlign: 'left',
  },
  textNext: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '26px',
    color: '#D4C2FF',
  },
  textPrepare: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    color: '#D4C2FF',
  },
  empty: (props: any) => ({
    display: props.display,
    visibility: props.visibility,
    width: '205px',
    height: '0',
  }),
  emojiPosition: {
    paddingRight: '10px',
  },
  nav: {
    background: '#774DD6',
  },
  tollbar: {
    justifyContent: 'space-around',
  },
  rootGridBotton: {
    background: '#8257E5',
  },
}));

export default useStyles;
