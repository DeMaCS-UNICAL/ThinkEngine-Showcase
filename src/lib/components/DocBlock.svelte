<script lang="ts">
  import type { Game } from '$lib/types/game';
  import { Card, CardHeader, CardBody } from '@sveltestrap/sveltestrap';
  import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';

  export let game: Game;
</script>

<Card class="bg-dark text-light border-0 rounded-4 shadow-sm">
  <CardHeader class="bg-transparent border-secondary fw-semibold d-flex align-items-center gap-2">
    <i class="bi bi-file-earmark-text"></i>
    Documentazione tecnica
  </CardHeader>
  <CardBody>
    {#if game.doc?.kind === 'inline' && game.doc?.content}
      <p class="mb-0 text-muted">{game.doc.content}</p>

    {:else if game.doc?.kind === 'markdown-local' && game.doc?.mdPath}
      <!-- Markdown locale da /static/docs/... -->
      <MarkdownRenderer src={`/docs/${game.doc.mdPath}`} isUrl={true} />

    {:else if game.doc?.kind === 'markdown-remote' && game.doc?.url}
      <!-- README remoto dal repository GitHub, con fallback locale -->
      <MarkdownRenderer
        src={game.doc.url}
        isUrl={true}
        fallbackSrc={game.doc.fallbackMdPath ? `/docs/${game.doc.fallbackMdPath}` : undefined}
        fallbackIsUrl={true}
        assetsBaseUrl={game.doc.assetsBaseUrl}
      />

    {:else}
      <p class="mb-0 text-secondary">Nessuna documentazione disponibile.</p>
    {/if}
  </CardBody>
</Card>
