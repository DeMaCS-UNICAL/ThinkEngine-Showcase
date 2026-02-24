<script lang="ts">
  import type { Game } from '$lib/types/game';
  import { base } from '$app/paths';
  import {
    Card, CardBody, CardTitle, CardText, Badge, Button
  } from '@sveltestrap/sveltestrap';

  export let game: Game;
  export let clickable: boolean = true;

  // Fallback se manca la thumbnail
  const fallback = `${base}/images/placeholder-game.png`;
 
  const thumbnailSrc =
    game.thumbnail && game.thumbnail.trim() !== ''
      ? game.thumbnail.startsWith('http')
        ? game.thumbnail
        : `${base}${game.thumbnail}`
      : fallback;
</script>

<Card
  class="gamecard h-100 d-flex flex-column bg-dark text-light border-0 rounded-4 shadow-sm overflow-hidden"
>
  <div class="hero position-relative">
    {#if clickable}
      <a
        class="stretched-link"
        href={`${base}/games/${game.slug}`}
        aria-label={`Vai a ${game.title}`}
      />
    {/if}
    <img class="hero-img" alt={game.title} src={thumbnailSrc} loading="lazy" />

    <div class="hero-overlay"></div>

    <div class="hero-tags d-flex flex-wrap gap-2">
      {#each game.tags as t}
        <Badge color="secondary" pill>{t}</Badge>
      {/each}
    </div>

    <div class="hero-title">
      <h3 class="h5 m-0">{game.title}</h3>
      <small class="text-white-50">
        ThinkEngine {game.thinkEngineVersion}
      </small>
    </div>
  </div>

  <CardBody class="d-flex flex-column pt-3">
    <CardTitle tag="h5" class="visually-hidden">{game.title}</CardTitle>

    <CardText class="text-muted mb-3">
      {game.short}
    </CardText>

    <div class="mt-auto d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center gap-2">
        <i class="bi bi-cpu"></i>
        <small class="text-secondary">
          ThinkEngine {game.thinkEngineVersion}
        </small>
      </div>

      {#if clickable}
        <Button
          tag="a"
          href={`/games/${game.slug}`}
          color="light"
          size="sm"
          outline
        >
          Dettagli
          <i class="bi bi-arrow-right-short ms-1"></i>
        </Button>
      {:else}
        <Button color="light" size="sm" outline disabled title="Dettaglio non ancora disponibile">
          Dettagli
          <i class="bi bi-lock ms-1"></i>
        </Button>
      {/if}
    </div>
  </CardBody>
</Card>

<style>
  .hero {
    aspect-ratio: 16 / 10;
    background: #111;
  }
  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform .45s ease, filter .45s ease;
    display: block;
  }
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0,0,0,0) 35%,
      rgba(0,0,0,.55) 70%,
      rgba(0,0,0,.85) 100%
    );
    pointer-events: none;
  }
  .hero-title {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 10px;
    z-index: 2;
  }
  .hero-tags {
    position: absolute;
    left: 12px;
    top: 12px;
    z-index: 2;
  }

  .gamecard {
    transition: transform .28s ease, box-shadow .28s ease;
    will-change: transform;
  }
  .gamecard:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(0,0,0,.35);
  }
  .gamecard:hover .hero-img {
    transform: scale(1.06);
    filter: saturate(1.05);
  }

  .rounded-4 { border-radius: 1rem !important; }
</style>
