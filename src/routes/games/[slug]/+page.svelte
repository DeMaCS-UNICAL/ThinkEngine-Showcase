<script lang="ts">
  import type { Game } from '$lib/types/game';
  import { Breadcrumb, BreadcrumbItem, Row, Col, Button } from '@sveltestrap/sveltestrap';
  import GameHeader from '$lib/components/GameHeader.svelte';
  import GameMeta from '$lib/components/GameMeta.svelte';
  import DocBlock from '$lib/components/DocBlock.svelte';
  import {base} from '$app/paths';
  export let data: { game: Game };
  const { game } = data;
</script>

<!-- Breadcrumb -->
<Breadcrumb class="mb-3">
  <BreadcrumbItem href={`${base}/`}>Home</BreadcrumbItem>
  <BreadcrumbItem active>{game.title}</BreadcrumbItem>
</Breadcrumb>

<!-- Hero -->
<GameHeader {game} />

<!-- Contenuti -->
<Row class="g-4">
  <Col lg="6">
    <GameMeta {game} />
  </Col>
  <Col lg="6">
    <DocBlock {game} />
  </Col>
</Row>

<!-- Back action (mobile friendly) -->
<div class="mt-4">
  <Button color="light" outline href={`${base}/`}>
    <i class="bi bi-arrow-left me-1"></i> Torna alla Home
  </Button>
</div>
