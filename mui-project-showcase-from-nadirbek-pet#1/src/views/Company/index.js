import {
  Link as Router,
  useParams,
} from 'react-router-dom';
import React from 'react';
import clsx from 'clsx';
import {
  LinearProgress,
  Container,
  Grid,
  Paper,
  Avatar,
  Icon,
  Typography,
  Button,
  Box,
} from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';

import { REVIEW } from 'routes/constants';
import { Company as Query } from 'queries';
import {
  Banner,
  CompanyCaption,
} from 'components';
import useStyles from './styles';
import Sidebar from './Sidebar';
import Content from './Content';

function Company () {
  const styles = useStyles();
  const { id } = useParams();
  const { loading, data } = useQuery(Query.Company, { variables: { id } });
  const { company = {} } = data || {};
  const { logoURLs, area } = company;

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <>
      <Banner py={7}>
        <Container>
          <Grid
            alignItems="center"
            justify="space-between"
            spacing={3}
            container
          >
            <Grid
              md={9}
              xs={12}
              container
              item
            >
              <Grid
                alignItems="center"
                spacing={3}
                container
                item
              >
                <Grid item>
                  <Paper>
                    <Avatar
                      className={clsx(styles.avatar, { [styles.transparent]: !!logoURLs })}
                      variant="rounded"
                    >
                      {
                        logoURLs ? (
                          <img
                            alt={company.name}
                            src={logoURLs.large}
                            width="100%"
                          />
                        ) : (
                          <Icon fontSize="large">domain</Icon>
                        )
                      }
                    </Avatar>
                  </Paper>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    paragraph
                  >
                    { company.name }
                  </Typography>
                  <CompanyCaption
                    area={area?.name}
                    peopleCount={company.size}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              md={3}
              xs={12}
              item
            >
              <Button
                component={Router}
                to={REVIEW}
                variant="contained"
                fullWidth
              >
                Review this company
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Banner>
      <Container>
        <Grid
          component={Box}
          py={6}
          spacing={3}
          container
        >
          <Grid
            md={8}
            xs={12}
            item
          >
            <Content company={company} />
          </Grid>
          <Grid
            md={4}
            xs={12}
            item
          >
            <Sidebar company={company} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Company;
