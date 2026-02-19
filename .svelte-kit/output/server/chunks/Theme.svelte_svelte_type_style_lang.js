import { s as sanitize_props, r as rest_props, f as fallback, a as spread_attributes, c as clsx, h as escape_html, b as slot, d as bind_props } from "./index2.js";
import { w as writable } from "./index.js";
function isObject(value) {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
}
function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : `col-${colWidth}`;
  } else if (colSize === "auto") {
    return isXs ? "col-auto" : `col-${colWidth}-auto`;
  }
  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
}
function toClassName(value) {
  let result = "";
  if (typeof value === "string" || typeof value === "number") {
    result += value;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      result = value.map(toClassName).filter(Boolean).join(" ");
    } else {
      for (let key in value) {
        if (value[key]) {
          result && (result += " ");
          result += key;
        }
      }
    }
  }
  return result;
}
const classnames = (...args) => args.map(toClassName).filter(Boolean).join(" ");
function Button($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "active",
    "block",
    "content",
    "close",
    "color",
    "disabled",
    "href",
    "inner",
    "outline",
    "size",
    "value"
  ]);
  $$renderer.component(($$renderer2) => {
    let ariaLabel, classes, defaultAriaLabel;
    let className = fallback($$props["class"], "");
    let active = fallback($$props["active"], false);
    let block = fallback($$props["block"], false);
    let content = fallback($$props["content"], "");
    let close = fallback($$props["close"], false);
    let color = fallback($$props["color"], "secondary");
    let disabled = fallback($$props["disabled"], false);
    let href = fallback($$props["href"], "");
    let inner = fallback($$props["inner"], void 0);
    let outline = fallback($$props["outline"], false);
    let size = fallback($$props["size"], "");
    let value = fallback($$props["value"], "");
    ariaLabel = $$sanitized_props["aria-label"];
    classes = classnames(className, close ? "btn-close" : "btn", close || `btn${outline ? "-outline" : ""}-${color}`, size ? `btn-${size}` : false, block ? "d-block w-100" : false, { active });
    defaultAriaLabel = close ? "Close" : null;
    if (href) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${spread_attributes(
        {
          ...$$restProps,
          class: clsx(classes),
          href,
          "aria-label": ariaLabel || defaultAriaLabel
        },
        null,
        { disabled }
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
      $$renderer2.push(`<!--]--></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button${spread_attributes(
        {
          ...$$restProps,
          class: clsx(classes),
          disabled,
          value,
          "aria-label": ariaLabel || defaultAriaLabel
        },
        null
      )}><!---->`);
      slot($$renderer2, $$props, "default", {}, () => {
        if (content) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(content)}`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<!---->`);
          slot($$renderer2, $$props, "default", {}, null);
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]-->`);
      });
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, {
      class: className,
      active,
      block,
      content,
      close,
      color,
      disabled,
      href,
      inner,
      outline,
      size,
      value
    });
  });
}
function Col($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "xs", "sm", "md", "lg", "xl", "xxl"]);
  $$renderer.component(($$renderer2) => {
    let className = fallback($$props["class"], "");
    let xs = fallback($$props["xs"], void 0);
    let sm = fallback($$props["sm"], void 0);
    let md = fallback($$props["md"], void 0);
    let lg = fallback($$props["lg"], void 0);
    let xl = fallback($$props["xl"], void 0);
    let xxl = fallback($$props["xxl"], void 0);
    const colClasses = [];
    const lookup = { xs, sm, md, lg, xl, xxl };
    Object.keys(lookup).forEach((colWidth) => {
      const columnProp = lookup[colWidth];
      if (!columnProp && columnProp !== "") {
        return;
      }
      const isXs = colWidth === "xs";
      if (isObject(columnProp)) {
        const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
        const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
        if (columnProp.size || columnProp.size === "") {
          colClasses.push(colClass);
        }
        if (columnProp.push) {
          colClasses.push(`push${colSizeInterfix}${columnProp.push}`);
        }
        if (columnProp.pull) {
          colClasses.push(`pull${colSizeInterfix}${columnProp.pull}`);
        }
        if (columnProp.offset) {
          colClasses.push(`offset${colSizeInterfix}${columnProp.offset}`);
        }
        if (columnProp.order) {
          colClasses.push(`order${colSizeInterfix}${columnProp.order}`);
        }
      } else {
        colClasses.push(getColumnSizeClass(isXs, colWidth, columnProp));
      }
    });
    if (!colClasses.length) {
      colClasses.push("col");
    }
    if (className) {
      colClasses.push(className);
    }
    $$renderer2.push(`<div${spread_attributes({ ...$$restProps, class: clsx(colClasses.join(" ")) }, null)}><!---->`);
    slot($$renderer2, $$props, "default", {}, null);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { class: className, xs, sm, md, lg, xl, xxl });
  });
}
function Row($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "noGutters", "form", "cols", "inner"]);
  $$renderer.component(($$renderer2) => {
    let classes;
    let className = fallback($$props["class"], "");
    let noGutters = fallback($$props["noGutters"], false);
    let form = fallback($$props["form"], false);
    let cols = fallback($$props["cols"], 0);
    let inner = fallback($$props["inner"], void 0);
    function getCols(cols2) {
      const colsValue = parseInt(cols2);
      if (!isNaN(colsValue)) {
        if (colsValue > 0) {
          return [`row-cols-${colsValue}`];
        }
      } else if (typeof cols2 === "object") {
        return ["xs", "sm", "md", "lg", "xl"].map((colWidth) => {
          const isXs = colWidth === "xs";
          const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
          const value = cols2[colWidth];
          if (typeof value === "number" && value > 0) {
            return `row-cols${colSizeInterfix}${value}`;
          }
          return null;
        }).filter((value) => !!value);
      }
      return [];
    }
    classes = classnames(className, noGutters ? "gx-0" : null, form ? "form-row" : "row", ...getCols(cols));
    $$renderer2.push(`<div${spread_attributes({ ...$$restProps, class: clsx(classes) }, null)}><!---->`);
    slot($$renderer2, $$props, "default", {}, null);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { class: className, noGutters, form, cols, inner });
  });
}
const colorMode = writable(getInitialColorMode());
colorMode.subscribe((mode) => useColorMode(mode));
function getInitialColorMode() {
  const currentTheme = globalThis.document?.documentElement.getAttribute("data-bs-theme") || "light";
  const prefersDarkMode = typeof globalThis.window?.matchMedia === "function" ? globalThis.window?.matchMedia("(prefers-color-scheme: dark)").matches : false;
  return currentTheme === "dark" || currentTheme === "auto" && prefersDarkMode ? "dark" : "light";
}
function useColorMode(element, mode) {
  let target = element;
  if (arguments.length === 1) {
    target = globalThis.document?.documentElement;
    if (!target) {
      return;
    }
    mode = element;
    colorMode.update(() => mode);
  }
  target.setAttribute("data-bs-theme", mode);
}
export {
  Button as B,
  Col as C,
  Row as R,
  classnames as c
};
