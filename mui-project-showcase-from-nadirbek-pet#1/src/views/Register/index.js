import validate from 'validate.js';
import {
  Link as Router,
  useHistory,
} from 'react-router-dom';
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Link,
} from '@material-ui/core';
import { useApolloClient } from '@apollo/react-hooks';

import { LOGIN } from 'routes/constants';
import { User } from 'mutations';
import { withUnauthorized } from 'hocs';
import { handleApolloError } from 'helpers';
import {
  Banner,
  Form as FormDefault,
} from 'components';
import scheme from './scheme';
import Form from './Form';

function Register () {
  const client = useApolloClient();
  const history = useHistory();

  const handleRegister = async (values) => {
    try {
      await client.mutate({
        mutation: User.Register,
        variables: values,
      });

      history.push(LOGIN);
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
              Добро пожаловать!
            </Box>
          </Typography>
          <Typography
            component="div"
            variant="h5"
          >
            <Box fontWeight={300}>
              Уже были у нас?&nbsp;
              <Link
                color="primary"
                component={Router}
                to={LOGIN}
              >
                Войдите в систему
              </Link>
            </Box>
          </Typography>
        </Container>
      </Banner>
      <Container maxWidth="xs">
        <Box py={6}>
          <FormDefault
            onSubmit={handleRegister}
            render={Form}
            validate={handleValidation}
          />
        </Box>
      </Container>
    </>
  );
}

export default withUnauthorized(Register);
