import { renderRoutes } from 'react-router-config';
import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

function Error (props) {
  const { route: { routes } } = props;
  const styles = useStyles();

  return (
    <main className={styles.root}>
      { renderRoutes(routes) }
    </main>
  );
}

Error.propTypes = { route: PropTypes.shape({ routes: PropTypes.array }).isRequired };

export default Error;
