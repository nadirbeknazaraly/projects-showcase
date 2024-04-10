import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Select as SelectDefault,
  Checkboxes,
} from 'mui-rff';
import {
  Grid,
  Typography,
  Box,
  MenuItem,
} from '@material-ui/core';

import {
  useDebounce,
  useCities,
  useSizes,
} from 'hooks';
import { withIcon } from 'hocs';

const Input = withIcon(TextField);
const Select = withIcon(SelectDefault);

function Form (props) {
  const { values } = props;
  const debounce = useDebounce(values);
  const history = useHistory();
  const { cities } = useCities();
  const { sizes } = useSizes();

  useEffect(() => {
    history.push({ search: new URLSearchParams(debounce).toString() });
  }, [history, debounce]);

  return (
    <Grid
      direction="column"
      spacing={3}
      container
    >
      <Grid item>
        <Typography
          component="div"
          paragraph
        >
          <Box fontWeight={500}>
            Название компании
          </Box>
        </Typography>
        <Input
          icon="domain"
          InputProps={{ disableUnderline: true }}
          name="name"
          fullWidth
        />
      </Grid>
      <Grid item>
        <Typography
          component="div"
          paragraph
        >
          <Box fontWeight={500}>
            Местоположение
          </Box>
        </Typography>
        <Select
          icon="place"
          name="area"
          disableUnderline
          displayEmpty
          fullWidth
        >
          <MenuItem value="">Все</MenuItem>
          {
            cities.map((city) => (
              <MenuItem
                key={city.id}
                value={city.id}
              >
                { city.name }
              </MenuItem>
            ))
          }
        </Select>
      </Grid>
      <Grid item>
        <Typography
          component="div"
          paragraph
        >
          <Box fontWeight={500}>
            Размер компании
          </Box>
        </Typography>
        <Select
          icon="people"
          name="size"
          disableUnderline
          displayEmpty
          fullWidth
        >
          <MenuItem value="">Все</MenuItem>
          {
            sizes.map((size) => (
              <MenuItem
                key={size.value}
                value={size.value}
              >
                { size.name }
              </MenuItem>
            ))
          }
        </Select>
      </Grid>
      <Grid item>
        <Typography
          component="div"
          paragraph
        >
          <Box fontWeight={500}>
            Дополнительно
          </Box>
        </Typography>
        <Checkboxes
          color="primary"
          data={{
            label: 'С оценкой',
            value: true,
          }}
          name="rating"
        />
      </Grid>
    </Grid>
  );
}

Form.propTypes = { values: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Form;
