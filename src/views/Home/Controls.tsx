import { Select, Ad } from 'components';
import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { VARIANT, SIZE, VARIANT_OPTIONS, SIZE_OPTIONS } from 'constants/controls';

export const Controls = () => {
  const [variant, setVariant] = useState(VARIANT.WITH_IMAGE);
  const [size, setSize] = useState(SIZE.SMALL);

  const handleOnChangeVariant = (value: string) => {
    setVariant(value);
  };

  const handleOnChangeSize = (value: string) => {
    setSize(value);
  };

  return (
    <Box p={5} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container item spacing={2}>
          <Grid item xs={4}>
            <Select
              id="variant"
              label="Variant"
              value={variant}
              options={VARIANT_OPTIONS}
              onChange={handleOnChangeVariant}
            />
          </Grid>
          <Grid item xs={8}>
            <Select
              id="unit"
              label="Unit"
              value={size}
              options={SIZE_OPTIONS}
              onChange={handleOnChangeSize}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Ad variant={variant} size={size} />
        </Grid>
      </Grid>
    </Box>
  );
};
