import { useHistory } from 'react-router-dom';
import React from 'react';

import { COMPANIES } from 'routes/constants';
import { Form as FormDefault } from 'components';
import Form from './Form';

function Search () {
  const history = useHistory();

  const handleSubmit = (values) => {
    history.push({
      pathname: COMPANIES,
      search: new URLSearchParams(values).toString(),
    });
  };

  return (
    <FormDefault
      onSubmit={handleSubmit}
      render={Form}
      validate={() => {}}
    />
  );
}

export default Search;
