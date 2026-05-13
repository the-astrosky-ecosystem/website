<script>
	import { PUBLIC_SERVER_ENDPOINT } from '$env/static/public';
</script>
<h1>Login to the Atmosphere</h1>

<form method="post" action="{PUBLIC_SERVER_ENDPOINT}/atmos/login">
	<fieldset>
		<label for="username">Enter your handle to continue</label><br/>
		<input name="username" id="username" placeholder="@emily.example.com" style="font-family: monospace;" required>
		<input type="submit" value="Login">
	</fieldset>
</form>
<p>(If you're a Bluesky user, that's your Atmosphere account)</p>
<form method="post">
	<input name="username" type="hidden" value="https://bsky.social">
	<input class="secondary" type="submit" value="Create Account with Bluesky Social">
</form>
