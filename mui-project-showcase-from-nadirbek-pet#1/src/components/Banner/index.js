import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

import useStyles from './styles';

function Banner (props) {
  const { py, children } = props;
  const styles = useStyles();

  return (
    <Box
      className={styles.root}
      component="div"
      py={py}
    >
      <Box
        position="relative"
        zIndex="overlayedContent"
      >
        { children }
      </Box>
    </Box>
  );
}

Banner.propTypes = {
  py: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Banner.defaultProps = { py: 14 };

export default Banner;
