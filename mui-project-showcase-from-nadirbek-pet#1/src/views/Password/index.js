import validate from 'validate.js';
import React from 'react';
import {
  Container,
  Box,
} from '@material-ui/core';

import { Form as FormDefault } from 'components';
import scheme from './scheme';
import Form from './Form';

function Password () {
  const handlePassword = () => {};

  const handleValidation = (values) => validate(values, scheme);

  return (
    <>
      <Container maxWidth="xs">
        <Box py={6}>
          <FormDefault
            onSubmit={handlePassword}
            render={Form}
            validate={handleValidation}
          />
        </Box>
      </Container>
    </>
  );
}

export default Password;
