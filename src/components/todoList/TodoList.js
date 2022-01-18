import { List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({todos, onChangeStatusTodo, onChangeChexbox}) => {

    return (
        <List>
            {todos.map((todo, i) => (
                <ListItem key={todo.id} dense button>
                    {todo.status === 'completed' || todo.status === 'deleted' ? null : <Checkbox 
                        tabIndex={-1} 
                        disableRipple
                        onChange={() => {onChangeStatusTodo(todo.id, 'completed')}}
                    />}
                    <ListItemText primary={todo.title}/>
                    <ListItemSecondaryAction>
                        <IconButton 
                            aria-label="delete"
                            onClick={() => {onChangeStatusTodo(todo.id, 'deleted')}}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )
}

export default TodoList;