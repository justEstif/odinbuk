<script>
	import Modal from '$lib/modal.svelte';
	let showModal = false;
</script>

<svelte:head>
	<title>OdinBuk | Home</title>
</svelte:head>

<h1>Home</h1>
<details>
	<summary>Create a post</summary>
	<p>Hey create post using this form</p>
</details>

<figure>
	<figcaption>
		<a href="#userpage">@username</a>
		<small>2h</small>
	</figcaption>
	<img src="https://placehold.co/600x400" alt="Architecture" />

	<footer>
		<a href="#like">
			<iconify-icon icon="fa-regular:heart" />
		</a>
		<button on:click={() => (showModal = true)}>
			<iconify-icon icon="fa-regular:comment-dots" />
		</button>
	</footer>
</figure>

<Modal bind:showModal>
	<article>
		<h3>Confirm your action!</h3>
		<p>
			Mauris non nibh vel nisi sollicitudin malesuada. Donec ut sagittis erat. Praesent eu eros
			felis. Ut consectetur placerat pulvinar.
		</p>
		<footer>
			<button on:click={() => (showModal = false)}>Cancel</button>
		</footer>
	</article>
</Modal>

<style>
	footer {
		padding: 10px 0px;
		display: flex;
		gap: var(--grid-spacing-horizontal);
	}
	iconify-icon {
		font-size: 20px;
	}
</style>
