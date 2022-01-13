import { useState } from "react";
import { TextField } from "@mui/material";

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
        <form onSubmit={onSubmitTodo}>
            <TextField
                variant="filled"
                label="Add todo"
                onChange={onChangeTodo}
                value={value}
            />
        </form>
    )
}

export default TodoForm;