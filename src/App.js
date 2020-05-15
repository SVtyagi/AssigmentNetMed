import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import SportGames from './SportGames'
import ToDo from './Todo'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={false} style={{ backgroundColor: '#ebecec', height: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Netmeds Assignment <small style={{fontSize:"12px"}}> - by Swati Tyagi</small>
          </Typography>
          </Toolbar>
        </AppBar>

        <Paper square>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label={<b>Sports Games</b>} {...a11yProps(0)} />
            <Tab label={<b>To-do List</b>} {...a11yProps(1)} />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <SportGames />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ToDo />
        </TabPanel>
      </Container>
    </React.Fragment>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}
export default App