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
  CardActions,
} from '@material-ui/core';

import { ButtonAsync } from 'components';

function Form (props) {
  const { submitError } = props;

  return (
    <Card>
      <CardHeader
        title={(
          <Typography variant="h6">Восстановление пароля</Typography>
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
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Пожалуйста, укажите email, который Вы использовали для входа на сайт.
            </Typography>
          </Grid>
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
          {
            submitError && (
              <Grid item>
                <FormHelperText error>
                  { submitError }
                </FormHelperText>
              </Grid>
            )
          }
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        <ButtonAsync
          color="primary"
          type="submit"
          variant="contained"
        >
          Отправить сообщение
        </ButtonAsync>
      </CardActions>
    </Card>
  );
}

Form.propTypes = { submitError: PropTypes.arrayOf(PropTypes.string) };

Form.defaultProps = { submitError: undefined };

export default Form;
