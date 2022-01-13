import { List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({todos, deleteTodo}) => (
    <List>
        {todos.map((todo, i) => (
            <ListItem key={i.toString()} dense button>
                <Checkbox tabIndex={-1} disableRipple/>
                <ListItemText primary={todo}/>
                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label="delete"
                        onClick={() => {
                            deleteTodo(i)
                        }}
                    >
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
)

export default TodoList;