import React from 'react';

import { useURLQuery } from 'hooks';
import { Form as FormDefault } from 'components';
import Form from './Form';

function Filters () {
  const query = useURLQuery();

  return (
    <FormDefault
      initialValues={query}
      onSubmit={() => {}}
      render={Form}
      validate={() => {}}
    />
  );
}

export default Filters;
