import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Tabs,
  Tab,
  Divider,
  Typography,
} from '@material-ui/core';

import { TabPanel } from 'components';
import Vacancies from './Vacancies';
import {
  TABS,
  TAB_OVERVIEW,
  TAB_REVIEWS,
  TAB_VACANCIES,
} from './constants';

function Content (props) {
  const { company } = props;
  const [defaultTab] = TABS;
  const [activeTab, setActiveTab] = useState(defaultTab);
  const tabs = TABS.filter((tab) => {
    if (tab === TAB_VACANCIES) {
      return !!company.hhSource?.id;
    }

    return !!tab;
  });

  const handleSetActiveTab = (event, tab) => setActiveTab(tab);

  return (
    <Paper>
      <Tabs
        indicatorColor="primary"
        onChange={handleSetActiveTab}
        textColor="primary"
        value={activeTab}
      >
        {
          tabs.map((tab) => (
            <Tab
              key={tab}
              label={tab}
              value={tab}
            />
          ))
        }
      </Tabs>
      <Divider />
      <TabPanel
        activeTab={activeTab}
        value={TAB_OVERVIEW}
      >
        <Typography>
          { company.description || company.hhSource?.description }
        </Typography>
      </TabPanel>
      <TabPanel
        activeTab={activeTab}
        value={TAB_REVIEWS}
      >
        <Typography paragraph>
          A Dialog is a type of modal window that appears in front of app content to provide
          critical information or ask for a decision. Dialogs disable all app functionality
          when they appear, and remain on screen until confirmed, dismissed, or a required
          action has been taken.
        </Typography>
        <Typography>
          Dialogs are purposefully interruptive, so they should be used sparingly.
        </Typography>
      </TabPanel>
      <TabPanel
        activeTab={activeTab}
        value={TAB_VACANCIES}
        disablePadding
      >
        <Vacancies hhSourceID={company.hhSource?.id} />
      </TabPanel>
    </Paper>
  );
}

Content.propTypes = { company: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Content;
