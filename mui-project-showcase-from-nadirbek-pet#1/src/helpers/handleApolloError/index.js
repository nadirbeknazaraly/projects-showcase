import { FORM_ERROR } from 'final-form';

export default (error) => {
  const { graphQLErrors } = error;
  const errors = graphQLErrors.map(({ message }) => message);

  return ({ [FORM_ERROR]: errors });
};
