import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Autocomplete as AutocompleteDefault } from '@material-ui/lab';
import {
  Typography,
  Box,
  TextField,
} from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';

import { Company } from 'queries';
import { useDebounce } from 'hooks';
import { handleSkip } from 'helpers';

function Autocomplete (props) {
  const { onChange: handleChange } = props;
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const debounce = useDebounce(inputValue);
  const { loading, data } = useQuery(Company.HHCompanies, {
    variables: { text: debounce },
    skip: handleSkip(debounce),
  });
  const { HHCompanies = [] } = data || {};
  const [companyName, setCompanyName] = useState(null);
  const [companyID, setCompanyID] = useState(null);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    setCompanyName(value?.name || null);
    setCompanyID(value?.id || null);
  }, [value]);

  useEffect(() => {
    setCompanyName(debounce || null);
    setCompanyID(null);
  }, [debounce]);

  useEffect(() => {
    setCompany({
      companyName,
      companyID,
    });
  }, [companyName, companyID]);

  useEffect(() => {
    handleChange(company);
  }, [handleChange, company]);

  const getOptionLabel = (option) => option.name;

  const renderInput = (input) => (
    <TextField
      {...input}
      onChange={(event) => setInputValue(event.target.value)}
      value={inputValue}
      variant="outlined"
      fullWidth
    />
  );

  return (
    <>
      <Typography
        component="div"
        paragraph
      >
        <Box fontWeight={500}>
          Название компании
        </Box>
      </Typography>
      <AutocompleteDefault
        getOptionLabel={getOptionLabel}
        loading={loading}
        onChange={(event, innerValue) => setValue(innerValue)}
        options={HHCompanies}
        renderInput={renderInput}
        value={value}
        disableClearable
        freeSolo
      />
    </>
  );
}

Autocomplete.propTypes = { onChange: PropTypes.func.isRequired };

export default Autocomplete;
