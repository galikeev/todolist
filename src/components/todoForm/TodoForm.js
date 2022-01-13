import { useState } from "react";
import { TextField } from "@mui/material";

const TodoForm = ({saveTodo}) => {

    const [value, setValue] = useState('');

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                saveTodo(value);
                setValue('');
            }}
        >
            <TextField
                variant="filled"
                label="Add todo"
                margin="normal"
                onChange={e => {
                    setValue(e.target.value);
                }}
                value={value}
            />
        </form>
    )
}

export default TodoForm;