<script lang="ts">
	import '../app.css';
	import 'iconify-icon';
	import Nav from '$lib/nav.svelte';
	export let data;
</script>

<header class="container mx-auto">
	<Nav user={data.user} />
</header>

<main class="container">
	<slot />
</main>
