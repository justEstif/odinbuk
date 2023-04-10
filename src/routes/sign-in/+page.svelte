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
	<button type="submit">Submit</button>
</form>
{#if form?.message}
	<p class="error">{form.message || ''}</p>
{/if}
<a href="/sign-up" class="secondary" role="button">Sign up</a>
<a href="/api/oauth?provider=github" class="contrast" role="button">Continue with Github</a>
