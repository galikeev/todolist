import { useState } from "react";
import {TextField} from '@mui/material';

import './todoForm.scss';

const TodoForm = ({saveTodo}) => {

    const [value, setValue] = useState('');

    const onSubmitTodo = (e) => {
        e.preventDefault();
        saveTodo(value);
        setValue('');
    }

    const onChangeTodo = (e) => {
        setValue(e.target.value);
    }

    return (
        <form 
            onSubmit={onSubmitTodo}
            className="form"
        >
            <TextField
                style={{'width' : '300px'}}
                margin="normal"
                variant="outlined"
                label="add todo"
                onChange={onChangeTodo}
                value={value}
            />
        </form>
    )
}

export default TodoForm;