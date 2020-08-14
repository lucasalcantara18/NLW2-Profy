import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    flexGrow: 1,
    overflowX: 'hidden',
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
    paddingBottom: '100px',
  },
  paperRoot: {
    width: '68%',
    background: '#FFFFFF',
    border: '1px solid #E6E6F0',
    boxSizing: 'border-box',
    borderRadius: '8px',
    position: 'absolute',
    top: '-50px',
    left: '15%',
  },
  paperGrid: {
    position: 'relative',
  },
  paperTitle: {
    display: 'flex',
    paddingTop: '42px',
    paddingLeft: '64px',
    paddingRight: '64px',
  },
  paperDivider: {
    display: 'block',
    paddingLeft: '64px',
    paddingRight: '64px',
  },
  paperForm: {
    display: 'flex',
    paddingLeft: '64px',
    paddingRight: '64px',
  },
  titleForm: {
    fontFamily: 'Archivo',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '34px',
    color: '#32264D',
  },
  textfield: {
    marginTop: '40px',
    background: '#FAFAFC',
  },
}));

export default useStyles;
