import { List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({todos, deleteTodo}) => {
    return (
        <List>
            {todos.map((todo, i) => (
                <ListItem key={todo.id} dense button>
                    <Checkbox tabIndex={-1} disableRipple/>
                    <ListItemText primary={todo.title}/>
                    <ListItemSecondaryAction>
                        <IconButton 
                            aria-label="delete"
                            onClick={() => {deleteTodo(todo.id)}}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )
}

export default TodoList;