import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className="App">

      <AppBar position="static">
        <Box className="navbarBox">
          <Toolbar className="navbar">
            <a href="">
              <Box className="navitem navitem1">
                <Typography variant="h6" color="primary" >
                  <p className="navlink">Scheme</p>
                </Typography>
              </Box>
            </a>
            <a className="plaagLink" href="">
              <Box className="navitem navitem2">
                <Typography variant="h6" color="primary" >
                  <p className="navlink">Uw agenda</p>
                </Typography>
              </Box>
            </a>
            <a className="login/signup" href="">
              <Box className="navitem navitem2">
                <Typography variant="h6" color="primary" >
                  <p className="navlink">Login</p>
                </Typography>
              </Box>
            </a>
          </Toolbar>
        </Box>
      </AppBar>
    </div>
  );
}

export default App;
