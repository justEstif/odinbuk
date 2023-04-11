<script lang="ts">
	import { enhance } from '$app/forms';
	export let form: { message?: string };
</script>

<svelte:head>
	<title>OdinBuk | Sign up</title>
</svelte:head>

<h2>Create an account</h2>

<form method="post" use:enhance>
	<label for="username">
		Username
		<input type="text" id="username" name="username" placeholder="Username" required />
	</label>
	<label for="password">
		Password
		<input type="password" id="password" name="password" placeholder="password" required />
	</label>
	<button type="submit">Sign up</button>
</form>
{#if form?.message}
	<p class="error">{form.message || ''}</p>
{/if}

<a href="/api/oauth?provider=facebook" class="facebook outline contrast" role="button"
	>Continue with FaceBook?</a>

<style>
	a.facebook {
		border: none;
		padding: 0;
		text-align: right;
	}
</style>
