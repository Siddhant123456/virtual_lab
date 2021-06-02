import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button} from '@material-ui/core';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createClass } from "../../actions/createclass";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function Inputs() {
  const classes = useStyles();
  const history = useHistory();
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
 const initialState = {
     name  : "",
     desc : "",
     standard : "",
     duration : "",
 }
 const dispatch = useDispatch();
  const [formData , setFormData] = useState(initialState)
  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleForm = (e) =>{
      e.preventDefault();
      let completeData = {...formData , userInfo : user};
        
      dispatch(createClass(completeData,history))

  
  }

  return (
    <form className={classes.root} onSubmit = {handleForm}>
        <h2 style = {{textAlign:'center'}}>Please Enter Details</h2>
      <TextField
    
    label="Class Name"
    variant="outlined"
    color="secondary"
    name = "name"
    onChange = {handleChange}
  />
  
    <TextField
    
    label="Class Description"
    variant="outlined"
    color="secondary"
    name = "desc"
    onChange = {handleChange}

  />
  <br/>
  <TextField
    
    label="Class Standard"
    variant="outlined"
    color="secondary"
    name = "standard"
    onChange = {handleChange}
    

  />
  
  
  <TextField
    
    label="Class Duration"
    variant="outlined"
    color="secondary"
    name = "duration"
    onChange = {handleChange}
    

  />
  <br/>
  <Button type = "submit" variant = "contained" color = "primary">Submit</Button>
    </form>
  );
}
