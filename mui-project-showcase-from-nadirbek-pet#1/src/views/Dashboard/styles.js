import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: { height: '100%' },
  grid: {
    backgroundColor: '#FFFFFF',
    boxShadow: `
      0 0 ${theme.typography.pxToRem(18)} 0 rgba(0, 0, 0, .06)
    `,
  },
}));
