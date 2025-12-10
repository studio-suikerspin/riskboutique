import { x as attr, O as attributes, z as attr_class, J as clsx, P as ensure_array_like, Q as spread_props, G as stringify } from "./index2.js";
import "clsx";
import { P as PrismicImage, a as PrismicLink } from "./PrismicLink.js";
import { asTree } from "@prismicio/client/richtext";
import { isFilled } from "@prismicio/client";
import { e as escape_html } from "./context.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function PrismicEmbed($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { field } = $$props;
    if (isFilled.embed(field)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attr("data-oembed", field.embed_url)}${attr("data-oembed-type", field.type)}${attr("data-oembed-provider", field.provider_name)}>${html(field.html)}</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function DefaultComponent($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { node, children } = $$props;
    const dirProp = "direction" in node && node.direction === "rtl" ? { direction: "rtl" } : {};
    if (node.type === "heading1") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h1${attributes({ ...dirProp })}>`);
      children($$renderer2);
      $$renderer2.push(`<!----></h1>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (node.type === "heading2") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h2${attributes({ ...dirProp })}>`);
        children($$renderer2);
        $$renderer2.push(`<!----></h2>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (node.type === "heading3") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<h3${attributes({ ...dirProp })}>`);
          children($$renderer2);
          $$renderer2.push(`<!----></h3>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (node.type === "heading4") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<h4${attributes({ ...dirProp })}>`);
            children($$renderer2);
            $$renderer2.push(`<!----></h4>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (node.type === "heading5") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<h5${attributes({ ...dirProp })}>`);
              children($$renderer2);
              $$renderer2.push(`<!----></h5>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (node.type === "heading6") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<h6${attributes({ ...dirProp })}>`);
                children($$renderer2);
                $$renderer2.push(`<!----></h6>`);
              } else {
                $$renderer2.push("<!--[!-->");
                if (node.type === "paragraph") {
                  $$renderer2.push("<!--[-->");
                  $$renderer2.push(`<p${attributes({ ...dirProp })}>`);
                  children($$renderer2);
                  $$renderer2.push(`<!----></p>`);
                } else {
                  $$renderer2.push("<!--[!-->");
                  if (node.type === "preformatted") {
                    $$renderer2.push("<!--[-->");
                    $$renderer2.push(`<pre>`);
                    children($$renderer2);
                    $$renderer2.push(`<!----></pre>`);
                  } else {
                    $$renderer2.push("<!--[!-->");
                    if (node.type === "strong") {
                      $$renderer2.push("<!--[-->");
                      $$renderer2.push(`<strong>`);
                      children($$renderer2);
                      $$renderer2.push(`<!----></strong>`);
                    } else {
                      $$renderer2.push("<!--[!-->");
                      if (node.type === "em") {
                        $$renderer2.push("<!--[-->");
                        $$renderer2.push(`<em>`);
                        children($$renderer2);
                        $$renderer2.push(`<!----></em>`);
                      } else {
                        $$renderer2.push("<!--[!-->");
                        if (node.type === "list-item") {
                          $$renderer2.push("<!--[-->");
                          $$renderer2.push(`<li${attributes({ ...dirProp })}>`);
                          children($$renderer2);
                          $$renderer2.push(`<!----></li>`);
                        } else {
                          $$renderer2.push("<!--[!-->");
                          if (node.type === "o-list-item") {
                            $$renderer2.push("<!--[-->");
                            $$renderer2.push(`<li${attributes({ ...dirProp })}>`);
                            children($$renderer2);
                            $$renderer2.push(`<!----></li>`);
                          } else {
                            $$renderer2.push("<!--[!-->");
                            if (node.type === "group-list-item") {
                              $$renderer2.push("<!--[-->");
                              $$renderer2.push(`<ul>`);
                              children($$renderer2);
                              $$renderer2.push(`<!----></ul>`);
                            } else {
                              $$renderer2.push("<!--[!-->");
                              if (node.type === "group-o-list-item") {
                                $$renderer2.push("<!--[-->");
                                $$renderer2.push(`<ol>`);
                                children($$renderer2);
                                $$renderer2.push(`<!----></ol>`);
                              } else {
                                $$renderer2.push("<!--[!-->");
                                if (node.type === "image") {
                                  $$renderer2.push("<!--[-->");
                                  $$renderer2.push(`<p class="block-img">`);
                                  PrismicImage($$renderer2, { field: node });
                                  $$renderer2.push(`<!----></p>`);
                                } else {
                                  $$renderer2.push("<!--[!-->");
                                  if (node.type === "embed") {
                                    $$renderer2.push("<!--[-->");
                                    PrismicEmbed($$renderer2, { field: node.oembed });
                                  } else {
                                    $$renderer2.push("<!--[!-->");
                                    if (node.type === "hyperlink") {
                                      $$renderer2.push("<!--[-->");
                                      PrismicLink($$renderer2, {
                                        field: node.data,
                                        children: ($$renderer3) => {
                                          children($$renderer3);
                                          $$renderer3.push(`<!---->`);
                                        },
                                        $$slots: { default: true }
                                      });
                                    } else {
                                      $$renderer2.push("<!--[!-->");
                                      if (node.type === "label") {
                                        $$renderer2.push("<!--[-->");
                                        $$renderer2.push(`<span${attr_class(clsx(node.data.label))}>`);
                                        children($$renderer2);
                                        $$renderer2.push(`<!----></span>`);
                                      } else {
                                        $$renderer2.push("<!--[!-->");
                                        $$renderer2.push(`<!--[-->`);
                                        const each_array = ensure_array_like(node.text.split("\n"));
                                        for (let index = 0, $$length = each_array.length; index < $$length; index++) {
                                          let line = each_array[index];
                                          if (index > 0) {
                                            $$renderer2.push("<!--[-->");
                                            $$renderer2.push(`<br/>`);
                                          } else {
                                            $$renderer2.push("<!--[!-->");
                                          }
                                          $$renderer2.push(`<!--]-->${escape_html(line)}`);
                                        }
                                        $$renderer2.push(`<!--]-->`);
                                      }
                                      $$renderer2.push(`<!--]-->`);
                                    }
                                    $$renderer2.push(`<!--]-->`);
                                  }
                                  $$renderer2.push(`<!--]-->`);
                                }
                                $$renderer2.push(`<!--]-->`);
                              }
                              $$renderer2.push(`<!--]-->`);
                            }
                            $$renderer2.push(`<!--]-->`);
                          }
                          $$renderer2.push(`<!--]-->`);
                        }
                        $$renderer2.push(`<!--]-->`);
                      }
                      $$renderer2.push(`<!--]-->`);
                    }
                    $$renderer2.push(`<!--]-->`);
                  }
                  $$renderer2.push(`<!--]-->`);
                }
                $$renderer2.push(`<!--]-->`);
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Serialize_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { components: components2, children } = $$props;
    const CHILD_TYPE_RENAMES = {
      "list-item": "listItem",
      "o-list-item": "oListItem",
      "group-list-item": "list",
      "group-o-list-item": "oList"
    };
    function getComponent(child) {
      return components2[CHILD_TYPE_RENAMES[child.type] || child.type] || DefaultComponent;
    }
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(children);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let child = each_array[$$index];
      const Component = getComponent(child);
      $$renderer2.push(`<!---->`);
      Component($$renderer2, {
        node: child.node,
        children: ($$renderer3) => {
          if (child.children.length > 0) {
            $$renderer3.push("<!--[-->");
            Serialize_1($$renderer3, { children: child.children, components: components2 });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function PrismicRichText($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { field, components: components2 = {} } = $$props;
    const children = asTree(field).children;
    Serialize_1($$renderer2, { children, components: components2 });
  });
}
function TodoComponent($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    "slice_type" in slice ? slice.slice_type : slice.type;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function SliceZone($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      slices = [],
      components: components2 = {},
      context = {},
      defaultComponent = void 0
    } = $$props;
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(slices);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let slice = each_array[index];
      const type = "slice_type" in slice ? slice.slice_type : slice.type;
      const Component = components2[type] || defaultComponent;
      if (Component) {
        $$renderer2.push("<!--[-->");
        if (slice.__mapped) {
          $$renderer2.push("<!--[-->");
          const { __mapped, ...mappedProps } = slice;
          $$renderer2.push(`<!---->`);
          Component($$renderer2, spread_props([mappedProps]));
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<!---->`);
          Component($$renderer2, { slice, slices, context, index });
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
        TodoComponent($$renderer2, { slice });
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
["SCREEN", "LINEAR_LIGHT"].reduce(
  (hexCode, t, n) => Object.assign(hexCode, {
    [t]: n
  }),
  {}
);
function ComingSoon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section class="coming-soon svelte-cgea5u"${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)}><canvas id="gradient-canvas" class="coming-soon__gradient svelte-cgea5u" data-transition-in=""></canvas> <div class="coming-soon__inner svelte-cgea5u"><div class="coming-soon__centered-content svelte-cgea5u"><div class="taglines svelte-cgea5u"><!--[-->`);
    const each_array = ensure_array_like(slice.primary.tags);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<p class="taglines__tag svelte-cgea5u">${escape_html(item.tag)}</p> <div class="taglines__divider svelte-cgea5u"></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="coming-soon__headline svelte-cgea5u">`);
    PrismicRichText($$renderer2, { field: slice.primary.heading });
    $$renderer2.push(`<!----></div> `);
    if (slice.primary.social_links && slice.primary.social_links.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="social-links svelte-cgea5u"><!--[-->`);
      const each_array_1 = ensure_array_like(slice.primary.social_links);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let link = each_array_1[$$index_1];
        PrismicLink($$renderer2, {
          field: link,
          class: "social-links__link",
          children: ($$renderer3) => {
            $$renderer3.push(`<i${attr_class(`icon-${stringify(link.text)}`, "svelte-cgea5u")}></i>`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="coming-soon__bottom svelte-cgea5u"><div class="bottom-texts svelte-cgea5u"><!--[-->`);
    const each_array_2 = ensure_array_like(slice.primary.bottom_texts);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let text = each_array_2[$$index_2];
      $$renderer2.push(`<div class="bottom-texts__text svelte-cgea5u">`);
      PrismicRichText($$renderer2, { field: text.bottom_text });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="bottom-images svelte-cgea5u"><!--[-->`);
    const each_array_3 = ensure_array_like(slice.primary.images);
    for (let index = 0, $$length = each_array_3.length; index < $$length; index++) {
      let item = each_array_3[index];
      $$renderer2.push(`<div class="bottom-images__image svelte-cgea5u"${attr("data-index", index)}>`);
      PrismicImage($$renderer2, { field: item.image });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></section>`);
  });
}
const components = {
  coming_soon: ComingSoon
};
export {
  SliceZone as S,
  components as c,
  html as h
};
