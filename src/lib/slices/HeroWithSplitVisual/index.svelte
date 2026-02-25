<script lang="ts">
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicImage } from '@prismicio/svelte'
	import { onMount } from 'svelte'
	import { Gradient } from '$lib/gradients'

	type Props = SliceComponentProps<Content.HeroWithSplitVisualSlice>

	const { slice }: Props = $props()

	function setHeightToVisualViewport(node) {
		if (window.visualViewport) {
			node.setAttribute(
				'style',
				`height: ${window.visualViewport.height}px`
			)

			return
		}

		node.setAttribute('style', `height: 100svh`)
	}

	onMount(() => {
		const gradient = new Gradient()

		gradient.initGradient('#gradient-canvas')
	})
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="hero-advisory"
>
	<canvas
		id="gradient-canvas"
		class="hero-advisory__gradient"
		data-transition-in
	></canvas>
	<div class="container medium">
		<div
			class="hero-advisory__content"
			{@attach setHeightToVisualViewport}
		>
			<div class="hero-advisory__title-wrap">
				<h1 class="hero-advisory__title">Advisory</h1>
				<div class="hero-advisory__subtitle h4">
					{slice.primary.page_title}
				</div>
			</div>
			<div class="hero-advisory__visual">
				<PrismicImage field={slice.primary.visual} />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.hero-advisory {
		position: relative;
		overflow: hidden;

		&__gradient {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 0;
			object-fit: cover;
			inset: 0%;

			--gradient-color-1: #b2c1bd;
			--gradient-color-2: #0e4f63;
			--gradient-color-3: #0e4f63;
			--gradient-color-4: #0e4f63;
		}

		&__content {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: start;
			justify-content: center;
			gap: 2.5rem;
			position: relative;
			z-index: 2;

			@media (min-width: 992px) {
				flex-direction: row;
				gap: 2.5rem;
				align-items: center;
				justify-content: space-between;
			}
		}

		&__title-wrap {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			color: var(--color-snow-white);

			@media (min-width: 768px) {
				gap: 2.5rem;
			}
		}

		&__subtitle {
			color: rgba(249, 249, 248, 0.75);
		}

		&__visual :global img {
			width: 100%;
			height: auto;
			max-width: 35.75rem;
			// max-height: 572px;
			object-fit: cover;
			border-radius: 0.5rem;
			border: 1px solid var(--color-snow-white);
		}
	}
</style>
