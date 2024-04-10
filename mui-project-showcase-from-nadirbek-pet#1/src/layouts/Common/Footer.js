import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
} from '@material-ui/core';

import { withThemeDark } from 'hocs';

function Footer () {
  return (
    <Box
      component="div"
      width="100%"
    >
      <Container
        component={Box}
        py={6}
      >
        <Grid
          justify="space-between"
          spacing={6}
          container
        >
          {
            [0, 1, 2, 4, 5].map((item) => (
              <Grid
                key={item}
                item
              >
                <Typography
                  component="div"
                  paragraph
                >
                  <Box fontWeight={500}>
                    For candidates
                  </Box>
                </Typography>
                <Divider />
                <List>
                  <ListItem disableGutters>
                    <Typography variant="body2">
                      Browse jobs
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <Typography variant="body2">
                      Add resume
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <Typography variant="body2">
                      Job alerts
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
            ))
          }
        </Grid>
      </Container>
      <Divider />
      <Container
        component={Box}
        py={3}
      >
        <Typography
          align="center"
          component="div"
          variant="caption"
        >
          <Box color="text.disabled">
            © 2020 Logotype. All Rights Reserved.
          </Box>
        </Typography>
      </Container>
    </Box>
  );
}

export default withThemeDark(Footer);
