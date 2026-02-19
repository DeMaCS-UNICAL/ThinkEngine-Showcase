export interface GameDoc {
  kind: 'inline' | 'markdown-local' | 'markdown-remote';
  // inline
  content?: string;
  // markdown-local: nome file dentro static/docs/
  mdPath?: string;
  // markdown-remote: URL assoluto del README remoto (raw)
  url?: string;
  // fallback locale in caso di errore sulla remota
  fallbackMdPath?: string;
  // base per risolvere immagini relative (solo per markdown remoti)
  assetsBaseUrl?: string;
}

export interface Game {
  // Slug usato nel routing: /games/[slug]
  slug: string;

  // Nome del progetto (colonna "Project" del README principale ThinkEngine-Showcase)
  title: string;

  // Testo breve per la card (di solito uguale a thinkEngineUsage)
  short: string;

  // Versione di ThinkEngine (colonna "ThinkEngine version")
  thinkEngineVersion: string;

  // Descrizione d'uso di ThinkEngine (colonna "ThinkEngine usage")
  thinkEngineUsage: string;

  // URL della repository GitHub (colonna "Link")
  repoUrl: string;

  // URL alle istanze di test (colonna "Test istances", opzionale)
  testInstancesUrl?: string;

  // Tag derivati (es. ['ThinkEngine', 'TE 2.0', 'Reactive Brain'])
  tags: string[];

  // Thumbnail opzionale; se mancante usiamo un placeholder
  thumbnail?: string;

  // Documentazione (README remoto + fallback locale)
  doc?: GameDoc;

  // Linguaggi principali del repository (dal GitHub /languages API)
  languages?: string[];
}
