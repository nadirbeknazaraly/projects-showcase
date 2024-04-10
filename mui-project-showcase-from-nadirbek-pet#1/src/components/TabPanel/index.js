import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

function TabPanel (props) {
  const {
    value,
    activeTab,
    children,
    disablePadding,
  } = props;

  return (
    <div>
      {
        value === activeTab && (
          <Box p={disablePadding ? 0 : 3}>
            { children }
          </Box>
        )
      }
    </div>
  );
}

TabPanel.propTypes = {
  value: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disablePadding: PropTypes.bool,
};

TabPanel.defaultProps = { disablePadding: false };

export default TabPanel;
