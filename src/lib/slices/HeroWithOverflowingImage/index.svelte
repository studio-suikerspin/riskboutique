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
					<div class="hero-ss__image-wrap">
						<PrismicImage field={slice.primary.overflowing_image} />
					</div>
				</div>
			</div>
		</div>

		<!-- <div class="hero-ss__scroll-hint">
			{slice.primary.scroller_label}
		</div> -->
	</div>

	<!-- <div class="hero-ss__image-wrap">
		<PrismicImage field={slice.primary.overflowing_image} />
	</div> -->
</section>

<style lang="scss">
	.hero-ss {
		position: relative;
		display: flex;
		overflow: hidden;
		min-height: 100vh;

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
			padding-top: 8.5rem;
			padding-bottom: 2rem;
			

			@media (min-width: 1024px) {
				padding-top: 12.5rem;
				padding-bottom: 0;
			}
		}

		// &__container {
		// 	display: flex;
		// 	flex-direction: column;
		// 	justify-content: space-between;

		// 	@media (min-width: 1024px) {
		// 		max-height: 90vh;
		// 		position: relative;
		// 	}
		// }

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
			max-width: 42rem;

			display: flex;
			flex-flow: column;
			gap: 2.5rem;
		}

		&__scroll-hint {
			font-size: 1.125rem;
			font-weight: 500;
			color: var(--color-snow-white);

			position: absolute;
			z-index: 2;
			bottom: 0;
		}


		&__text-image-wrap {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 2.5rem;

				@media (min-width: 1024px) {
					gap: 5rem;
					flex-direction: row;
				}
		}

		&__image-wrap {
				width: 100%;
				height: auto;
				max-width: 500px;
				max-height: 500px;

				:global img{
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center;
					border-radius: 0.5rem;
				}
			}
	}
</style>
