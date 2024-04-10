import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Box,
} from '@material-ui/core';

import Label from 'components/Label';

function CompanyCaption (props) {
  const { area, size } = props;

  return (
    <Grid
      color="text.secondary"
      component={Box}
      spacing={3}
      container
    >
      <Grid item>
        <Label
          iconName="place"
          text={area}
        />
      </Grid>
      <Grid item>
        <Label
          iconName="people"
          text={size}
        />
      </Grid>
      <Grid item>
        <Label
          iconName="access_time"
          text="2 days ago"
        />
      </Grid>
    </Grid>
  );
}

CompanyCaption.propTypes = {
  area: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CompanyCaption.defaultProps = {
  area: 'Не указано',
  size: 'Не указано',
};

export default CompanyCaption;
