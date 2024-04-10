import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  CircularProgress,
  List,
  ListItem,
} from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';

import { Company } from 'queries';
import { Empty } from 'components';
import Vacancy from './Vacancy';

function Vacancies (props) {
  const { hhSourceID } = props;
  const { loading, data } = useQuery(Company.HHVacancies, { variables: { id: hhSourceID } });
  const { HHVacancies = [] } = data || {};

  const toRenderDivider = (index) => HHVacancies.length - 1 !== index;

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        paddingY={6}
      >
        <CircularProgress size={24} />
      </Box>
    );
  }

  if (!loading && !HHVacancies.length) {
    return (
      <Empty />
    );
  }

  return (
    <List>
      {
        HHVacancies.map((vacancy, index) => (
          <ListItem
            divider={toRenderDivider(index)}
            key={vacancy.id}
            disableGutters
          >
            <Vacancy vacancy={vacancy} />
          </ListItem>
        ))
      }
    </List>
  );
}

Vacancies.propTypes = { hhSourceID: PropTypes.string };

Vacancies.defaultProps = { hhSourceID: null };

export default Vacancies;
