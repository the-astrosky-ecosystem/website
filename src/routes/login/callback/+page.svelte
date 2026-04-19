<script>
	import { getContext, onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let response = null, error = null;
	const user = getContext("User")

	onMount(() => {
		const searchParams = new URLSearchParams(window.location.search);

		if( searchParams.has('error')) {
			error = searchParams.get('error')
			console.error(error)
		}
		else {
			const state = searchParams.get('state'),
				iss = searchParams.get('iss'),
				code = searchParams.get('code');

			response = fetch(
				`http://127.0.0.1:5000/atmos/callback?state=${state}&iss=${iss}&code=${code}`,
				{credentials: 'include'}
			)
				.then(res => res.json())
				.then(data => {
					$user.setUser(data.handle)
					goto("/")
				})
		}
	});

</script>

{#if error}
	<p>Sorry, an error occurred while logging in:{error}</p>
{:else }
	<p>One second, completing login...</p>
	{#await response}
		<progress></progress>
	{/await}
{/if}

