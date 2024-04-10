import { Link as Router } from 'react-router-dom';
import React from 'react';
import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
} from '@material-ui/core';

import { DASHBOARD } from 'routes/constants';
import { Label } from 'components';

function Sidebar () {
  return (
    <Grid
      direction="column"
      spacing={3}
      container
      item
    >
      <Grid item>
        <Typography
          color="primary"
          component={Box}
          px={3}
        >
          <Box fontWeight={500}>
            Группа
          </Box>
        </Typography>
        <List>
          <ListItem
            component={Router}
            to={`${DASHBOARD}/settings`}
            disableGutters
          >
            <Box px={3}>
              <Label
                iconName="settings"
                text="Общее"
              />
            </Box>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export default Sidebar;
