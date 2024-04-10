import {
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { ruRU } from '@material-ui/core/locale';

const defaultTheme = createMuiTheme();

const theme = {
  zIndex: {
    overlay: 500,
    overlayedContent: 600,
  },
  overrides: {
    MuiCardHeader: { root: { padding: defaultTheme.spacing(3) } },
    MuiCardContent: { root: { padding: defaultTheme.spacing(3) } },
    MuiCardActions: {
      root: {
        justifyContent: 'flex-end',
        padding: defaultTheme.spacing(3),
      },
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
    MuiTab: {
      wrapper: {
        textTransform: 'none',
        fontSize: defaultTheme.typography.pxToRem(16),
      },
    },
  },
  props: { MuiButton: { disableElevation: true } },
};

export const themeLight = responsiveFontSizes(
  createMuiTheme(theme, ruRU),
);

export const themeDark = responsiveFontSizes(
  createMuiTheme({
    ...theme,
    palette: { type: 'dark' },
  }, ruRU),
);

export default themeLight;
