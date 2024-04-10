import { Form as FormDefault } from 'react-final-form';
import React from 'react';
import PropTypes from 'prop-types';

function Form (props) {
  const {
    initialValues,
    mutators,
    onSubmit: handleSubmit,
    render: Component,
    validate,
  } = props;

  return (
    <FormDefault
      initialValues={initialValues}
      mutators={mutators}
      onSubmit={handleSubmit}
      render={({
        handleSubmit: handleInnerSubmit,
        form,
        submitError,
        values,
      }) => (
        <form onSubmit={handleInnerSubmit}>
          <Component
            form={form}
            submitError={submitError}
            values={values}
          />
        </form>
      )}
      validate={validate}
    />
  );
}

Form.propTypes = {
  initialValues: PropTypes.oneOfType([PropTypes.object]),
  mutators: PropTypes.oneOfType([PropTypes.object]),
  onSubmit: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
};

Form.defaultProps = {
  initialValues: {},
  mutators: {},
};

export default Form;
