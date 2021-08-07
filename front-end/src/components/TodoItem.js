import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';
import { Box, Input, Button, HStack, chakra, Spacer} from '@chakra-ui/react';
const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleCompleteAsync({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id }));
	};

	return (
		<Box className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<Box>
				<HStack>
				<chakra.span>
					<Input
						type='checkbox'
						className='mr-3'
						checked={completed}
						onClick={handleCheckboxClick}
					></Input>
					{title}
				</chakra.span>
				<Spacer />
				<Button onClick={handleDeleteClick} colorScheme="blackAlpha">
					Delete
				</Button>
				</HStack>
			</Box>
		</Box>
	);
};

export default TodoItem;
