import { Link as Router } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Button,
  Grid,
  Paper,
  Avatar,
  Icon,
  Typography,
} from '@material-ui/core';

import { COMPANIES } from 'routes/constants';
import CompanyCaption from 'components/CompanyCaption';
import useStyles from './styles';

function Company (props) {
  const {
    company,
    disabled,
    className,
    small,
  } = props;
  const styles = useStyles();
  const { logoURLs, area } = company;

  return (
    <Button
      className={clsx(styles.root, className)}
      component={Router}
      disabled={disabled}
      to={`${COMPANIES}/${company.id}`}
      fullWidth
    >
      <Grid
        alignItems="center"
        spacing={3}
        container
      >
        <Grid item>
          <Paper>
            <Avatar
              className={
                clsx(styles.avatar, {
                  [styles.logo]: !!logoURLs,
                  [styles.small]: small,
                })
              }
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
                  <Icon fontSize="small">domain</Icon>
                )
              }
            </Avatar>
          </Paper>
        </Grid>
        <Grid item>
          <Typography color="textPrimary">
            { company.name }
          </Typography>
          <CompanyCaption
            area={area?.name}
            peopleCount={company.size}
          />
        </Grid>
      </Grid>
    </Button>
  );
}

Company.propTypes = {
  company: PropTypes.oneOfType([PropTypes.object]).isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  small: PropTypes.bool,
};

Company.defaultProps = {
  disabled: false,
  className: '',
  small: false,
};

export default Company;
