import React from 'react';
import { TextField } from 'mui-rff';
import { Button } from '@material-ui/core';

import { withIcon } from 'hocs';

const Input = withIcon(TextField);

function Form () {
  return (
    <Input
      button={(
        <Button
          type="submit"
          variant="contained"
        >
          Найти
        </Button>
      )}
      icon="domain"
      InputProps={{ disableUnderline: true }}
      name="name"
      placeholder="Название компании"
      fullWidth
    />
  );
}

export default Form;
