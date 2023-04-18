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
	<figcaption class="header">
		<div>
			<a href="#userpage">@username</a>
			<small>2h</small>
		</div>
		<div>
			<small>1 like</small>
			<small>2 comments</small>
		</div>
	</figcaption>
	<img src="https://placehold.co/600x400" alt="Architecture" />

	<figcaption class="footer">
		<button class="outline like">
			<iconify-icon icon="fa-regular:heart" />
		</button>

		<button on:click={() => (showModal = true)} class="outline comment">
			<iconify-icon icon="fa-regular:comment-dots" />
		</button>
	</figcaption>
</figure>
<hr />

<Modal bind:showModal>
	<p slot="title">Create a comment</p>
	<form class="comment-form">
		<div class="grid">
			<label for="comment">
				Comment
				<input type="text" id="comment" name="comment" placeholder="Comment" required />
			</label>
		</div>
	</form>
</Modal>

<style>
	figcaption {
		display: flex;
		gap: var(--grid-spacing-horizontal);
	}
	button.like,
	button.comment {
		width: fit-content;
		border: none;
		padding: 0;
		margin: 0;
	}
	form.comment-form {
		margin: 0;
	}
	figcaption.header {
		display: flex;
		justify-content: space-between;
	}
</style>
