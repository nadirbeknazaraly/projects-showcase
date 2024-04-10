import { useLocation } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';
import Header from './Header';
import Footer from './Footer';

function Common (props) {
  const { route: { routes } } = props;
  const styles = useStyles();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        { renderRoutes(routes) }
      </main>
      <Footer />
    </>
  );
}

Common.propTypes = { route: PropTypes.shape({ routes: PropTypes.array }).isRequired };

export default Common;
