import logo from '../../assets/libro.png';
import './NavBar.css';
import CartWidget from '../NavBar/CartWidget';

//external components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import navLogo from '../../assets/librin.png';
import { LibraryAddOutlined } from '@material-ui/icons';


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
  
  export default function NavBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className="nav-main"> 
          <Toolbar>
            <div className="logoContainer">
              <img src={navLogo} className="logo-img" />
            </div>
              <Typography variant="h6" className={classes.title}></Typography>
                <ul className="nav-buttons">
                  <li><Button color="inherit">Tienda</Button></li>
                  <li><Button color="inherit">Catalogo</Button></li>
                  <li><Button color="inherit">Contacto</Button></li>
                  <li><Button color="default">Inicia Sesion</Button></li>
                  <li><Button color="default">Registro</Button></li>
                </ul>
              <CartWidget/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }