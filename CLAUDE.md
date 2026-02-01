# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RiskBoutique is a marketing website built with SvelteKit and Prismic CMS. It uses a component-based architecture where content is managed through Prismic slices (content blocks) that are combined to build pages.

## Commands

```bash
# Development (runs Vite dev server + Slice Machine concurrently)
pnpm dev

# Build for production
pnpm build

# Type checking
pnpm check

# Linting and formatting
pnpm lint
pnpm format
```

## Architecture

### Content Management (Prismic)

- **Prismic Client**: `src/lib/prismicio.ts` - Creates the Prismic client and defines route resolvers
- **Custom Types**: `customtypes/` - Prismic document type definitions (homepage, page, header, footer, etc.)
- **Slices**: `src/lib/slices/` - Content block components managed by Slice Machine
  - Each slice has: `index.svelte` (component), `model.json` (schema), `mocks.json` (preview data)
  - Slice mapping: `src/lib/slices/index.ts` - Maps Prismic slice types to Svelte components
- **Generated Types**: `src/prismicio-types.d.ts` - Auto-generated TypeScript types for Prismic content

### Routing

- Routes live in `src/routes/`
- `[[preview=preview]]/` directory enables Prismic preview mode (prerendered routes + server-rendered `/preview/` routes)
- Page data is fetched in `+page.server.ts` files using the Prismic client
- Layout data (header, footer, settings) is loaded in `src/routes/+layout.server.ts`

### Rendering Pages

Pages use Prismic's `SliceZone` component to render content:
```svelte
<SliceZone slices={data.page.data.slices} {components} />
```

### Styling

- **Tailwind CSS v4** with Vite plugin
- **Global styles**: `src/app.css` - Contains CSS variables, typography scale, utility classes
- **Component styles**: Scoped SCSS in Svelte components using `<style lang="scss">`
- **CSS Variables**: `--color-*` for colors, `--size-*` for responsive sizing, `--z-*` for z-index

### Key Libraries

- **GSAP**: Animation library with ScrollTrigger - import from `$lib/gsap.ts` (handles browser-only registration)
- **Swiper**: Carousel/slider component
- **svelte-sonner**: Toast notifications

## Slice Development

When creating or modifying slices:
1. Use Slice Machine UI (`pnpm slicemachine`) to create/edit slice models
2. Component receives props via `$props()` with type `SliceComponentProps<Content.SliceNameSlice>`
3. Use `PrismicRichText` component for rich text fields
4. Include `data-slice-type` and `data-slice-variation` attributes on section element

## Deployment

Deployed to Netlify using `@sveltejs/adapter-netlify`. Configuration in `netlify.toml`.
