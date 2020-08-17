import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    flexGrow: 1,
    background: '#E5E5E5',
    overflowX: 'hidden',
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
    paddingBottom: '100px',
  },
  paperRoot: {
    width: '68%',
    background: '#FFFFFF',
    border: '1px solid #E6E6F0',
    marginBottom: '150px',
    boxSizing: 'border-box',
    borderRadius: '8px',
    position: 'absolute',
    top: '-50px',
    left: '15%',
  },
  paperGrid: {
    position: 'relative',
  },
  paperFGrid: {
    paddingLeft: '64px',
    paddingRight: '64px',
  },
  inputBetweenLeft: {
    paddingLeft: '15px',
  },
  inputBetweenRight: {
    paddingRight: '15px',
  },
  paperTitle: {
    display: 'flex',
    paddingTop: '42px',
  },
  paperDivider: {
    display: 'block',
  },
  paperDividerFooter: {
    display: 'block',
    paddingBottom: '40px',
  },
  paperForm: {
    display: 'flex',
  },
  gridFlex: {
    display: 'flex',
  },
  paperFooter: {
    background: '#FAFAFC',
    marginTop: '64px',
    borderRadius: '8px',
    paddingBottom: '40px',
  },
  divFooter: {
    display: 'flex',
    justifyContent: 'center',
  },
  imgFooter: {
    paddingRight: '6px',
  },
  textFooter: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    color: '#A0A0B3',
  },
  titleForm: {
    fontFamily: 'Archivo',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '34px',
    color: '#32264D',
  },
  newH: {
    fontFamily: 'Archivo',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '26px',
    color: '#8257E5',
    paddingTop: '5px',
  },
  a: {
    textDecoration: 'none',
  },
  textfield: {
    marginTop: '40px',
    background: '#FAFAFC',
  },
  select: {
    background: '#FAFAFC',
  },
  selectPadding: {
    marginTop: '40px !important',
    marginRight: '0 !important',
    marginLeft: '0 !important',
    marginBottom: '0 !important',
    flexGrow: 1,
  },
  registerButton: {
    fontFamily: 'Poppins',
    fontSize: 24,
    color: 'white',
    fontWeight: 600,
    height: '56px',
    width: '197px',
    background: '#04D361',
    '&:hover': {
      background: '#35DD53',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default useStyles;
