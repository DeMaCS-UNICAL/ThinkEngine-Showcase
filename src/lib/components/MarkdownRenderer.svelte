<script lang="ts">
  import { onMount } from 'svelte';
  import { marked } from 'marked';
  import hljs from 'highlight.js';

  // Sorgente principale
  export let src: string;   // URL file .md o stringa markdown
  export let isUrl: boolean = true;

  // Fallback opzionale: se il primo caricamento fallisce
  export let fallbackSrc: string | undefined = undefined;
  export let fallbackIsUrl: boolean = true;

  // Base per risolvere immagini relative (solo per markdown remoti)
  export let assetsBaseUrl: string | undefined = undefined;

  let htmlContent: string = '<p class="text-secondary">Caricamento...</p>';
  let triedFallback = false;

  // Configura marked per aggiungere "hljs" alle classi dei blocchi di codice
  marked.setOptions({
    highlight: function (code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    },
    langPrefix: 'hljs language-' // 👈 forza "hljs" oltre alla lingua
  });

  function rewriteRelativeImageUrls(md: string, base: string): string {
    // Normalizza base con una singola slash finale
    const normalizedBase = base.replace(/\/+$/, '/') ;

    return md.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
      const raw = url.trim();

      // Se è già assoluto (http, https, data, ecc.) o un anchor (#qualcosa), non toccarlo
      if (/^[a-z]+:/i.test(raw) || raw.startsWith('#')) {
        return match;
      }

      // Path relativo: rimuovi eventuale slash iniziale
      let path = raw;
      if (path.startsWith('/')) {
        path = path.slice(1);
      }

      const full = normalizedBase + path;
      return `![${alt}](${full})`;
    });
  }

  async function loadMarkdown(currentSrc: string, currentIsUrl: boolean, useAssetsBase: boolean) {
    try {
      let md: string;

      if (currentIsUrl) {
        const res = await fetch(currentSrc);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} su ${currentSrc}`);
        }
        md = await res.text();
      } else {
        md = currentSrc;
      }

      // Se abbiamo una base asset e stiamo caricando la sorgente principale,
      // riscriviamo le immagini relative
      if (useAssetsBase && assetsBaseUrl) {
        md = rewriteRelativeImageUrls(md, assetsBaseUrl);
      }

      htmlContent = marked.parse(md);

      // Dopo aver iniettato l'HTML, chiediamo a highlight.js di rielaborare
      requestAnimationFrame(() => {
        document.querySelectorAll('pre code').forEach((el) => {
          hljs.highlightElement(el as HTMLElement);
        });
      });
    } catch (err) {
      console.error('Errore nel caricamento markdown:', err);

      if (!triedFallback && fallbackSrc) {
        triedFallback = true;
        htmlContent = '<p class="text-secondary">Caricamento documentazione di fallback...</p>';
        await loadMarkdown(fallbackSrc, fallbackIsUrl, false);
      } else {
        htmlContent = '<p class="text-danger">Errore nel caricamento markdown</p>';
      }
    }
  }

  onMount(async () => {
    // Sulla sorgente principale usiamo la base per le immagini (se c'è)
    await loadMarkdown(src, isUrl, true);
  });
</script>

<div class="markdown-body">
  {@html htmlContent}
</div>

<style>
  /* Wrapper */
  :global(.markdown-body) {
    line-height: 1.6;
  }

  :global(.markdown-body h1),
  :global(.markdown-body h2),
  :global(.markdown-body h3) {
    border-bottom: 1px solid rgba(255,255,255,.1);
    padding-bottom: .3rem;
    margin-top: 1.2rem;
  }

  :global(.markdown-body pre) {
    background: #1e1e1e;
    padding: .75rem;
    border-radius: .5rem;
    overflow-x: auto;
  }

  :global(.markdown-body code) {
    font-family: monospace;
  }

  :global(.markdown-body a) {
    color: #4dabf7;
    text-decoration: none;
  }

  :global(.markdown-body a:hover) {
    text-decoration: underline;
  }

  /* 👇 immagini responsive dal README */
  :global(.markdown-body img) {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0.75rem auto;
  }
</style>


