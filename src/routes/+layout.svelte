<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';
</script>

<div>
	<header>
		<div>
			<p>
				{#if $page.data.session}
					{#if $page.data.session.user?.image}
						<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
					{/if}
					<span class="signedInText">
						<small>Signed in as</small><br />
						<strong>{$page.data.session.user?.email ?? $page.data.session.user?.name}</strong>
					</span>
					<a href="/auth/signout" class="button" data-sveltekit-preload-data="off">Sign out</a>
				{:else}
					<span class="notSignedInText">You are not signed in</span>
					<button on:click={() => signIn('github')} class="px-3 py-1 bg-black text-white"
						>Sign In with GitHub</button>
				{/if}
			</p>
		</div>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
			</ul>
		</nav>
	</header>
	<slot />
</div>
