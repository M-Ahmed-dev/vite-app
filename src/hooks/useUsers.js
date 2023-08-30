import { useMutation, useQueryClient } from '@tanstack/react-query';
import decodeToken from '../components/utilites';
import { queryStringify } from './useVerification';

export const useAddUser = () => {
	const queryClient = useQueryClient();
	const { baseUrl, queryParams } = decodeToken();

	return useMutation(
		['add-user'],
		async (variables) => {
			const response = await fetch(
				`${baseUrl}create/${queryStringify({
					...queryParams,
				})}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(variables),
				}
			);
			if (!response.ok) {
				throw new Error('Error in creating User.');
			}
			return response.json();
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['verification-url']);
			},
			onError: () => {
				throw new Error('Error in creating User');
			},
		}
	);
};
