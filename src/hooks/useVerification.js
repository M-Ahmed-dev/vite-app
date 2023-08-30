import { useQuery } from '@tanstack/react-query';
import decodeToken from '../components/utilites';

export function queryStringify(params) {
	const queryString = new URLSearchParams(params).toString();
	return queryString ? `?${queryString}` : '';
}

export const useVerification = () => {
	const { baseUrl, queryParams } = decodeToken();
	return useQuery([`verification-url`, baseUrl], async () => {
		const response = await fetch(
			`${baseUrl}verification/${queryStringify({
				...queryParams,
			})}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		const data = await response.json();
		return data;
	});
};
