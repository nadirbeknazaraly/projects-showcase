import { FormSpy } from 'react-final-form';
import React from 'react';
import {
  Button,
  CircularProgress,
} from '@material-ui/core';

import useStyles from './styles';

function ButtonAsync (props) {
  const { ...other } = props;
  const styles = useStyles();

  return (
    <FormSpy subscription={{ submitting: true }}>
      {
        ({ submitting: isSubmitting }) => (
          <div className={styles.root}>
            <Button
              {...other}
              disabled={isSubmitting}
            />
            {
              isSubmitting && (
                <CircularProgress
                  className={styles.circularProgress}
                  size={16}
                />
              )
            }
          </div>
        )
      }
    </FormSpy>
  );
}

export default ButtonAsync;
