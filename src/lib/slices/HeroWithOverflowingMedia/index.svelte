<script lang="ts">
	import type { Content } from '@prismicio/client'
	import {
		type SliceComponentProps,
		PrismicRichText
	} from '@prismicio/svelte'

	import { Gradient } from '$lib/gradients'
	import { onMount } from 'svelte'
	import Label from '$lib/components/UI/Label.svelte'
	import ScrollDirectionSlider from '$lib/components/ScrollDirectionSlider.svelte'

	type Props = SliceComponentProps<Content.IntroWithMediaRowSlice>

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
	class="hero-section"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	{@attach setHeightToVisualViewport}
>
	<canvas
		id="gradient-canvas"
		class="hero-section__gradient"
		data-transition-in
	></canvas>

	<div class="hero-section__inner">
		<div class="container hero-section__container">
			<Label variant="white">
				{slice.primary.label}
			</Label>
			<div class="hero-section__headline">
				<PrismicRichText field={slice.primary.headline} />
			</div>
		</div>

		{#if slice.primary.turn_off_image_slider == false}
			<div class="hero-section__bottom">
				<ScrollDirectionSlider
					images={slice.primary.media}
					classNames="media-item"
				/>
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
	.hero-section {
		position: relative;
		display: flex;
		flex-flow: column;
		gap: 2.5rem;

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

		&__container {
			height: 100%;
			display: flex;
			flex-flow: column;
			justify-content: end;
			gap: 1.5rem;
			padding-bottom: 5rem;
		}

		&__inner {
			position: relative;
			height: 100%;
			z-index: 1;

			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 2.5rem;
		}

		&__headline {
			color: var(--color-snow-white);
			max-width: 1032px;
		}

		&__bottom {
			position: relative;
			z-index: 1;

			:global .media-item {
				height: 185px;
				width: 220px;
				overflow: clip;

				@media (min-width: 1024px) {
					height: 485px;
					width: 300px;
				}
			}
		}
	}
</style>
