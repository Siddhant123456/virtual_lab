
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root2: {
      display: 'flex',
      flexWrap: 'wrap',
      float : 'left',

      
      '& > *': {
        
        width: theme.spacing(70),
        height: theme.spacing(60),
      },
    },
    root1: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems : 'center',
        justifyContent :'center',
  
        
        '& > *': {
          
          width: theme.spacing(70),
          height: theme.spacing(60),
        },
      },
    profile:{
        backgroundColor: '#343a40',
        marginTop : '1rem',
        marginLeft : '20%',
        textAlign :'center',
        color:'silver'
    },
    profile1:{
        backgroundColor: '#343a40',
        
        marginTop : '1rem',
        //marginRight : '20%',
        textAlign :'center',
        color:'silver',
    },
    welcome:{
        textAlign :'center',
        color : 'silver'
    }
    
  }));

