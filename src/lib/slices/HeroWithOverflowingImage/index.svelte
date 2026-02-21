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
		<div class="hero-ss__inner">
			<div class="hero-ss__content-wrap">
				<div class="hero-ss__headline">
					<PrismicRichText field={slice.primary.headline} />
				</div>

				<div class="hero-ss__text-image-wrap">
					<div class="hero-ss__content subtitle">
						<PrismicRichText field={slice.primary.content} />
					</div>

					<PrismicImage field={slice.primary.overflowing_image} />
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.hero-ss {
		position: relative;
		display: flex;
		overflow: hidden;
		min-height: 100vh;

		@media (min-width: 1024px) {
			min-height: unset;
			height: 900px;
		}

		&__gradient {
			position: absolute;
			height: 100%;
			width: 100%;
			z-index: 0;
			object-fit: cover;
			inset: 0%;

			@media (min-width: 1024px) {
				height: 800px;
			}

			--gradient-color-1: #b2c1bd;
			--gradient-color-2: #0e4f63;
			--gradient-color-3: #0e4f63;
			--gradient-color-4: #0e4f63;
		}

		&__inner {
			position: relative;
			z-index: 2;
			padding-top: 8.5rem;
			padding-bottom: 2rem;

			@media (min-width: 1024px) {
				height: 100%;
				padding-top: 12.5rem;
				padding-bottom: 0;
			}
		}

		&__content-wrap {
			height: 100%;

			display: flex;
			flex-direction: column;
			gap: 2.5rem;

			overflow: hidden;
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
			max-width: 42rem;
			height: fit-content;

			display: flex;
			flex-flow: column;
			gap: 2.5rem;
		}

		&__text-image-wrap {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 2.5rem;

			@media (min-width: 1024px) {
				gap: 5rem;
				flex-direction: row;
				/* height: 100%; */
			}

			:global img {
				border-radius: 0.5rem;

				@media (min-width: 1024px) {
					width: 400px;
					height: 400px;
				}
			}
		}
	}
</style>
