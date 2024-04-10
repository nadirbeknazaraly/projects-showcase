import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  Box,
  Typography,
  Icon,
} from '@material-ui/core';

import { handleDate } from 'helpers';
import { Label } from 'components';
import useStyles from './styles';

function Vacancy (props) {
  const { vacancy } = props;
  const styles = useStyles();

  const renderSalary = () => {
    const {
      to,
      from,
      currency,
    } = vacancy.salary || {};

    if (to) {
      return `до ${to.toLocaleString()} ${currency}`;
    }

    if (from) {
      return `от ${from.toLocaleString()} ${currency}`;
    }

    return 'Не указано';
  };

  return (
    <Button
      className={styles.root}
      component="a"
      href={vacancy.alternate_url}
      target="_blank"
      fullWidth
    >
      <Grid
        alignItems="center"
        justify="space-between"
        spacing={3}
        container
      >
        <Grid item>
          <Box mb={1}>
            <Typography color="textPrimary">
              { vacancy.name }
            </Typography>
          </Box>
          <Grid
            spacing={3}
            container
          >
            <Grid item>
              <Label
                iconName="access_time"
                text={handleDate(vacancy.published_at)}
              />
            </Grid>
            <Grid item>
              <Label
                iconName="place"
                text={vacancy.area.name}
              />
            </Grid>
            {
              vacancy.address?.metro && (
                <Grid item>
                  <Label
                    iconName="directions_subway"
                    text={vacancy.address.metro.station_name}
                  />
                </Grid>
              )
            }
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            alignItems="center"
            spacing={3}
            container
          >
            <Grid item>
              <Typography component="div">
                <Box fontWeight={500}>
                  { renderSalary() }
                </Box>
              </Typography>
            </Grid>
            <Grid
              component={Box}
              display="flex"
              item
            >
              <Icon fontSize="inherit">keyboard_arrow_right</Icon>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Button>
  );
}

Vacancy.propTypes = { vacancy: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Vacancy;
