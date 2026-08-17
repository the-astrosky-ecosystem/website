<script>
	import { PUBLIC_SERVER_ENDPOINT } from '$env/static/public';
</script>
<h1>Log in to the Atmosphere</h1>

<form method="post" action="{PUBLIC_SERVER_ENDPOINT}/atmos/login">
		<label for="username">Enter your handle to continue</label><br/>
		<input name="username" id="username" placeholder="@emily.example.com" style="font-family: monospace;" required>
		<input type="submit" value="Login">
</form>

<p>If you're a Bluesky user, just use your handle from there.</p>

<br/>
<p>(If you don't have an atmosphere account, click here:
<button on:click={window.location.href = "https://bsky.social"}>Go to Bluesky</button> )
</p>

<style>
	label, input {
			font-size: larger;
	}
</style>