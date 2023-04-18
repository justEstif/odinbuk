<script lang="ts">
	import { enhance } from '$app/forms';
	export let form: { message?: string };
</script>

<svelte:head>
	<title>OdinBuk | Sign in</title>
</svelte:head>

<h2>Sign in</h2>

<form method="post" use:enhance>
	<label for="username">
		Username
		<input type="text" id="username" name="username" placeholder="Username" required />
	</label>
	<label for="password">
		Password
		<input type="password" id="password" name="password" placeholder="password" required />
	</label>
	<button type="submit">Sign in</button>
</form>
{#if form?.message}
	<p class="error">{form.message || ''}</p>
{/if}

<!-- TODO: check if it navigates to facebook -->
<a href="/api/oauth?provider=facebook" class="facebook outline contrast" role="button"
	>Continue with FaceBook?</a>

<style>
	a.facebook {
		border: none;
		padding: 0;
		text-align: right;
	}
</style>
