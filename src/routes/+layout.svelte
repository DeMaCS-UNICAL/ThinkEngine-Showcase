<script lang="ts">
  import { base } from '$app/paths';
  import AppNavbar from '$lib/components/AppNavbar.svelte';
  import AppFooter from '$lib/components/AppFooter.svelte';
</script>

<AppNavbar brand="Game Showcase" brandHref={`${base}/`} />

<div class="bg-dark text-light min-vh-100 d-flex flex-column">
  <main class="container py-4 flex-grow-1">
    <slot />
  </main>
  <AppFooter githubUrl="https://github.com/tuo-username/tuo-repo" />
</div>
