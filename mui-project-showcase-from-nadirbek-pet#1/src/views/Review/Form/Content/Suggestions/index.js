import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  RadioGroup,
  List,
  ListItem,
  Button,
  Radio,
  Box,
  Typography,
} from '@material-ui/core';

import { Company } from 'components';
import useStyles from './styles';

function Suggestions (props) {
  const {
    companies,
    onCreate: handleCreate,
    onSelect: handleSelect,
  } = props;
  const styles = useStyles();
  const [companyID, setCompanyID] = useState('');

  useEffect(() => {
    if (companyID) {
      handleSelect(companyID);
    }
  }, [companyID, handleSelect]);

  const toRenderDivider = (index) => companies.length - 1 !== index;

  return (
    <Grid
      direction="column"
      spacing={3}
      container
    >
      <Grid item>
        <RadioGroup value={companyID}>
          <List
            className={styles.container}
            disablePadding
          >
            {
              companies.map((company, index) => (
                <ListItem
                  divider={toRenderDivider(index)}
                  key={company.id}
                  disableGutters
                >
                  <Button
                    classes={{ startIcon: styles.startIcon }}
                    className={styles.companyWrapper}
                    onClick={() => setCompanyID(company.id)}
                    startIcon={(
                      <Radio
                        color="primary"
                        value={company.id}
                      />
                    )}
                    fullWidth
                  >
                    <Company
                      className={styles.company}
                      company={company}
                      disabled
                      small
                    />
                  </Button>
                </ListItem>
              ))
            }
          </List>
        </RadioGroup>
      </Grid>
      <Grid item>
        <div className={styles.container}>
          <Button
            className={styles.button}
            onClick={handleCreate}
            fullWidth
          >
            <Box>
              <Typography component="div">
                <Box fontWeight={500}>
                  Не нашли нужной компании?
                </Box>
              </Typography>
              <Typography>
                Добавьте новую
              </Typography>
            </Box>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

Suggestions.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCreate: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Suggestions;
