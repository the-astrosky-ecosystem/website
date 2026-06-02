<script>
	import { getContext, onMount } from 'svelte';
	import { goto } from '$app/navigation';
	const user = getContext('User');

	onMount(() => {
		if (!$user.loggedIn) {
			goto("/login")
		}
	})
</script>

{#if $user.loggedIn}
	<h1>User settings</h1>
	<p>Logged in as: <em>{$user.handle}</em> </p>
	<button on:click={goto("/logout")}>Logout</button>
{/if}

