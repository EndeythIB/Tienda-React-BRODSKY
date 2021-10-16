import './NavBar.css';
import CartWidget from '../NavBar/CartWidget';

//external components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from 'react-bootstrap/Button';
import navLogo from '../../assets/librin.png';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import WidgetCount from "./CartWidgetCounter";




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
  
  export default function NavBar({category}) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className="nav-main"> 
          <Toolbar>
            <div className="logoContainer">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><img src={navLogo} alt="" className="logo-img" /></Link>
            </div>
              <Typography variant="h6" className={classes.title}></Typography>
                <ul className="nav-buttons">
                  <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><li><Button variant="link" className="btn-nav">INICIO</Button></li></Link>
                  <li><Dropdown>
                    <Dropdown.Toggle className="btn-nav" variant="link" id="dropdown-basic">
                      CATALOGO
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Link to={`/category/terror`} style={{ textDecoration: 'none', color: 'white' }}><Dropdown.Item href="#/action-1">Terror</Dropdown.Item></Link>
                      <Link to={`/category/comedia`} style={{ textDecoration: 'none', color: 'white' }}><Dropdown.Item href="#/action-2">Comedia</Dropdown.Item></Link>
                      <Link to={`/category/drama/`} style={{ textDecoration: 'none', color: 'white' }}><Dropdown.Item href="#/action-3">Drama</Dropdown.Item></Link>
                      <Link to={`/category/suspenso`} style={{ textDecoration: 'none', color: 'white' }}><Dropdown.Item href="#/action-3">Suspenso</Dropdown.Item></Link>
                      <Dropdown.Item href="/#catalog">Todos los generos</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown></li>                  
                  <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}><li><Button className="btn-nav" variant="link">CONTACTO</Button></li></Link>
                </ul>
              <CartWidget/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }