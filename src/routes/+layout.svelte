<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';
</script>

<div class="container mx-auto bg-red-400">
	<header>
		{#if $page.data.session}
			{#if $page.data.session.user?.image}
				<div class="avatar">
					<div class="w-24 rounded-full">
						<img src={$page.data.session.user.image} alt="profile-pic" />
					</div>
				</div>
			{/if}
			<span>
				<small>Signed in as</small><br />
				<strong>{$page.data.session.user?.email ?? $page.data.session.user?.name}</strong>
			</span>
			<button on:click={() => signOut()} class="btn">Sign out</button>
			<a href="/auth/signout" class="button" data-sveltekit-preload-data="off">Sign out</a>
		{:else}
			<button on:click={() => signIn('github')} class="btn btn-primary">Sign In with GitHub</button>
		{/if}
	</header>
	<slot />
</div>
