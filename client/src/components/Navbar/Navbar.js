import React from 'react'
import { AppBar , Typography ,Toolbar, Button, Avatar} from '@material-ui/core';
import image from '../../images/image.png'
import { Link ,useHistory, useLocation} from 'react-router-dom'
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {useState , useEffect} from 'react'

export const Navbar = () => {
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const  logout = () =>{
        dispatch({type : 'LOGOUT'});
        history.push('/');
        setUser(null);
    }
    useEffect(()=>{
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    return (
        
            <AppBar className = {classes.appBar} position = "sticky" color = "inherit">
                <div className = {classes.brandContainer}>
                    <img className={classes.image} src={image} alt="icon" height="80" style = {{borderRadius : '20px'}}/>
                    <Button className = {classes.navItem} component={Link} to="/" color  = "primary">Home</Button>
                    <Button className = {classes.navItem} component={Link} to="/about" color  = "primary">About Us</Button>
                    
                    <Button className = {classes.navItem} component={Link} to="/" color  = "primary">Start Learning</Button>
                    <Button className = {classes.navItem} component={Link} to="/contact" color  = "primary">Contact Us</Button>
                </div>
                
            <Toolbar className = {classes.toolbar}>
                {user ? (
                    <div className = {classes.profile}>
                        <Button component = {Link} to = "/dashboard"><Avatar className = {classes.purple} alt = {user.result.name} src = {user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar></Button>
                        <Typography className = {classes.userName} variant = "p">{user.result.name}</Typography>
                        <Button variant = "contained" className = {classes.logout} color = "secondary" onClick = {logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant= "contained" align = "center" color= "primary">SignIn/SignUp</Button>
                )}
            </Toolbar>
            </AppBar>
    )
}
export default Navbar;