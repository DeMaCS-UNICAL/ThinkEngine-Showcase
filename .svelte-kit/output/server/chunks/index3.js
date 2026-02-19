function slugify(input) {
  return input.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/-{2,}/g, "-");
}
function extractMarkdownLink(cell) {
  const match = cell.match(/\[([^\]]+)\]\(([^)]+)\)/);
  if (!match) return {};
  const [, label, url] = match;
  return { label: label.trim(), url: url.trim() };
}
function buildGithubReadmeInfo(repoUrl) {
  try {
    const url = new URL(repoUrl);
    if (url.hostname !== "github.com") return void 0;
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.length < 2) return void 0;
    const owner = parts[0];
    const repo = parts[1];
    const base = `https://raw.githubusercontent.com/${owner}/${repo}/master/`;
    const readme = `${base}README.md`;
    return { readmeUrl: readme, assetsBaseUrl: base };
  } catch {
    return void 0;
  }
}
function parseThinkEngineShowcaseReadme(md) {
  const lines = md.split(/\r?\n/);
  let headerIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim().toLowerCase();
    if (line.startsWith("|") && line.includes("project") && line.includes("link")) {
      headerIndex = i;
      break;
    }
  }
  if (headerIndex === -1) {
    return [];
  }
  const separatorIndex = headerIndex + 1;
  const games = [];
  for (let i = separatorIndex + 1; i < lines.length; i++) {
    const rawLine = lines[i].trim();
    if (!rawLine.startsWith("|")) break;
    if (rawLine === "|" || rawLine === "") break;
    const trimmed = rawLine.replace(/^\|/, "").replace(/\|$/, "");
    const cells = trimmed.split("|").map((c) => c.trim());
    if (cells.length < 4) {
      continue;
    }
    const projectCell = cells[0];
    const linkCell = cells[1];
    const versionCell = cells[2];
    const usageCell = cells[3];
    const testsCell = cells[4] ?? "";
    const title = projectCell;
    const slug = slugify(title);
    const { url: repoUrl } = extractMarkdownLink(linkCell);
    const { url: testInstancesUrl } = extractMarkdownLink(testsCell);
    const thinkEngineVersion = versionCell;
    const thinkEngineUsage = usageCell;
    if (!repoUrl) {
      continue;
    }
    const tags = ["ThinkEngine"];
    if (thinkEngineVersion && thinkEngineVersion.trim() !== "") {
      tags.push(`TE ${thinkEngineVersion.trim()}`);
    }
    const usageLower = thinkEngineUsage.toLowerCase();
    if (usageLower.includes("reactive brain")) {
      tags.push("Reactive Brain");
    }
    if (usageLower.includes("planner brain")) {
      tags.push("Planner Brain");
    }
    if (usageLower.includes("incremental")) {
      tags.push("Incremental");
    }
    const info = buildGithubReadmeInfo(repoUrl);
    const game = {
      slug,
      title,
      short: thinkEngineUsage,
      thinkEngineVersion,
      thinkEngineUsage,
      repoUrl,
      testInstancesUrl,
      tags,
      thumbnail: void 0,
      doc: info ? {
        kind: "markdown-remote",
        url: info.readmeUrl,
        assetsBaseUrl: info.assetsBaseUrl,
        fallbackMdPath: "prototype-one.md"
      } : {
        kind: "markdown-local",
        mdPath: "prototype-one.md"
      }
    };
    games.push(game);
  }
  return games;
}
class GithubReadmeGameRepository {
  constructor(readmeUrl) {
    this.readmeUrl = readmeUrl;
  }
  cache = null;
  async list() {
    if (this.cache) {
      return this.cache;
    }
    const res = await fetch(this.readmeUrl);
    if (!res.ok) {
      throw new Error(`Impossibile leggere README da ${this.readmeUrl}`);
    }
    const md = await res.text();
    const games = parseThinkEngineShowcaseReadme(md);
    await this.enrichLanguages(games);
    this.cache = games;
    return games;
  }
  async getBySlug(slug) {
    const games = await this.list();
    return games.find((g) => g.slug === slug) ?? null;
  }
  /**
   * Per ogni gioco, se possibile, chiama la GitHub API:
   *   GET /repos/{owner}/{repo}/languages
   * e salva i linguaggi (ordinati per byte desc) in game.languages.
   */
  async enrichLanguages(games) {
    const jobs = games.map(async (game) => {
      const info = this.extractRepoInfo(game.repoUrl);
      if (!info) return;
      try {
        const url = `https://api.github.com/repos/${info.owner}/${info.repo}/languages`;
        const res = await fetch(url);
        if (!res.ok) {
          return;
        }
        const data = await res.json();
        const sorted = Object.entries(data).sort((a, b) => b[1] - a[1]);
        game.languages = sorted.map(([name]) => name);
      } catch (err) {
        console.error("Errore nel recupero lingue GitHub per", game.repoUrl, err);
      }
    });
    await Promise.all(jobs);
  }
  /**
   * Estrae { owner, repo } da un URL GitHub tipo:
   *   https://github.com/OWNER/REPO
   */
  extractRepoInfo(repoUrl) {
    try {
      const url = new URL(repoUrl);
      if (url.hostname !== "github.com") return null;
      const parts = url.pathname.split("/").filter(Boolean);
      if (parts.length < 2) return null;
      const owner = parts[0];
      const repo = parts[1];
      return { owner, repo };
    } catch {
      return null;
    }
  }
}
const README_URL = "https://raw.githubusercontent.com/DeMaCS-UNICAL/ThinkEngine-Showcase/main/README.md";
const gameRepo = new GithubReadmeGameRepository(README_URL);
export {
  gameRepo as g
};
