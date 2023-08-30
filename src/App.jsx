
import { Box } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import CourseHeading from './components/CourseHeading/CourseHeading';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import UserDetails from './components/UserDetails';
import { useVerification } from './hooks/useVerification';
import UserForm from './components/UserForm';

function App() {
	const { data, isLoading } = useVerification();

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<>
			{' '}
			<Navbar />
			<Box maxWidth='1000px' margin='0 auto' padding='37px 40px'>
				<CourseHeading courses={data?.courses} />
				{data?.user_status === 'existing_user' ? (
					<UserDetails
						loginUrl={data?.priima_login}
						userDetails={data?.user_details}
						isLoading={isLoading}
					/>
				) : (
					<UserForm userDetails={data?.form_fields} />
				)}
			</Box>
			<Footer />
		</>
	);
}

export default App;
