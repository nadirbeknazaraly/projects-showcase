import { Link as Router } from 'react-router-dom';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Link,
  IconButton,
  Avatar,
  Button,
} from '@material-ui/core';

import {
  HOME,
  LOGIN,
} from 'routes/constants';
import { removeToken } from 'redux/actions/Me';
import useStyles from './styles';

function Header () {
  const styles = useStyles();
  const token = useSelector((state) => state.me.token);
  const dispatch = useDispatch();

  return (
    <AppBar
      className={styles.header}
      component="header"
      position="relative"
    >
      <Toolbar
        component={Box}
        justifyContent="space-between"
      >
        <Typography variant="h6">
          <Link
            color="inherit"
            component={Router}
            to={HOME}
            underline="none"
          >
            Logotype
          </Link>
        </Typography>
        {
          token ? (
            <IconButton
              edge="end"
              onClick={() => dispatch(removeToken())}
            >
              <Avatar className={styles.avatar} />
            </IconButton>
          ) : (
            <Button
              component={Router}
              to={LOGIN}
              variant="contained"
            >
              Войти в аккаунт
            </Button>
          )
        }
      </Toolbar>
    </AppBar>
  );
}

export default Header;
