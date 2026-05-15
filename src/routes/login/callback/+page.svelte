<script>
	import { getContext, onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import { PUBLIC_SERVER_ENDPOINT } from '$env/static/public';
	
	let response = null, error = null;
	const user = getContext("User")

	onMount(() => {
		const searchParams = new URLSearchParams(window.location.search);

		if( searchParams.has('error')) {
			error = "AtmosError: " + searchParams.get('error')
			console.error(error)
		}
		else {
			const state = searchParams.get('state'),
				iss = searchParams.get('iss'),
				code = searchParams.get('code');

			response = fetch(
				`${PUBLIC_SERVER_ENDPOINT}/atmos/callback?` + new URLSearchParams({ state, iss, code }),
				{credentials: 'include'}
			)
				.then(res => res.json())
				.then(data => {
					$user.setUser(data.handle)
					goto("/")
				})
				.catch(reason => error = "ServerError: " + reason)
		}
	});

</script>

{#if error}
	<p>Sorry, an error occurred while logging in:</p>
	<p>{error}</p>
{:else }
	<p>One second, completing login...</p>
	{#await response}
		<progress></progress>
	{/await}
{/if}

