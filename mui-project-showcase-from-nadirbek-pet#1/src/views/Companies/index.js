import React from 'react';
import {
  LinearProgress,
  Container,
  Grid,
  Box,
  Paper,
  List,
  ListItem,
} from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';

import { Company as Query } from 'queries';
import { useURLQuery } from 'hooks';
import {
  Company,
  Empty,
} from 'components';
import Filters from './Filters';

function Companies () {
  const query = useURLQuery();
  const { loading, data } = useQuery(Query.Companies, { variables: { filter: query } });
  const { companies = [] } = data || {};

  const toRenderDivider = (index) => companies.length - 1 !== index;

  return (
    <>
      {
        loading && <LinearProgress />
      }
      <Container>
        <Grid
          component={Box}
          py={6}
          spacing={3}
          container
        >
          <Grid
            md={3}
            xs={12}
            item
          >
            <Filters />
          </Grid>
          <Grid
            md={9}
            xs={12}
            item
          >
            <Paper>
              <List>
                {
                  companies.map((company, index) => (
                    <ListItem
                      divider={toRenderDivider(index)}
                      key={company.id}
                      disableGutters
                    >
                      <Company company={company} />
                    </ListItem>
                  ))
                }
                {
                  !companies.length && <Empty />
                }
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Companies;
