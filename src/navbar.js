import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Navbar() {
    return (
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
                                    <Link to="/agenda"><p className="navlink">Your agenda</p>
                                    </Link>
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
    );
}

export default Navbar;