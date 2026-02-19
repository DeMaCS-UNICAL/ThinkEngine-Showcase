import { s as sanitize_props, r as rest_props, f as fallback, a as spread_attributes, c as clsx, b as slot, d as bind_props, i as attr, a7 as ensure_array_like, h as escape_html } from "../../chunks/index2.js";
import "clsx";
import { c as classnames, B as Button, R as Row, C as Col } from "../../chunks/Theme.svelte_svelte_type_style_lang.js";
import { C as Card, B as Badge, a as CardBody } from "../../chunks/CardBody.js";
function CardText($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    classes = classnames(className, "card-text");
    $$renderer2.push(`<p${spread_attributes({ ...$$restProps, class: clsx(classes) }, null)}><!---->`);
    slot($$renderer2, $$props, "default", {}, null);
    $$renderer2.push(`<!----></p>`);
    bind_props($$props, { class: className });
  });
}
function CardTitle($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    classes = classnames(className, "card-title");
    $$renderer2.push(`<h5${spread_attributes({ ...$$restProps, class: clsx(classes) }, null)}><!---->`);
    slot($$renderer2, $$props, "default", {}, null);
    $$renderer2.push(`<!----></h5>`);
    bind_props($$props, { class: className });
  });
}
function GameCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let game = $$props["game"];
    let clickable = fallback($$props["clickable"], true);
    const fallback$1 = "/images/placeholder-game.png";
    const thumbnailSrc = game.thumbnail && game.thumbnail.trim() !== "" ? game.thumbnail : fallback$1;
    Card($$renderer2, {
      class: "gamecard h-100 d-flex flex-column bg-dark text-light border-0 rounded-4 shadow-sm overflow-hidden",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="hero position-relative svelte-n3ft5o">`);
        if (clickable) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<a class="stretched-link"${attr("href", `/games/${game.slug}`)}${attr("aria-label", `Vai a ${game.title}`)}></a>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> <img class="hero-img svelte-n3ft5o"${attr("alt", game.title)}${attr("src", thumbnailSrc)} loading="lazy"/> <div class="hero-overlay svelte-n3ft5o"></div> <div class="hero-tags d-flex flex-wrap gap-2 svelte-n3ft5o"><!--[-->`);
        const each_array = ensure_array_like(game.tags);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let t = each_array[$$index];
          Badge($$renderer3, {
            color: "secondary",
            pill: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(t)}`);
            },
            $$slots: { default: true }
          });
        }
        $$renderer3.push(`<!--]--></div> <div class="hero-title svelte-n3ft5o"><h3 class="h5 m-0">${escape_html(game.title)}</h3> <small class="text-white-50">ThinkEngine ${escape_html(game.thinkEngineVersion)}</small></div></div> `);
        CardBody($$renderer3, {
          class: "d-flex flex-column pt-3",
          children: ($$renderer4) => {
            CardTitle($$renderer4, {
              tag: "h5",
              class: "visually-hidden",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(game.title)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            CardText($$renderer4, {
              class: "text-muted mb-3",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(game.short)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <div class="mt-auto d-flex align-items-center justify-content-between"><div class="d-flex align-items-center gap-2"><i class="bi bi-cpu"></i> <small class="text-secondary">ThinkEngine ${escape_html(game.thinkEngineVersion)}</small></div> `);
            if (clickable) {
              $$renderer4.push("<!--[-->");
              Button($$renderer4, {
                tag: "a",
                href: `/games/${game.slug}`,
                color: "light",
                size: "sm",
                outline: true,
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->Dettagli <i class="bi bi-arrow-right-short ms-1"></i>`);
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer4.push("<!--[!-->");
              Button($$renderer4, {
                color: "light",
                size: "sm",
                outline: true,
                disabled: true,
                title: "Dettaglio non ancora disponibile",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->Dettagli <i class="bi bi-lock ms-1"></i>`);
                },
                $$slots: { default: true }
              });
            }
            $$renderer4.push(`<!--]--></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    bind_props($$props, { game, clickable });
  });
}
function GameGrid($$renderer, $$props) {
  let games = fallback($$props["games"], () => [], true);
  Row($$renderer, {
    class: "g-4",
    children: ($$renderer2) => {
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(games);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let game = each_array[$$index];
        Col($$renderer2, {
          md: "6",
          lg: "4",
          children: ($$renderer3) => {
            GameCard($$renderer3, { game });
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  bind_props($$props, { games });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    $$renderer2.push(`<section class="py-2"><div class="mb-4"><h1 class="h3 mb-1">Benvenuto nella vetrina</h1> <p class="text-muted mb-0">Esplora i nostri prototipi. Il dettaglio progetto arriverà a breve.</p></div> `);
    GameGrid($$renderer2, { games: data.games, clickable: false });
    $$renderer2.push(`<!----></section>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
