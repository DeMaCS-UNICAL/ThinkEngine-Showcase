<script lang="ts">
  import type { Game } from '$lib/types/game';
  import { Badge, Button } from '@sveltestrap/sveltestrap';
  export let game: Game;

  const fallback = '/images/placeholder-game.png';
  const thumbnailSrc =
    game.thumbnail && game.thumbnail.trim() !== ''
      ? game.thumbnail
      : fallback;
</script>

<div class="game-hero position-relative rounded-4 overflow-hidden mb-4">
  <img class="hero-img" alt={game.title} src={thumbnailSrc} />
  <div class="hero-overlay"></div>

  <!-- Contenuti overlay -->
  <div class="hero-content">
    <div class="d-flex flex-wrap gap-2 mb-2">
      {#each game.tags as t}
        <Badge color="secondary" pill>{t}</Badge>
      {/each}
    </div>

    <h1 class="h3 m-0">{game.title}</h1>
    <div class="text-white-50 mb-3">
      ThinkEngine {game.thinkEngineVersion}
    </div>

    <div class="d-flex flex-wrap gap-2">
      {#if game.repoUrl}
        <Button
          color="light"
          outline
          href={game.repoUrl}
          target="_blank"
          rel="noopener"
        >
          <i class="bi bi-github me-1"></i> Repository
        </Button>
      {/if}
      {#if game.testInstancesUrl}
        <Button
          color="info"
          outline
          href={game.testInstancesUrl}
          target="_blank"
          rel="noopener"
        >
          <i class="bi bi-collection me-1"></i> Test instances
        </Button>
      {/if}
    </div>
  </div>
</div>

<style>
  .game-hero { aspect-ratio: 16/7; background:#111; }
  .hero-img {
    width:100%; height:100%; object-fit:cover;
    transform:scale(1); transition:transform .45s ease, filter .45s ease;
    display:block;
  }
  .game-hero:hover .hero-img { transform:scale(1.03); filter:saturate(1.05); }
  .hero-overlay {
    position:absolute; inset:0;
    background: linear-gradient(
      180deg,
      rgba(0,0,0,0) 35%,
      rgba(0,0,0,.55) 70%,
      rgba(0,0,0,.85) 100%
    );
    pointer-events:none;
  }
  .hero-content {
    position:absolute; left:16px; right:16px; bottom:14px; z-index:2;
  }
  .rounded-4 { border-radius: 1rem !important; }
</style>
