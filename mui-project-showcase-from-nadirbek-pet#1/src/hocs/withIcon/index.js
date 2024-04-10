import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Box,
  Grid,
  Icon,
} from '@material-ui/core';

function withIcon (Component) {
  const wrappedComponent = (props) => {
    const { icon, button } = props;

    return (
      <Paper>
        <Box p={2}>
          <Grid
            alignItems="center"
            spacing={2}
            container
          >
            {
              icon && (
                <Grid
                  component={Box}
                  display="flex"
                  item
                >
                  <Icon fontSize="small">
                    <Box color="text.secondary">
                      { icon }
                    </Box>
                  </Icon>
                </Grid>
              )
            }
            <Grid
              component={Box}
              overflow="hidden"
              item
              xs
            >
              <Component {...props} />
            </Grid>
            {
              button && (
                <Grid item>
                  { button }
                </Grid>
              )
            }
          </Grid>
        </Box>
      </Paper>
    );
  };

  wrappedComponent.propTypes = {
    icon: PropTypes.string,
    button: PropTypes.node,
  };

  wrappedComponent.defaultProps = {
    icon: null,
    button: null,
  };

  return wrappedComponent;
}

export default withIcon;
