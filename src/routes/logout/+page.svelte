<script>
	import { getContext, onMount } from 'svelte';

	const user = getContext("User");
	let loggedIn = $state($user.loggedIn);
	
	onMount(() => {
		if( $user.loggedIn ) {
			$user.logout()
			loggedIn = false
		}
	});
</script>

{#if loggedIn}
	<progress></progress>
	{:else}
	<p>You have been logged out.</p>
	<p><a href="/">Return home</a>.</p>
{/if}