import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import { themeDark } from 'theme';
import useStyles from './styles';

function withThemeDark (Component) {
  return () => {
    const styles = useStyles(themeDark);

    return (
      <ThemeProvider theme={themeDark}>
        <div className={styles.root}>
          <Component />
        </div>
      </ThemeProvider>
    );
  };
}

export default withThemeDark;
