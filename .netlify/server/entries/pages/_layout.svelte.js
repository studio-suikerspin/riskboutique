import { w as head, x as attr } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import { try_get_request_store } from "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { getToolbarSrc } from "@prismicio/client";
import { p as page } from "../../chunks/index3.js";
import { r as repositoryName } from "../../chunks/prismicio.js";
import { e as escape_html } from "../../chunks/context.js";
import { i as initial_base, b as base } from "../../chunks/server.js";
import { r as resolve_route } from "../../chunks/routing.js";
import { P as PrismicImage, a as PrismicLink } from "../../chunks/PrismicLink.js";
function resolve(id, params) {
  const resolved = resolve_route(
    id,
    /** @type {Record<string, string>} */
    params
  );
  {
    const store = try_get_request_store();
    if (store && !store.state.prerendering?.fallback) {
      const after_base = store.event.url.pathname.slice(initial_base.length);
      const segments = after_base.split("/").slice(2);
      const prefix = segments.map(() => "..").join("/") || ".";
      return prefix + resolved;
    }
  }
  return base + resolved;
}
function PrismicPreview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      repositoryName: repositoryName2
    } = $$props;
    const toolbarSrc = getToolbarSrc(repositoryName2);
    head("1aknahp", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<script defer${attr("src", toolbarSrc)}><\/script><!---->`);
    });
  });
}
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { site_settings } = page.data;
    $$renderer2.push(`<header class="main-header svelte-1elxaub"><div class="main-header__inner svelte-1elxaub"><a${attr("href", resolve("/"))}>`);
    PrismicImage($$renderer2, {
      field: site_settings.data.site_logo,
      class: ["main-header__logo"]
    });
    $$renderer2.push(`<!----></a> <nav>`);
    PrismicLink($$renderer2, {
      field: site_settings.data.contact_link,
      class: ["btn", "btn--link"],
      children: ($$renderer3) => {
        $$renderer3.push(`<i class="btn__icon icon-arrow-right"></i> <div class="btn__text">${escape_html(site_settings.data.contact_link.text)}</div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></nav></div></header>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      if (page.data.meta_description) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="description"${attr("content", page.data.meta_description)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (page.data.meta_title) {
        $$renderer3.push("<!--[-->");
        $$renderer3.title(($$renderer4) => {
          $$renderer4.push(`<title>${escape_html(page.data.meta_title)}</title>`);
        });
        $$renderer3.push(`<meta name="og:title"${attr("content", page.data.meta_title)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (page.data.meta_image) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="og:image"${attr("content", page.data.meta_image)}/> <meta name="twitter:card" content="summary_large_image"/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <link rel="stylesheet" href="fonts/icons/iconly.css"/> <link rel="stylesheet" href="fonts/general-sans/general-sans.css"/>`);
    });
    $$renderer2.push(`<main>`);
    Header($$renderer2);
    $$renderer2.push(`<!----> `);
    children($$renderer2);
    $$renderer2.push(`<!----></main> `);
    PrismicPreview($$renderer2, { repositoryName });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
