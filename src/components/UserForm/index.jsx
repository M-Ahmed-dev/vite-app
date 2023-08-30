import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Text,
	useTheme,
} from '@chakra-ui/react';
import { useAddUser } from '../../hooks/useUsers';
import { useState } from 'react';
import decodeToken from '../utilites';

const UserForm = ({ userDetails }) => {
	const [formFields, setFormFields] = useState({});
	const { mutate: addUser } = useAddUser();
	const formStyles = {
		display: 'grid',
		gridTemplateColumns: 'auto auto',
		alignItems: 'baseline',
		columnGap: '25px',
		// "@media screen and (width: 768px)": {
		//   display: "flex",
		//   flexDirection: "column",
		// },
	};

	const theme = useTheme();

	const submitHandler = (e) => {
		e.preventDefault();

		const { email } = decodeToken();
		addUser({
			...formFields,
			fields_data: {
				...formFields.fields_data,
				basic: {
					...formFields.fields_data.basic,
					email,
				},
			},
		});
	};
	return (
		<Box
			mt='59px'
			borderRadius='10px'
			background='#E6F2F3'
			boxShadow='0px 2px 5px 0px rgba(33, 91, 124, 0.15)'
			display='flex'
			padding='52px 0px 90px'
		>
			<Box maxWidth='85%' margin='auto'>
				<Box>
					<Text fontSize='20px' sx={theme.fonts.primary}>
						Information:
					</Text>
				</Box>
				<Box mt='64px'>
					<form style={formStyles}>
						{Object.keys(userDetails).map((fieldKey) =>
							Object.keys(userDetails[fieldKey])?.map((key) => (
								<FormControl key={key}>
									<FormLabel sx={theme.fonts.secondary}>
										{userDetails[fieldKey][key]?.name}
									</FormLabel>
									<Input
										background='#fff'
										maxWidth='100%'
										width='313px'
										height='25px'
										placeholder={userDetails[fieldKey][key]?.name}
										boxShadow='0px 0px 2px 0px rgba(33, 91, 124, 0.50) inset'
										size='sm'
										value={userDetails[fieldKey][key]?.value}
										borderRadius='5px'
										disabled={userDetails[fieldKey][key]?.name === 'Email'}
										sx={{
											'&::placeholder': {
												fontSize: '13px',
											},
										}}
										onChange={(e) => {
											const value = e.target.value;
											console.log([fieldKey, key, value], [fieldKey], [key]);
											setFormFields((prev) => {
												// Clone the existing state
												const newState = { ...prev };

												// Initialize the fields_data object if it doesn't exist
												newState.fields_data = newState.fields_data || {};

												// Initialize the fieldKey object if it doesn't exist
												newState.fields_data[fieldKey] =
													newState.fields_data[fieldKey] || {};

												// Update or add the key within the fieldKey object
												newState.fields_data[fieldKey][key] = value;

												return newState; // Return the updated state
											});
										}}
									/>
								</FormControl>
							))
						)}
						{/* {Object.keys(formData.basic).map((fieldKey) => {
							return (
								<FormControl
									key={fieldKey}
									marginTop={fieldKey !== 'first_name' ? '10px' : 0}
								></FormControl>
							);
						})}

						{Object.keys(formData.additional).map((fieldKey) => {
							return (
								<FormControl
									key={fieldKey}
									marginTop={fieldKey !== 'first_name' ? '10px' : 0}
								>
									<FormLabel sx={theme.fonts.secondary}>
										{formData.additional[fieldKey].name}
									</FormLabel>
									<Input
										background='#fff'
										maxWidth='100%'
										width='313px'
										height='25px'
										placeholder='Field Name'
										boxShadow='0px 0px 2px 0px rgba(33, 91, 124, 0.50) inset'
										size='sm'
										borderRadius='5px'
										sx={{
											'&::placeholder': {
												fontSize: '13px',
											},
										}}
										onChange={(e) => {
											const value = e.target.value;
											setFormFields((prev) => ({
												...prev,
												fields_data: {
													...prev.fields_data,
													additional: {
														...prev.fields_data.additional,
														[fieldKey]: value,
													},
												},
											}));
										}}
									/>
								</FormControl>
							);
						})} */}
					</form>
					<Button
						mt='86px'
						display='flex'
						width='200px'
						color='#FFF'
						onClick={submitHandler}
						background={theme.colors.primary}
					>
						Confirm
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default UserForm;
