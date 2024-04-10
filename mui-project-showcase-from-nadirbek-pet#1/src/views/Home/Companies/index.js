import { v1 as uuid } from 'uuid';
import { Link as Router } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Box,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
} from '@material-ui/core';

import { COMPANIES } from 'routes/constants';
import { Company } from 'components';
import useStyles from './styles';

function Companies (props) {
  const { companies } = props;
  const styles = useStyles();

  const toRenderDivider = (group, index) => group.length - 1 !== index;

  return (
    <Grid
      component={Box}
      direction="column"
      py={6}
      spacing={3}
      container
    >
      <Grid
        container
        item
      >
        <Grid
          alignItems="center"
          justify="space-between"
          container
          item
        >
          <Grid item>
            <Typography variant="h6">
              Новое на сайте
            </Typography>
          </Grid>
          <Grid item>
            <Button
              component={Router}
              to={COMPANIES}
            >
              Все компании
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
      >
        <Grid
          className={styles.grid}
          direction="row"
          spacing={3}
          container
          item
        >
          {
            companies.map((companyGroup) => (
              <Grid
                key={uuid()}
                md={6}
                xs={12}
                item
              >
                <Paper>
                  <List>
                    {
                      companyGroup.map((company, index) => (
                        <ListItem
                          divider={toRenderDivider(companyGroup, index)}
                          key={company.id}
                          disableGutters
                        >
                          <Company company={company} />
                        </ListItem>
                      ))
                    }
                  </List>
                </Paper>
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  );
}

Companies.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.object),
  ).isRequired,
};

export default Companies;
