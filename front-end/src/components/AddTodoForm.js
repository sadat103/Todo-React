import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../redux/todoSlice';
import { Box, Input, Button, HStack } from '@chakra-ui/react';
const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodoAsync({
					title: value,
				})
			);
		}
	};

	return (
		<Box as="form" onSubmit={onSubmit} >
			<HStack>
				<Input
					w="200px"
					fontSize="lg"
					variant="outline"
					bg="formInputBG"
					h="50px"
					textAlign="left"
					focusBorderColor="primary.300"
					borderRadius="4px"
					placeholder='Add todo...'
					value={value}
					onChange={(event) => setValue(event.target.value)}
				   >
				</Input>
			  <Button type='submit' className='btn btn-primary mb-2'>
				Submit
			  </Button>
		  </HStack>
		</Box>
	);
};

export default AddTodoForm;
