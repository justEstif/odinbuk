<script lang="ts">
	import { enhance } from '$app/forms';
	import type { User } from 'lucia-auth';
	export let user: null | User;
</script>

<header class="container">
	<nav>
		<ul><li><a href="/">OdinBuk</a></li></ul>
		<ul>
			{#if user}
				<li>
					<details role="list" dir="rtl">
						<summary aria-haspopup="listbox" role="link" class="contrast">{user.username}</summary>
						<ul role="listbox">
							<li>Profile</li>
							<li>
								<form use:enhance method="post" action="/api/sign-out">
									<button type="submit" value="Sign out" class="outline sign-out">Sign out</button>
								</form>
							</li>
						</ul>
					</details>
				</li>
			{:else}
				<li><a href="/sign-in">Sign in</a></li>
				<li><a href="/sign-up">Sign up</a></li>
			{/if}
		</ul>
	</nav>
</header>

<style>
	button.sign-out {
		border: none;
		padding: 0;
	}
</style>
