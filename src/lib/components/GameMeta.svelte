<script lang="ts">
  import type { Game } from '$lib/types/game';
  import {
    Card,
    CardHeader,
    CardBody,
    ListGroup,
    ListGroupItem,
    Badge
  } from '@sveltestrap/sveltestrap';

  export let game: Game;
</script>

<Card class="bg-dark text-light border-0 rounded-4 shadow-sm">
  <CardHeader class="bg-transparent border-secondary fw-semibold">
    Dettagli ThinkEngine
  </CardHeader>
  <CardBody class="pt-3">

    <!-- Info principali -->
    <ListGroup flush>
      <ListGroupItem class="bg-dark text-light d-flex justify-content-between align-items-center">
        <span>
          <i class="bi bi-cpu me-2"></i> ThinkEngine version
        </span>
        <span class="fw-semibold">{game.thinkEngineVersion}</span>
      </ListGroupItem>

      <ListGroupItem class="bg-dark text-light d-flex justify-content-between align-items-center">
        <span>
          <i class="bi bi-github me-2"></i> Repository
        </span>
        {#if game.repoUrl}
          <a
            href={game.repoUrl}
            target="_blank"
            rel="noopener"
            class="text-decoration-none text-info"
          >
            Apri su GitHub
          </a>
        {:else}
          <span class="text-secondary">N/D</span>
        {/if}
      </ListGroupItem>

      {#if game.testInstancesUrl}
        <ListGroupItem class="bg-dark text-light d-flex justify-content-between align-items-center">
          <span>
            <i class="bi bi-collection me-2"></i> Test instances
          </span>
          <a
            href={game.testInstancesUrl}
            target="_blank"
            rel="noopener"
            class="text-decoration-none text-info"
          >
            Apri
          </a>
        </ListGroupItem>
      {/if}
    </ListGroup>

    <!-- ThinkEngine usage -->
    <div class="mt-4">
      <div class="mb-2 fw-semibold">
        <i class="bi bi-info-circle me-2"></i> ThinkEngine usage
      </div>
      <p class="text-secondary mb-0">
        {game.thinkEngineUsage}
      </p>
    </div>

    <!-- Languages (dalla GitHub /languages API) -->
    {#if game.languages && game.languages.length > 0}
      <div class="mt-4">
        <div class="mb-2 fw-semibold">
          <i class="bi bi-code-slash me-2"></i> Languages
        </div>
        <div class="d-flex flex-wrap gap-2">
          {#each game.languages as lang}
            <Badge color="secondary" pill>{lang}</Badge>
          {/each}
        </div>
      </div>
    {/if}

  </CardBody>
</Card>
