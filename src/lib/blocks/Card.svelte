<script>
	let { children, width = '50%' } = $props();
</script>

<div class="card" style="width: {width};">
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.card {
		background-color: var(--color-offwhite);
		border-radius: 20px;
		padding: 20px;
		margin-bottom: 20px;
	}
	.card:hover {
		background-color: color-mix(in srgb, var(--color-offwhite) 98%, black 2%);
	}
</style>
