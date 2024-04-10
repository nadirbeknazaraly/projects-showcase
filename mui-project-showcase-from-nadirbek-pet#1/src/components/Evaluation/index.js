import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  Typography,
} from '@material-ui/core';

function Evaluation (props) {
  const { min, max } = props;
  const [range, setRange] = useState([]);

  useEffect(() => {
    const calculateRange = () => [...Array(max + 1 - min).keys()];

    setRange(calculateRange());
  }, [min, max, setRange]);

  return (
    <Grid
      spacing={1}
      container
    >
      {
        range.map((item) => (
          <Grid
            key={item}
            item
          >
            <Button variant="outlined">
              <Typography variant="body2">
                { item }
              </Typography>
            </Button>
          </Grid>
        ))
      }
    </Grid>
  );
}

Evaluation.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

Evaluation.defaultProps = {
  min: 0,
  max: 5,
};

export default Evaluation;
