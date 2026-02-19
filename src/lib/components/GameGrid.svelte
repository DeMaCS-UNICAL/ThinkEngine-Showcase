<script lang="ts">
  import type { Game } from '$lib/types/game';
  import { Row, Col } from '@sveltestrap/sveltestrap';
  import GameCard from '$lib/components/GameCard.svelte';

  export let games: Game[] = [];
</script>

<Row class="g-4">
  {#each games as game}
    <!-- 1 col su xs, 2 su md (6/12), 3 su lg (4/12) -->
    <Col md="6" lg="4">
      <GameCard {game} />
    </Col>
  {/each}
</Row>
