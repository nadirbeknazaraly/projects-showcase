import validate from 'validate.js';
import { Link as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Link,
} from '@material-ui/core';
import { useApolloClient } from '@apollo/react-hooks';

import { REGISTER } from 'routes/constants';
import { setToken } from 'redux/actions/Me';
import { User } from 'queries';
import { withUnauthorized } from 'hocs';
import { handleApolloError } from 'helpers';
import {
  Banner,
  Form as FormDefault,
} from 'components';
import scheme from './scheme';
import Form from './Form';

function Login () {
  const client = useApolloClient();
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    try {
      const response = await client.query({
        query: User.Login,
        variables: values,
      });
      const { login: { token } } = response.data;

      dispatch(setToken(token));
    } catch (error) {
      return handleApolloError(error);
    }

    return undefined;
  };

  const handleValidation = (values) => validate(values, scheme);

  return (
    <>
      <Banner py={7}>
        <Container>
          <Typography
            component="div"
            variant="h5"
          >
            <Box fontWeight={500}>
              Рады видеть вас снова
            </Box>
          </Typography>
          <Typography
            component="div"
            variant="h5"
          >
            <Box fontWeight={300}>
              Впервые у наc?&nbsp;
              <Link
                color="primary"
                component={Router}
                to={REGISTER}
              >
                Зарегистрируйтесь
              </Link>
            </Box>
          </Typography>
        </Container>
      </Banner>
      <Container maxWidth="xs">
        <Box py={6}>
          <FormDefault
            onSubmit={handleLogin}
            render={Form}
            validate={handleValidation}
          />
        </Box>
      </Container>
    </>
  );
}

export default withUnauthorized(Login);
