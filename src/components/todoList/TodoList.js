import { List, ListItem, ListItemSecondaryAction, Checkbox, Button} from "@mui/material";

import './todoList.scss';

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
                    <div className="list__title">{todo.title}</div>
                    <ListItemSecondaryAction>
                        {todo.status === 'deleted' ? 
                            <Button 
                                size="small"
                                variant="contained" 
                                onClick={() => onAllDeleteTodo(todo.id)}
                            >
                                очистить
                            </Button> : 
                            <Button 
                                size="small"
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