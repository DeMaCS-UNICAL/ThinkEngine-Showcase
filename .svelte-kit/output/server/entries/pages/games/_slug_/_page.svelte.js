import { s as sanitize_props, r as rest_props, f as fallback, a as spread_attributes, a8 as attr_class, c as clsx, h as escape_html, b as slot, d as bind_props, i as attr, a7 as ensure_array_like } from "../../../../chunks/index2.js";
import "clsx";
import { c as classnames, B as Button, R as Row, C as Col } from "../../../../chunks/Theme.svelte_svelte_type_style_lang.js";
import { B as Badge, C as Card, a as CardBody } from "../../../../chunks/CardBody.js";
import { marked } from "marked";
import hljs from "highlight.js";
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Breadcrumb($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "content", "divider", "listClassName", "style"]);
  $$renderer.component(($$renderer2) => {
    let listClasses, styles;
    let className = fallback($$props["class"], "");
    let content = fallback($$props["content"], "");
    let divider = fallback($$props["divider"], "");
    let listClassName = fallback($$props["listClassName"], "");
    let style = fallback($$props["style"], "");
    listClasses = classnames("breadcrumb", listClassName);
    styles = divider ? `--bs-breadcrumb-divider: '${divider}'; ${style || ""}` : style;
    $$renderer2.push(`<nav${spread_attributes({ style: styles, ...$$restProps, class: clsx(className) }, null)}><ol${attr_class(clsx(listClasses))}>`);
    if (content) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`${escape_html(content)}`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!---->`);
      slot($$renderer2, $$props, "default", {}, null);
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></ol></nav>`);
    bind_props($$props, { class: className, content, divider, listClassName, style });
  });
}
function BreadcrumbItem($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "active", "content"]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    let active = fallback($$props["active"], false);
    let content = fallback($$props["content"], "");
    classes = classnames(className, active ? "active" : false, "breadcrumb-item");
    $$renderer2.push(`<li${spread_attributes(
      {
        ...$$restProps,
        class: clsx(classes),
        "aria-current": active ? "page" : void 0
      },
      null
    )}>`);
    if (content) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`${escape_html(content)}`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!---->`);
      slot($$renderer2, $$props, "default", {}, null);
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></li>`);
    bind_props($$props, { class: className, active, content });
  });
}
function CardHeader($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "tag"]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    let tag = fallback($$props["tag"], "div");
    classes = classnames(className, "card-header");
    if (tag === "h3") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h3${spread_attributes({ ...$$restProps, class: clsx(classes) }, null)}><!---->`);
      slot($$renderer2, $$props, "default", {}, null);
      $$renderer2.push(`<!----></h3>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${spread_attributes({ ...$$restProps, class: clsx(classes) }, null)}><!---->`);
      slot($$renderer2, $$props, "default", {}, null);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { class: className, tag });
  });
}
function ListGroup($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "flush", "horizontal", "numbered", "theme"]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    let flush = fallback($$props["flush"], false);
    let horizontal = fallback($$props["horizontal"], false);
    let numbered = fallback($$props["numbered"], false);
    let theme = fallback($$props["theme"], null);
    classes = classnames(className, "list-group", {
      "list-group-flush": flush,
      "list-group-horizontal": horizontal,
      "list-group-numbered": numbered
    });
    if (numbered) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<ol${spread_attributes(
        {
          ...$$restProps,
          class: clsx(classes),
          "data-bs-theme": theme
        },
        null
      )}><!---->`);
      slot($$renderer2, $$props, "default", {}, null);
      $$renderer2.push(`<!----></ol>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<ul${spread_attributes(
        {
          ...$$restProps,
          class: clsx(classes),
          "data-bs-theme": theme
        },
        null
      )}><!---->`);
      slot($$renderer2, $$props, "default", {}, null);
      $$renderer2.push(`<!----></ul>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { class: className, flush, horizontal, numbered, theme });
  });
}
function ListGroupItem($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "active",
    "disabled",
    "color",
    "action",
    "href",
    "tag"
  ]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    let active = fallback($$props["active"], false);
    let disabled = fallback($$props["disabled"], false);
    let color = fallback($$props["color"], "");
    let action = fallback($$props["action"], false);
    let href = fallback($$props["href"], null);
    let tag = fallback($$props["tag"], null);
    classes = classnames(className, "list-group-item", {
      active,
      disabled,
      "list-group-item-action": action || tag === "button",
      [`list-group-item-${color}`]: color
    });
    if (href) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${spread_attributes(
        {
          ...$$restProps,
          class: clsx(classes),
          href,
          disabled,
          active
        },
        null
      )}><!---->`);
      slot($$renderer2, $$props, "default", {}, null);
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (tag === "button") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<button${spread_attributes(
          {
            ...$$restProps,
            class: clsx(classes),
            type: "button",
            disabled,
            active
          },
          null
        )}><!---->`);
        slot($$renderer2, $$props, "default", {}, null);
        $$renderer2.push(`<!----></button>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<li${spread_attributes({ ...$$restProps, class: clsx(classes), disabled, active }, null)}><!---->`);
        slot($$renderer2, $$props, "default", {}, null);
        $$renderer2.push(`<!----></li>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { class: className, active, disabled, color, action, href, tag });
  });
}
function GameHeader($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let game = $$props["game"];
    const fallback2 = "/images/placeholder-game.png";
    const thumbnailSrc = game.thumbnail && game.thumbnail.trim() !== "" ? game.thumbnail : fallback2;
    $$renderer2.push(`<div class="game-hero position-relative rounded-4 overflow-hidden mb-4 svelte-1n7861h"><img class="hero-img svelte-1n7861h"${attr("alt", game.title)}${attr("src", thumbnailSrc)}/> <div class="hero-overlay svelte-1n7861h"></div> <div class="hero-content svelte-1n7861h"><div class="d-flex flex-wrap gap-2 mb-2"><!--[-->`);
    const each_array = ensure_array_like(game.tags);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let t = each_array[$$index];
      Badge($$renderer2, {
        color: "secondary",
        pill: true,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(t)}`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div> <h1 class="h3 m-0">${escape_html(game.title)}</h1> <div class="text-white-50 mb-3">ThinkEngine ${escape_html(game.thinkEngineVersion)}</div> <div class="d-flex flex-wrap gap-2">`);
    if (game.repoUrl) {
      $$renderer2.push("<!--[-->");
      Button($$renderer2, {
        color: "light",
        outline: true,
        href: game.repoUrl,
        target: "_blank",
        rel: "noopener",
        children: ($$renderer3) => {
          $$renderer3.push(`<i class="bi bi-github me-1"></i> Repository`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (game.testInstancesUrl) {
      $$renderer2.push("<!--[-->");
      Button($$renderer2, {
        color: "info",
        outline: true,
        href: game.testInstancesUrl,
        target: "_blank",
        rel: "noopener",
        children: ($$renderer3) => {
          $$renderer3.push(`<i class="bi bi-collection me-1"></i> Test instances`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    bind_props($$props, { game });
  });
}
function GameMeta($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let game = $$props["game"];
    Card($$renderer2, {
      class: "bg-dark text-light border-0 rounded-4 shadow-sm",
      children: ($$renderer3) => {
        CardHeader($$renderer3, {
          class: "bg-transparent border-secondary fw-semibold",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Dettagli ThinkEngine`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        CardBody($$renderer3, {
          class: "pt-3",
          children: ($$renderer4) => {
            ListGroup($$renderer4, {
              flush: true,
              children: ($$renderer5) => {
                ListGroupItem($$renderer5, {
                  class: "bg-dark text-light d-flex justify-content-between align-items-center",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<span><i class="bi bi-cpu me-2"></i> ThinkEngine version</span> <span class="fw-semibold">${escape_html(game.thinkEngineVersion)}</span>`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                ListGroupItem($$renderer5, {
                  class: "bg-dark text-light d-flex justify-content-between align-items-center",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<span><i class="bi bi-github me-2"></i> Repository</span> `);
                    if (game.repoUrl) {
                      $$renderer6.push("<!--[-->");
                      $$renderer6.push(`<a${attr("href", game.repoUrl)} target="_blank" rel="noopener" class="text-decoration-none text-info">Apri su GitHub</a>`);
                    } else {
                      $$renderer6.push("<!--[!-->");
                      $$renderer6.push(`<span class="text-secondary">N/D</span>`);
                    }
                    $$renderer6.push(`<!--]-->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                if (game.testInstancesUrl) {
                  $$renderer5.push("<!--[-->");
                  ListGroupItem($$renderer5, {
                    class: "bg-dark text-light d-flex justify-content-between align-items-center",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<span><i class="bi bi-collection me-2"></i> Test instances</span> <a${attr("href", game.testInstancesUrl)} target="_blank" rel="noopener" class="text-decoration-none text-info">Apri</a>`);
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$renderer5.push("<!--[!-->");
                }
                $$renderer5.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <div class="mt-4"><div class="mb-2 fw-semibold"><i class="bi bi-info-circle me-2"></i> ThinkEngine usage</div> <p class="text-secondary mb-0">${escape_html(game.thinkEngineUsage)}</p></div> `);
            if (game.languages && game.languages.length > 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="mt-4"><div class="mb-2 fw-semibold"><i class="bi bi-code-slash me-2"></i> Languages</div> <div class="d-flex flex-wrap gap-2"><!--[-->`);
              const each_array = ensure_array_like(game.languages);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let lang = each_array[$$index];
                Badge($$renderer4, {
                  color: "secondary",
                  pill: true,
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(lang)}`);
                  },
                  $$slots: { default: true }
                });
              }
              $$renderer4.push(`<!--]--></div></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    bind_props($$props, { game });
  });
}
function MarkdownRenderer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let src = $$props["src"];
    let isUrl = fallback($$props["isUrl"], true);
    let fallbackSrc = fallback($$props["fallbackSrc"], void 0);
    let fallbackIsUrl = fallback($$props["fallbackIsUrl"], true);
    let assetsBaseUrl = fallback($$props["assetsBaseUrl"], void 0);
    let htmlContent = '<p class="text-secondary">Caricamento...</p>';
    marked.setOptions({
      highlight(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      },
      langPrefix: "hljs language-"
      // 👈 forza "hljs" oltre alla lingua
    });
    $$renderer2.push(`<div class="markdown-body">${html(htmlContent)}</div>`);
    bind_props($$props, { src, isUrl, fallbackSrc, fallbackIsUrl, assetsBaseUrl });
  });
}
function DocBlock($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let game = $$props["game"];
    Card($$renderer2, {
      class: "bg-dark text-light border-0 rounded-4 shadow-sm",
      children: ($$renderer3) => {
        CardHeader($$renderer3, {
          class: "bg-transparent border-secondary fw-semibold d-flex align-items-center gap-2",
          children: ($$renderer4) => {
            $$renderer4.push(`<i class="bi bi-file-earmark-text"></i> Documentazione tecnica`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        CardBody($$renderer3, {
          children: ($$renderer4) => {
            if (game.doc?.kind === "inline" && game.doc?.content) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<p class="mb-0 text-muted">${escape_html(game.doc.content)}</p>`);
            } else {
              $$renderer4.push("<!--[!-->");
              if (game.doc?.kind === "markdown-local" && game.doc?.mdPath) {
                $$renderer4.push("<!--[-->");
                MarkdownRenderer($$renderer4, { src: `/docs/${game.doc.mdPath}`, isUrl: true });
              } else {
                $$renderer4.push("<!--[!-->");
                if (game.doc?.kind === "markdown-remote" && game.doc?.url) {
                  $$renderer4.push("<!--[-->");
                  MarkdownRenderer($$renderer4, {
                    src: game.doc.url,
                    isUrl: true,
                    fallbackSrc: game.doc.fallbackMdPath ? `/docs/${game.doc.fallbackMdPath}` : void 0,
                    fallbackIsUrl: true,
                    assetsBaseUrl: game.doc.assetsBaseUrl
                  });
                } else {
                  $$renderer4.push("<!--[!-->");
                  $$renderer4.push(`<p class="mb-0 text-secondary">Nessuna documentazione disponibile.</p>`);
                }
                $$renderer4.push(`<!--]-->`);
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    bind_props($$props, { game });
  });
}
function _page($$renderer, $$props) {
  let data = $$props["data"];
  const { game } = data;
  Breadcrumb($$renderer, {
    class: "mb-3",
    children: ($$renderer2) => {
      BreadcrumbItem($$renderer2, {
        href: "/",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Home`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      BreadcrumbItem($$renderer2, {
        active: true,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(game.title)}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  GameHeader($$renderer, { game });
  $$renderer.push(`<!----> `);
  Row($$renderer, {
    class: "g-4",
    children: ($$renderer2) => {
      Col($$renderer2, {
        lg: "6",
        children: ($$renderer3) => {
          GameMeta($$renderer3, { game });
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Col($$renderer2, {
        lg: "6",
        children: ($$renderer3) => {
          DocBlock($$renderer3, { game });
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> <div class="mt-4">`);
  Button($$renderer, {
    color: "light",
    outline: true,
    href: "/",
    children: ($$renderer2) => {
      $$renderer2.push(`<i class="bi bi-arrow-left me-1"></i> Torna alla Home`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div>`);
  bind_props($$props, { data });
}
export {
  _page as default
};
