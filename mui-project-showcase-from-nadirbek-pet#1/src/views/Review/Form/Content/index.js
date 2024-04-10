import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'mui-rff';
import {
  LinearProgress,
  CardContent,
  Grid,
  Typography,
  Box,
  Divider,
  CardActions,
  Button,
} from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';

import { Company } from 'queries';
import { handleSkip } from 'helpers';
import Suggestions from './Suggestions';
import { DEFAULT_CREATE } from './constants';
import Autocomplete from './Autocomplete';

function Content (props) {
  const { form } = props;
  const { mutators: { setValue } } = form;
  const [company, setCompany] = useState(null);
  const { loading, data } = useQuery(Company.SuggestCompanies, {
    variables: {
      name: company?.companyName,
      hhSourceID: company?.companyID,
    },
    skip: handleSkip(company?.companyName),
  });
  const { suggestCompanies = [] } = data || {};
  const [create, setCreate] = useState(DEFAULT_CREATE);
  const [suggestedID, setSuggestedID] = useState();
  const disabled = (
    !company?.companyName
    || (
      company?.companyName
      && !!suggestCompanies.length
      && !suggestedID
      && !create
    )
  );

  useEffect(() => {
    setValue('company', company);
  }, [setValue, company]);

  useEffect(() => {
    if (!loading) {
      const response = (
        company?.companyName
        && !suggestCompanies.length
      );

      setCreate(response);
    }
  }, [loading, company, suggestCompanies]);

  useEffect(() => {
    setValue('create', create);
  }, [setValue, create]);

  useEffect(() => {
    setValue('suggestedID', suggestedID);
  }, [setValue, suggestedID]);

  const handleCreate = () => { setCreate(!DEFAULT_CREATE); };

  const handleSelect = (id) => { setSuggestedID(id); };

  return (
    <>
      { loading && <LinearProgress /> }
      <CardContent>
        <Grid
          direction="column"
          spacing={3}
          container
        >
          <Grid item>
            <Autocomplete onChange={setCompany} />
          </Grid>
          {
            (!!suggestCompanies.length && !create) && (
              <Grid item>
                <Suggestions
                  companies={suggestCompanies}
                  onCreate={handleCreate}
                  onSelect={handleSelect}
                />
              </Grid>
            )
          }
          {
            create && (
              <Grid item>
                <Typography
                  component="div"
                  paragraph
                >
                  <Box fontWeight={500}>
                    Дополнительная информация
                  </Box>
                </Typography>
                <Grid
                  direction="column"
                  spacing={3}
                  container
                >
                  <Grid item>
                    <TextField
                      name="name"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      name="name"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
            )
          }
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          disabled={disabled}
          type="submit"
          variant="contained"
        >
          Продолжить
        </Button>
      </CardActions>
    </>
  );
}

Content.propTypes = { form: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Content;
