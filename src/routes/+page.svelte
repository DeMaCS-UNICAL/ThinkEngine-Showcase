<script lang="ts">
  import GameGrid from '$lib/components/GameGrid.svelte';
  import type { Game } from '$lib/types/game';
  export let data: { games: Game[] };
</script>

<section class="py-2">
  <div class="mb-4">
    <h1 class="h3 mb-1">Benvenuto nella vetrina</h1>
    <p class="text-muted mb-0">
      Esplora i nostri prototipi. Il dettaglio progetto arriverà a breve.
    </p>
  </div>

  <!-- In home i link ai dettagli sono disattivati -->
  <GameGrid games={data.games} clickable={false} />
</section>
