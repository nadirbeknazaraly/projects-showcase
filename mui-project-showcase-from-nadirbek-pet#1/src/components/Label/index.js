import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Icon,
} from '@material-ui/core';

function Label (props) {
  const { iconName, text } = props;

  return (
    <Box
      alignItems="center"
      color="text.secondary"
      component={Typography}
      display="flex"
    >
      <Icon fontSize="inherit">{ iconName }</Icon>
      <Box
        component="span"
        ml={1}
      >
        { text }
      </Box>
    </Box>
  );
}

Label.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Label;
