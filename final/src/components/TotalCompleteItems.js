import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@chakra-ui/react';
const TotalCompleteItems = () => {
	const todos = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true)
	);

	return (
	      <Text fontSize="3xl" fontWeight="bold"> Total complete items: {todos.length}</Text>
	);
};

export default TotalCompleteItems;
