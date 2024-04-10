import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    backgroundColor: '#FFFFFF',
    color: theme.palette.text.primary,
    boxShadow: `
      0 0 ${theme.typography.pxToRem(18)} 0 rgba(0, 0, 0, .12)
    `,
  },
  avatar: {
    width: 32,
    height: 32,
  },
}));
