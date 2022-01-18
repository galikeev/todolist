import { List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, Button} from "@mui/material";

const TodoList = ({todos, onChangeStatusTodo, onAllDeleteTodo}) => {

    return (
        <List style={{'margin' : '20px 0 20px 0'}}>
            {todos.length === 0 ? <div style={{'textAlign': 'center'}}>Задач пока нет</div> : todos.map((todo, i) => (
                <ListItem 
                    key={todo.id} 
                    dense 
                    button
                    style={{'margin': '10px 0 10px 0'}}
                >
                    {todo.status === 'completed' || todo.status === 'deleted' ? 
                        null : 
                        <Checkbox 
                            tabIndex={-1} 
                            disableRipple
                            onChange={() => {onChangeStatusTodo(todo.id, 'completed')}}/>}
                    <ListItemText primary={todo.title}/>
                    <ListItemSecondaryAction>
                        {todo.status === 'deleted' ? 
                            <Button 
                                variant="contained" 
                                onClick={() => onAllDeleteTodo(todo.id)}
                            >
                                удалить полностью
                            </Button> : 
                            <Button 
                                onClick={() => {onChangeStatusTodo(todo.id, 'deleted')}}
                            >
                                Удалить
                            </Button>}
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )
}

export default TodoList;