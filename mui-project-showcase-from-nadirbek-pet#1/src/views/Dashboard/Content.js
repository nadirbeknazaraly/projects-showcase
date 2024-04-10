import React from 'react';
import {
  Grid,
  Card,
  CardHeader,
  Typography,
  Divider,
  CardContent,
} from '@material-ui/core';

function Content () {
  return (
    <Grid
      direction="column"
      spacing={3}
      container
      item
    >
      <Grid item>
        <Card>
          <CardHeader
            title={(
              <Typography variant="h6">Настройки</Typography>
            )}
          />
          <Divider />
          <CardContent>
            <Typography>Dynamic forms</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Content;
