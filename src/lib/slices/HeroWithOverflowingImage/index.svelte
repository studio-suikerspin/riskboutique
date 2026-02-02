<script lang="ts">
	import type { Content } from '@prismicio/client'
	import {
		PrismicImage,
		PrismicRichText,
		type SliceComponentProps
	} from '@prismicio/svelte'
	import { onMount } from 'svelte'
	import { Gradient } from '$lib/gradients'

	type Props = SliceComponentProps<Content.HeroWithOverflowingImageSlice>

	const { slice }: Props = $props()

	onMount(() => {
		const gradient = new Gradient()

		gradient.initGradient('#gradient-canvas')
	})
</script>

<section
	class="hero-ss"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<canvas
		id="gradient-canvas"
		class="hero-ss__gradient"
		data-transition-in
	></canvas>

	<div class="container hero-ss__container">
		<div class="hero-ss__inner block-padding">
			<div class="hero-ss__content-wrap">
				<div class="hero-ss__headline">
					<PrismicRichText field={slice.primary.headline} />
				</div>
				<div class="hero-ss__content subtitle">
					<PrismicRichText field={slice.primary.content} />
				</div>
			</div>
		</div>

		<div class="hero-ss__scroll-hint">
			{slice.primary.scroller_label}
		</div>
	</div>

	<div class="hero-ss__image-wrap">
		<PrismicImage field={slice.primary.overflowing_image} />
	</div>
</section>

<style lang="scss">
	.hero-ss {
		position: relative;
		display: flex;
		overflow: hidden;
		min-height: 100vh;

		@media (min-width: 1024px) {
			padding-bottom: 2rem;
		}

		&__gradient {
			position: absolute;
			height: 100%;
			width: 100%;
			z-index: 0;
			object-fit: cover;
			inset: 0%;

			@media (min-width: 1024px) {
				height: 90vh;
			}

			--gradient-color-1: #b2c1bd;
			--gradient-color-2: #0e4f63;
			--gradient-color-3: #0e4f63;
			--gradient-color-4: #0e4f63;
		}

		&__inner {
			position: relative;
			z-index: 2;
		}

		&__container {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			@media (min-width: 1024px) {
				max-height: 90vh;
			}
		}

		&__content-wrap {
			flex: 1;
			height: 100%;

			display: flex;
			flex-direction: column;
			gap: 2.5rem;
		}

		&__headline {
			color: var(--color-snow-white);

			:global strong {
				font-weight: unset;
				color: var(--color-clay-green);
			}
		}

		&__content {
			color: var(--color-snow-white);
			max-width: 680px;

			display: flex;
			flex-flow: column;
			gap: 2.5rem;
		}

		&__scroll-hint {
			font-size: 1.125rem;
			font-weight: 500;
			color: var(--color-snow-white);

			position: relative;
			z-index: 2;
			padding-bottom: 1.5rem;
		}

		&__image-wrap {
			display: none;

			position: absolute;
			bottom: -3rem;
			right: -2.5rem;
			width: 40%;
			max-width: 650px;
			aspect-ratio: 1/1;
			z-index: 2;

			:global img {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}

			@media (min-width: 1024px) {
				display: block;
			}

			@media (min-width: 2000px) {
				right: 5%;
			}

			@media (min-width: 2200px) {
				right: 10%;
			}

			@media (min-width: 2400px) {
				right: 15%;
			}
		}
	}
</style>
