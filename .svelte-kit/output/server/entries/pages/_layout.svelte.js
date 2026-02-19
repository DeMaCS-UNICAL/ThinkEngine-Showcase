import { s as sanitize_props, r as rest_props, f as fallback, a as spread_attributes, c as clsx, b as slot, d as bind_props, e as setContext, g as spread_props, h as escape_html, i as attr } from "../../chunks/index2.js";
import "clsx";
import { c as classnames, B as Button, R as Row, C as Col } from "../../chunks/Theme.svelte_svelte_type_style_lang.js";
function Container($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "sm", "md", "lg", "xl", "xxl", "fluid"]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    let sm = fallback($$props["sm"], void 0);
    let md = fallback($$props["md"], void 0);
    let lg = fallback($$props["lg"], void 0);
    let xl = fallback($$props["xl"], void 0);
    let xxl = fallback($$props["xxl"], void 0);
    let fluid = fallback($$props["fluid"], false);
    classes = classnames(className, {
      "container-sm": sm,
      "container-md": md,
      "container-lg": lg,
      "container-xl": xl,
      "container-xxl": xxl,
      "container-fluid": fluid,
      container: !sm && !md && !lg && !xl && !xxl && !fluid
    });
    $$renderer2.push(`<div${spread_attributes({ ...$$restProps, class: clsx(classes) }, null)}><!---->`);
    slot($$renderer2, $$props, "default", {}, null);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { class: className, sm, md, lg, xl, xxl, fluid });
  });
}
function Navbar($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "container",
    "color",
    "dark",
    "expand",
    "fixed",
    "light",
    "sticky",
    "theme"
  ]);
  $$renderer.component(($$renderer2) => {
    let classes;
    setContext("navbar", { inNavbar: true });
    let className = fallback($$props["class"], "");
    let container = fallback($$props["container"], "fluid");
    let color = fallback($$props["color"], "");
    let dark = fallback($$props["dark"], false);
    let expand = fallback($$props["expand"], "");
    let fixed = fallback($$props["fixed"], "");
    let light = fallback($$props["light"], false);
    let sticky = fallback($$props["sticky"], "");
    let theme = fallback($$props["theme"], null);
    let containerProps = {
      sm: container === "sm",
      md: container === "md",
      lg: container === "lg",
      xl: container === "xl",
      xxl: container === "xxl",
      fluid: container === "fluid"
    };
    function getExpandClass(expand2) {
      if (expand2 === false) {
        return false;
      }
      if (expand2 === true || expand2 === "xs") {
        return "navbar-expand";
      }
      return `navbar-expand-${expand2}`;
    }
    theme = dark ? "dark" : light ? "light" : theme;
    classes = classnames(className, "navbar", getExpandClass(expand), {
      [`bg-${color}`]: color,
      [`fixed-${fixed}`]: fixed,
      [`sticky-${sticky}`]: sticky
    });
    $$renderer2.push(`<nav${spread_attributes(
      {
        ...$$restProps,
        class: clsx(classes),
        "data-bs-theme": theme
      },
      null
    )}>`);
    if (container) {
      $$renderer2.push("<!--[-->");
      Container($$renderer2, spread_props([
        containerProps,
        {
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->`);
            slot($$renderer3, $$props, "default", {}, null);
            $$renderer3.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!---->`);
      slot($$renderer2, $$props, "default", {}, null);
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></nav>`);
    bind_props($$props, {
      class: className,
      container,
      color,
      dark,
      expand,
      fixed,
      light,
      sticky,
      theme
    });
  });
}
function NavbarBrand($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "href"]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    let href = fallback($$props["href"], "/");
    classes = classnames(className, "navbar-brand");
    $$renderer2.push(`<a${spread_attributes({ ...$$restProps, class: clsx(classes), href }, null)}><!---->`);
    slot($$renderer2, $$props, "default", {}, null);
    $$renderer2.push(`<!----></a>`);
    bind_props($$props, { class: className, href });
  });
}
function AppNavbar($$renderer, $$props) {
  let brand = fallback($$props["brand"], "Game Showcase");
  let brandHref = fallback($$props["brandHref"], "/");
  Navbar($$renderer, {
    class: "navbar-dark bg-dark sticky-top shadow-sm",
    children: ($$renderer2) => {
      Container($$renderer2, {
        class: "d-flex justify-content-between align-items-center",
        children: ($$renderer3) => {
          NavbarBrand($$renderer3, {
            href: brandHref,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(brand)}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Button($$renderer3, {
            color: "primary",
            class: "d-flex align-items-center gap-2",
            children: ($$renderer4) => {
              $$renderer4.push(`<i class="bi bi-journal-text"></i> ThinkEngine Docs`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  bind_props($$props, { brand, brandHref });
}
function AppFooter($$renderer, $$props) {
  let githubUrl = fallback($$props["githubUrl"], "https://github.com/tuo-username/tuo-repo");
  $$renderer.push(`<footer class="bg-dark border-top border-secondary mt-5 py-3">`);
  Container($$renderer, {
    children: ($$renderer2) => {
      Row($$renderer2, {
        class: "align-items-center",
        children: ($$renderer3) => {
          Col($$renderer3, {
            class: "d-flex align-items-center gap-2 text-light small",
            children: ($$renderer4) => {
              $$renderer4.push(`<img src="/images/demacs-logo.png" alt="DeMaCS Logo" style="height: 24px; width: auto;"/> <span>DeMaCS, Dept. of Mathematics and Computer Science - UNICAL</span>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Col($$renderer3, {
            class: "text-end",
            children: ($$renderer4) => {
              $$renderer4.push(`<a${attr("href", githubUrl)} target="_blank" rel="noopener noreferrer" class="text-light fs-4"><i class="bi bi-github"></i></a>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></footer>`);
  bind_props($$props, { githubUrl });
}
function _layout($$renderer, $$props) {
  AppNavbar($$renderer, { brand: "Game Showcase", brandHref: "/" });
  $$renderer.push(`<!----> <div class="bg-dark text-light min-vh-100 d-flex flex-column"><main class="container py-4 flex-grow-1"><!---->`);
  slot($$renderer, $$props, "default", {}, null);
  $$renderer.push(`<!----></main> `);
  AppFooter($$renderer, { githubUrl: "https://github.com/tuo-username/tuo-repo" });
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
