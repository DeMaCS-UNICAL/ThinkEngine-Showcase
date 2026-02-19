import { s as sanitize_props, r as rest_props, f as fallback, a as spread_attributes, c as clsx, h as escape_html, b as slot, d as bind_props } from "./index2.js";
import { c as classnames } from "./Theme.svelte_svelte_type_style_lang.js";
function Badge($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "ariaLabel",
    "border",
    "class",
    "content",
    "color",
    "href",
    "indicator",
    "pill",
    "positioned",
    "placement",
    "shadow",
    "theme"
  ]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let ariaLabel = fallback($$props["ariaLabel"], "");
    let border = fallback($$props["border"], false);
    let className = fallback($$props["class"], "");
    let content = fallback($$props["content"], "");
    let color = fallback($$props["color"], "secondary");
    let href = fallback($$props["href"], "");
    let indicator = fallback($$props["indicator"], false);
    let pill = fallback($$props["pill"], false);
    let positioned = fallback($$props["positioned"], false);
    let placement = fallback($$props["placement"], "top-0 start-100");
    let shadow = fallback($$props["shadow"], false);
    let theme = fallback($$props["theme"], void 0);
    classes = classnames(
      "badge",
      `text-bg-${color}`,
      pill ? "rounded-pill" : false,
      positioned ? "position-absolute translate-middle" : false,
      positioned ? placement : false,
      indicator ? "p-2" : false,
      border ? typeof border === "string" ? border : "border" : false,
      shadow ? typeof shadow === "string" ? shadow : "shadow" : false,
      className
    );
    if (href) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${spread_attributes(
        {
          ...$$restProps,
          href,
          class: clsx(classes),
          "data-bs-theme": theme
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
      $$renderer2.push(`<!--]--> `);
      if (positioned || indicator) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="visually-hidden">${escape_html(ariaLabel)}</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<span${spread_attributes(
        {
          ...$$restProps,
          class: clsx(classes),
          "data-bs-theme": theme
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
      $$renderer2.push(`<!--]--> `);
      if (positioned || indicator) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="visually-hidden">${escape_html(ariaLabel)}</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></span>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, {
      ariaLabel,
      border,
      class: className,
      content,
      color,
      href,
      indicator,
      pill,
      positioned,
      placement,
      shadow,
      theme
    });
  });
}
function Card($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "body", "color", "inverse", "outline", "theme"]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    let body = fallback($$props["body"], false);
    let color = fallback($$props["color"], "");
    let inverse = fallback($$props["inverse"], false);
    let outline = fallback($$props["outline"], false);
    let theme = fallback($$props["theme"], void 0);
    classes = classnames(className, "card", inverse ? "text-white" : false, body ? "card-body" : false, color ? `${outline ? "border" : "bg"}-${color}` : false);
    $$renderer2.push(`<div${spread_attributes(
      {
        ...$$restProps,
        "data-bs-theme": theme,
        class: clsx(classes)
      },
      null
    )}><!---->`);
    slot($$renderer2, $$props, "default", {}, null);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { class: className, body, color, inverse, outline, theme });
  });
}
function CardBody($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    classes = classnames(className, "card-body");
    $$renderer2.push(`<div${spread_attributes({ ...$$restProps, class: clsx(classes) }, null)}><!---->`);
    slot($$renderer2, $$props, "default", {}, null);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { class: className });
  });
}
export {
  Badge as B,
  Card as C,
  CardBody as a
};
