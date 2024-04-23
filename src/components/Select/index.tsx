import {
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Select as MUISelect
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SelectProps } from 'components/Select/types';

export const Select = (props: SelectProps) => {
  const { id, label, value = '', options, onChange } = props;
  const [proxyValue, setProxyValue] = useState<string>('');

  useEffect(() => {
    setProxyValue(value);
  }, [value]);

  const handleOnChange = (event: SelectChangeEvent) => {
    onChange?.(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <MUISelect labelId={id} label={label} value={proxyValue} onChange={handleOnChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.text}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};
