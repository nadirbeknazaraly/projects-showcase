import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';

function Empty () {
  return (
    <Box
      display="flex"
      justifyContent="center"
      paddingY={6}
    >
      <Typography
        color="textSecondary"
        variant="body2"
      >
        Ничего не найдено
      </Typography>
    </Box>
  );
}

export default Empty;
