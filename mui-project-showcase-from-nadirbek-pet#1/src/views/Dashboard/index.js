import React from 'react';
import {
  Grid,
  Box,
} from '@material-ui/core';

import useStyles from './styles';
import Sidebar from './Sidebar';
import Content from './Content';

function Dashboard () {
  const styles = useStyles();

  return (
    <Grid
      className={styles.root}
      container
    >
      <Grid
        className={styles.grid}
        component={Box}
        md={3}
        py={6}
        xs={12}
        container
        item
      >
        <Sidebar />
      </Grid>
      <Grid
        component={Box}
        md={9}
        px={3}
        py={6}
        xs={12}
        container
        item
      >
        <Content />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
