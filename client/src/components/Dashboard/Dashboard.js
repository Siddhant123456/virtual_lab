import {Paper,Button} from '@material-ui/core'
import {useStyles} from './DashboardStyles';
import CustomPaginationActionsTable from './ClassTable';
import TransitionsModal from './ClassModal';
export const Dashboard = () =>{
    const classes = useStyles();
    return (
        <div className = {classes.welcome}>
            <h1>Hello Siddhant , hope You're having a Good Day</h1>
        
        <div className = {classes.root1}>
            <Paper className = {classes.profile1}  elevation={3}>
                <h2>Your Classes</h2>
                <TransitionsModal />
                <br/>
                <br/>
                <CustomPaginationActionsTable/>
                </Paper>
        </div>
        </div>
    )
} 

