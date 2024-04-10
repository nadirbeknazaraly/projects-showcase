import { useHistory } from 'react-router-dom';
import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import {
  COMPANIES,
  REVIEW,
} from 'routes/constants';
import { Company } from 'mutations';
import { Form as FormDefault } from 'components';
import { createBody } from './helpers';
import Content from './Content';

function Form () {
  const history = useHistory();
  const [createCompany] = useMutation(Company.CreateCompany, {
    onCompleted: (data) => {
      const { createCompany: response } = data;

      history.push(`${COMPANIES}/${response.id}`);
    },
  });

  const handleValue = (args, state, utils) => {
    const [field, value] = args;
    const { changeValue } = utils;

    changeValue(state, field, () => value);
  };

  const handleSubmit = async (values) => {
    if (values.create) {
      const body = createBody(values);

      createCompany({ variables: { company: body } });
    }

    if (!values.create) {
      const { suggestedID } = values;

      history.push(`${REVIEW}/${suggestedID}`);
    }
  };

  return (
    <FormDefault
      mutators={{ setValue: handleValue }}
      onSubmit={handleSubmit}
      render={Content}
      validate={() => {}}
    />
  );
}

export default Form;
