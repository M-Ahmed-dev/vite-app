import { useQuery } from '@tanstack/react-query';
import decodeToken from '../components/utilites';

export function queryStringify(params) {
	const queryString = new URLSearchParams(params).toString();
	return queryString ? `?${queryString}` : '';
}

export async function getVerifications() {
	const { email, baseUrl, queryParams } = decodeToken();
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

	data.email = email;

	return data;
}

export const useVerification = () => {
	const { baseUrl } = decodeToken();

	return useQuery([`verification-url`, baseUrl], async () => {
		return await getVerifications();
	});
};
