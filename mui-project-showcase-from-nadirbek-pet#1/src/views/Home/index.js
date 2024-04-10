import { useHistory } from 'react-router-dom';
import React, {
  useState,
  useEffect,
} from 'react';
import {
  LinearProgress,
  Container,
  Box,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';

import { REVIEW } from 'routes/constants';
import { Company as Query } from 'queries';
import { Banner } from 'components';
import Search from './Search';
import { DEFAULT_COLUMNS } from './constants';
import Companies from './Companies';

function Home () {
  const { loading, data } = useQuery(Query.LatestCompanies);
  const [companies, setCompanies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const { latestCompanies = [] } = data || {};
    const perChunk = latestCompanies.length / DEFAULT_COLUMNS;
    const response = latestCompanies.reduce((accumulator, current, index) => {
      const chunk = Math.floor(index / perChunk);

      if (!accumulator[chunk]) {
        accumulator[chunk] = [];
      }

      accumulator[chunk].push(current);

      return accumulator;
    }, []);

    setCompanies(response);
  }, [data, setCompanies]);

  const handleReview = () => { history.push(REVIEW); };

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <>
      <Banner>
        <Container>
          <Box
            component="div"
            mb={7}
          >
            <Typography
              component="div"
              variant="h5"
            >
              <Box fontWeight={500}>
                Начните искать работу своей мечты прямо сейчас
              </Box>
            </Typography>
            <Typography
              component="div"
              variant="h5"
            >
              <Box fontWeight={300}>
                Выбирай компанию по отзывам
              </Box>
            </Typography>
          </Box>
          <Grid
            alignItems="center"
            spacing={2}
            container
          >
            <Grid
              lg={4}
              md={8}
              xs={12}
              item
            >
              <Search />
            </Grid>
            <Grid item>
              <Typography color="textSecondary">
                или
              </Typography>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                onClick={handleReview}
                variant="contained"
              >
                Оценить компанию
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Banner>
      <Container>
        {
          companies && (
            <Companies companies={companies} />
          )
        }
      </Container>
    </>
  );
}

export default Home;
