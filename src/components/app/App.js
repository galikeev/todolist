import { useState } from "react";
import { Typography } from "@mui/material";

import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";
import TodoButtons from "../todoButtons/TodoButtons";

import '../../style/style.scss';

const App = () => {

	const [todos, setTodos] = useState([]);

	const onSaveTodo = (todoText) => {
		const trimmedText = todoText.trim().length > 0;
			setTodos([...todos, trimmedText])
	}

	const onDeleteTodo = (todoIndex) => {
		const newTodos = todos.filter((elem, index) => index !== todoIndex);
		setTodos(newTodos);
	}

	return (
		<div className="app">
			<Typography component="h1" variant="h2">
				TodoList
			</Typography>
			<TodoForm saveTodo={onSaveTodo}/>
			<TodoList 
				todos={todos}
				deleteTodo={onDeleteTodo}/>
			<TodoButtons/>
		</div>
	);
}

export default App;
