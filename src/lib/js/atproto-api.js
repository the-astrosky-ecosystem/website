import { PUBLIC_SERVER_ENDPOINT } from '$env/static/public';

const serverFetch = async (url, isJson = true) => {
	let error = null;
	
	const data = await fetch(`${PUBLIC_SERVER_ENDPOINT}/${url}`, { credentials: 'include' })
		.then( res => {
			if( isJson ) {
				res = res.json()
			}
			return res
		})
		.catch((err) => {
			console.error(err)
			error = err
		});
	
	return [data, error];
};

export const fetchHandle = async () => {
	const [data, error] = await serverFetch("/atmos/handle")
	return [data, error]
};

export const logout = async () => {
	const [data, error] = await serverFetch("/atmos/logout");
	return [data, error]
}