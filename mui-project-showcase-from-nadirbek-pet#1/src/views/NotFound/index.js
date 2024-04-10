import { Link as Router } from 'react-router-dom';
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Link,
} from '@material-ui/core';

import { HOME } from 'routes/constants';

function NotFound () {
  return (
    <Container>
      <Typography
        align="center"
        variant="h3"
        paragraph
      >
        К сожалению, эта страница недоступна
      </Typography>
      <Typography
        align="center"
        component="div"
        variant="body1"
      >
        <Box fontWeight={300}>
          Возможно, вы воспользовались недействительной ссылкой
          или страница была удалена.&nbsp;
          <Link
            color="inherit"
            component={Router}
            to={HOME}
            underline="always"
          >
            Вернуться назад
          </Link>
        </Box>
      </Typography>
    </Container>
  );
}

export default NotFound;
