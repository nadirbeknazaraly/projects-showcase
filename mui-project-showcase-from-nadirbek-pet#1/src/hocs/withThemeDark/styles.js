import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    display: 'flex',
    width: 'inherit',
    color: (props) => props.palette.text.primary,
    backgroundColor: (props) => props.palette.background.default,
  },
});
