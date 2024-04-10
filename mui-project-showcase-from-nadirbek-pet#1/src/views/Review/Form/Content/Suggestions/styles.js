import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    maxHeight: 300,
    borderWidth: 1,
    borderRadius: 4,
    overflowY: 'auto',
    borderStyle: 'solid',
    borderColor: theme.palette.action.disabled,
  },
  startIcon: {
    margin: 0,
    marginLeft: theme.spacing(2) - 1,
  },
  companyWrapper: { padding: 0 },
  company: { paddingLeft: theme.spacing(2) },
  button: {
    display: 'flex',
    textAlign: 'left',
    textTransform: 'none',
    padding: theme.spacing(3),
    justifyContent: 'flex-start',
  },
}));
