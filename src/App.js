import React from 'react'
import './App.css'
import SolutionCard from './components/SolutionCard'
import { Container, Row, Col } from 'react-grid-system'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
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

  return (
    <div className="App">
      <Container fixed>
        
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              The Purple Aisle Solution Card
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <SolutionCard />

      </Container>
    </div>
  );
}

export default App
