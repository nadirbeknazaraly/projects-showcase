import React from 'react';
import {
  Container,
  Grid,
  Box,
  Card,
  CardHeader,
  Typography,
  Divider,
  CardContent,
} from '@material-ui/core';

import Form from './Form';

function Review () {
  return (
    <Container>
      <Grid
        component={Box}
        justifyContent="center"
        py={6}
        spacing={3}
        container
      >
        <Grid
          md={6}
          xs={12}
          item
        >
          <Card>
            <CardHeader
              title={(
                <Typography variant="h6">Компания </Typography>
              )}
            />
            <Divider />
            <Form />
          </Card>
        </Grid>
        <Grid
          md={3}
          xs={12}
          item
        >
          <Card>
            <CardContent>
              <Typography
                component="div"
                paragraph
              >
                <Box fontWeight={500}>
                  Что о нас говорят
                </Box>
              </Typography>
              <Typography
                variant="body2"
                paragraph
              >
                There is no other site like Glassdoor. The reviews and salaries are
                invaluable to anyone looking to accelerate their career. - Rich M.
              </Typography>
              <Typography variant="body2">
                Glassdoor has helped me negotiate my salary
                and make sure I&apos;m getting paid fairly. – Bijal A.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Review;
