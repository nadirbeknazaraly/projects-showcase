import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { HOME } from 'routes/constants';

function withUnauthorized (Component) {
  return () => {
    const token = useSelector((state) => state.me.token);
    const history = useHistory();

    useEffect(() => {
      if (token) {
        history.push(HOME);
      }
    }, [token, history]);

    return (
      <Component />
    );
  };
}

export default withUnauthorized;
