import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundImage: 'url(http://www.vasterad.com/themes/hireo/images/home-background.jpg)',

    '&:before': {
      top: 0,
      left: 0,
      width: '100%',
      content: '""',
      height: '100%',
      position: 'absolute',
      background: `
        linear-gradient(
          to right,
          rgba(250, 250, 250, 1) 20%,
          rgba(250, 250, 250, 0.95) 50%,
          rgba(250, 250, 250, 0.1) 80%,
          rgba(250, 250, 250, 0) 100%
        )
      `,
      zIndex: theme.zIndex.overlay,
    },
  },
}));
