import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import { Text } from '@chakra-ui/react';
const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<Text ml="8" fontSize="larger" fontWeight="bold">My Todo List</Text>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;
