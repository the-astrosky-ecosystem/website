<script>
	import { onMount } from 'svelte';
	let response = null, error = null;

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
				.then(data => data.handle)
		}
	});

</script>

<p>Finishing login...</p>

{#if error}
	<p>Sorry, an error occurred: {error}</p>
{:else }
	{#await response}
		<progress></progress>
	{:then handle}
		<p>Created session for {handle}.</p>
	{/await}
{/if}

