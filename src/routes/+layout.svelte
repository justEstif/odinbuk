<script lang="ts">
	import '@picocss/pico';
	import Nav from '$lib/nav.svelte';
</script>

<Nav />

<main class="container">
	<slot />
</main>
