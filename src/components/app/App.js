import { useState, useEffect } from "react";

import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";
import TodoButtons from "../todoButtons/TodoButtons";

import '../../style/style.scss';

const App = () => {

	const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);
	const [filter, setFilter] = useState('current');

	useEffect(() => {
		localStorage.getItem('todos')
	}, [])

	const onSetTodosWithSave = (newTodos) => {
		setTodos(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos))
	}

	const onSaveTodo = (todoText) => {
		const trimmedText = todoText.trim();
			if (trimmedText.length > 0) {
				onSetTodosWithSave([ ...todos, {id: todos.length + 1, title: trimmedText, status: 'current'}])
			}
	}

	const onChangeStatusTodo = (id, status) => {
		const changedStatusTodo = todos.map(elem => (elem.id === id) ? {...elem, status: status} : elem)
		onSetTodosWithSave(changedStatusTodo)
	}

	const onAllDeleteTodo = (id) => {
		const newTodos = todos.filter(elem => elem.id !== id);
		onSetTodosWithSave(newTodos);
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

	const visibleTodos = filterPost(todos, filter);

	return (
		<div className="app">
			<h1 style={{'textAlign': 'center', 'fontSize' : '50px'}}>
				TodoList
			</h1>
			<TodoForm saveTodo={onSaveTodo}/>
			<TodoList 
				todos={visibleTodos}
				onChangeStatusTodo={onChangeStatusTodo}
				onAllDeleteTodo={onAllDeleteTodo}/>
			<TodoButtons onFilterSelect={onFilterSelect}/>
		</div>
	);
}

export default App;
