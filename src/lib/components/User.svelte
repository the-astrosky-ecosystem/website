<script>
	import * as atproto from '../js/atproto-api';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	
	const generateUser = (handle=null) => {
		return {
			handle: handle,
			loggedIn: handle !== null,

			fetchHandle: async () => {
				const [data] = await atproto.fetchHandle();
				setUserContent( data?.handle )
			},
			
			setHandle: handle => {
				setUserContent(handle)
			},
			
			logout: async () => {
				await atproto.logout()
				setUserContent(null)
			},
		};
	}
	
	const setUserContent = (handle) => {
		$user = generateUser(handle)
	}
	
	const user = writable(generateUser());
	setContext('User', user);

	onMount(() => {
		// When the app starts, check we are logged in.
		if( !$user.loggedIn) {
			$user.fetchHandle()
		}
	});

	let { children } = $props();
</script>
{@render children()}