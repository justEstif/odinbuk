<script lang="ts">
	import '@picocss/pico';
	import 'iconify-icon';
	import Nav from '$lib/nav.svelte';
	export let data;
</script>

<Nav user={data.user} />
<main class="container">
	<slot />
</main>
