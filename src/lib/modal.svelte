<script lang="ts">
	export let showModal: boolean;
	let dialog: HTMLDialogElement;
	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}>
	<article on:click|stopPropagation>
		<header>
			<button on:click={() => dialog.close()} aria-label="Close" class="close" />
			<slot name="title" />
		</header>
		<slot />
		<footer>
			<a href="#confirm" role="button">Confirm</a>
		</footer>
	</article>
</dialog>

<style>
	button.close {
		background-color: inherit;
	}
</style>
