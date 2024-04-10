import { Link as Router } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'mui-rff';
import {
  Card,
  CardHeader,
  Typography,
  Divider,
  CardContent,
  Grid,
  InputAdornment,
  Icon,
  FormHelperText,
  Link,
  CardActions,
} from '@material-ui/core';

import { PASSWORD } from 'routes/constants';
import { ButtonAsync } from 'components';

function Form (props) {
  const { submitError } = props;

  return (
    <Card>
      <CardHeader
        title={(
          <Typography variant="h6">Аутентификация</Typography>
        )}
      />
      <Divider />
      <CardContent>
        <Grid
          direction="column"
          spacing={3}
          container
        >
          <Grid item>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon color="disabled">email</Icon>
                  </InputAdornment>
                ),
              }}
              name="email"
              placeholder="Адрес почты"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon color="disabled">lock</Icon>
                  </InputAdornment>
                ),
              }}
              name="password"
              placeholder="Пароль"
              type="password"
              variant="outlined"
              fullWidth
            />
          </Grid>
          {
            submitError && (
              <Grid item>
                <FormHelperText error>
                  { submitError }
                </FormHelperText>
              </Grid>
            )
          }
          <Grid item>
            <Link
              color="textSecondary"
              component={Router}
              to={PASSWORD}
              variant="body2"
            >
              Забыли пароль ?
            </Link>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        <ButtonAsync
          color="primary"
          type="submit"
          variant="contained"
        >
          Войти
        </ButtonAsync>
      </CardActions>
    </Card>
  );
}

Form.propTypes = { submitError: PropTypes.arrayOf(PropTypes.string) };

Form.defaultProps = { submitError: undefined };

export default Form;
