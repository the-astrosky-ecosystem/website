<script>
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const createUser = (handle) => {
		return {
			handle: handle,
			loggedIn: handle !== null,

			fetchUser,
			setUser,
			// todo: Logout functionality...
		};
	}

	const fetchUser = async () => {
		fetch("http://127.0.0.1:5000/atmos/handle", {credentials: 'include'})
			.then(res => res.json())
			.then(data => setUser( data.handle ))
	}

	const setUser = (handle) => {
		$user = createUser(handle)
	}

	const user = writable(createUser(null));
	setContext('User', user);

	onMount(() => {
		// When we start we check we are logged in.
		if( !$user.loggedIn) {
			fetchUser()
		}
	});

	let { children } = $props();
</script>
{@render children()}