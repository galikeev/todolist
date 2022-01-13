import { useState } from "react";
import { Typography } from "@mui/material";

import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";

import '../../style/style.scss';

const App = () => {

	const [todos, setTodos] = useState([]);

	return (
		<div className="app">
			<Typography component="h1" variant="h2">
				TodoList
			</Typography>
			<TodoForm saveTodo={todoText => {
				const trimmedText = todoText.trim();
				if (trimmedText.length > 0) {
					setTodos([...todos, trimmedText])
				}
			}}/>
			<TodoList 
				todos={todos}
				deleteTodo={todoIndex => {
					const newTodos = todos.filter((_, index) => index !== todoIndex);
					setTodos(newTodos)
				}}/>
		</div>
	);
}

export default App;
