<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { enhance } from '$app/forms';
	export let user: null | {};
</script>

<header class="container">
	<nav>
		<ul><li><a href="/">OdinBuk</a></li></ul>
		<ul>
			{#if user}
				<li>
					<form use:enhance method="post" action="/api/sign-out">
						<button type="submit" value="Sign out">Sign out</button>
					</form>
				</li>
			{:else}
				<li><a href="/sign-in">Sign in</a></li>
				<li><a href="/sign-up">Sign up</a></li>
			{/if}
		</ul>
	</nav>
</header>
