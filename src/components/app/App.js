import { useState } from "react";
import { Typography } from "@mui/material";

import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";
import TodoButtons from "../todoButtons/TodoButtons";

import '../../style/style.scss';

const App = () => {

	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState('current')

	const onSaveTodo = (todoText) => {
		const trimmedText = todoText.trim();
			if (trimmedText.length > 0) {
				setTodos([ ...todos, {id: todos.length + 1, title: trimmedText, status: 'current'}])
			}
	}

	const onDeleteTodo = (id) => {
		const deletedTodos = todos.map(elem => (elem.id === id) ? {...elem, status: 'deleted'} : elem)
		setTodos(deletedTodos)
	}

	const onAllDeleteTodo = (todoIndex) => {
		const newTodos = todos.filter(elem => elem.id !== todoIndex);
		setTodos(newTodos);
	}

	const filterPost = (items, filter) => {
        switch (filter) {
            case 'current':
                return items.filter(item => item.status === 'current');
            case 'completed':
                return items.filter(item => item.status === 'completed');
            case 'deleted':
                return items.filter(item => item.status === 'deleted');
            default:
                return items
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }

	const visibleTodos = filterPost(todos, filter)

	return (
		<div className="app">
			<Typography component="h1" variant="h2">
				TodoList
			</Typography>
			<TodoForm saveTodo={onSaveTodo}/>
			<TodoList 
				todos={visibleTodos}
				deleteTodo={onDeleteTodo}/>
			<TodoButtons onFilterSelect={onFilterSelect}/>
		</div>
	);
}

export default App;
