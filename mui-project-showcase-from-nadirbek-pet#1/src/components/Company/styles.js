import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    borderRadius: 0,
    textAlign: 'left',
    fontWeight: 'normal',
    textTransform: 'none',
    padding: theme.spacing(3),
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  logo: { backgroundColor: 'transparent' },
  small: {
    width: 35,
    height: 35,
  },
}));
