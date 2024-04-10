import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  Avatar,
} from '@material-ui/core';

function Sidebar (props) {
  const { company } = props;

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
            Контакты
          </Box>
        </Typography>
        <Paper>
          <List>
            <ListItem divider>
              <Typography>
                +7 (499) 506-74-24
              </Typography>
            </ListItem>
            <ListItem divider>
              <Typography>
                wanted@fun-box.ru
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                { company.siteURL || 'Не указано' }
              </Typography>
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item>
        <Typography
          component="div"
          paragraph
        >
          <Box fontWeight={500}>
            Контактные лица
          </Box>
        </Typography>
        <Paper>
          <List>
            <ListItem divider>
              <Avatar
                component={Box}
                mr={1}
              />
              <div>
                <Typography variant="body2">Надежда Ермакова</Typography>
                <Typography
                  color="textSecondary"
                  variant="caption"
                >
                  Помощник руководителя
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <Avatar
                component={Box}
                mr={1}
              />
              <div>
                <Typography variant="body2">Алексей Жданович</Typography>
                <Typography
                  color="textSecondary"
                  variant="caption"
                >
                  Помощник руководителя
                </Typography>
              </div>
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}

Sidebar.propTypes = { company: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default Sidebar;
