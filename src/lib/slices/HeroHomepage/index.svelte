<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { PrismicRichText, PrismicLink, PrismicImage } from '@prismicio/svelte';
	

	type Props = SliceComponentProps<Content.ComingSoonSlice>;

	const { slice }: Props = $props();

	import { Gradient } from '$lib/gradients';
	import { onMount } from 'svelte';
	import ScrollDirectionSlider from '$lib/components/ScrollDirectionSlider.svelte';

	onMount(() => {
		const gradient = new Gradient();

		gradient.initGradient('#gradient-canvas');
	});
</script>

<section
	class="hero-section"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<canvas id="gradient-canvas" class="hero-section__gradient" data-transition-in></canvas>

	<div class="hero-section__inner">
		<div class="hero-section__centered-content">
			<div class="taglines">
				{#each slice.primary.tags as item (item.tag)}
					<p class="taglines__tag subtitle">{item.tag}</p>

					<div class="taglines__divider"></div>
				{/each}
			</div>

			<div class="hero-section__headline">
				<PrismicRichText field={slice.primary.heading} />
			</div>

		</div>

		<div class="hero-section__bottom">
			<div class="bottom-texts">				
				<div class="bottom-texts__text">
					{#each slice.primary.address_lines as item}
						<div class="bottom-texts__text">{item.line}</div>
					{/each}
				</div>
				<div class="scroll_for_more general-content small">
					{slice.primary.scrollHint}
				</div>
			</div>

			<div class="bottom-images">
				<ScrollDirectionSlider images={slice.primary.gallery} />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.hero-section {
		position: relative;
		min-height: 100dvh;
		display: flex;

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

		&__inner {
			position: relative;
			flex: 1;
			z-index: 1;

			display: flex;
			flex-direction: column;

			
		}


		&__button{
			margin-top: 1.5rem;
		}

		&__centered-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			flex: 1;

			padding-inline: 0.75rem;

			@media(min-width: 768px){
				padding-inline: 0;
			}

			.taglines {
				display: flex;
				align-items: center;
				gap: 1rem;
				margin-block-end: 1.25rem;

				@media (min-width: 992px) {
					gap: 2rem;
				}

				&__tag {
					// font-size: 0.75rem;
					// font-weight: 500;
					color: var(--color-snow-white);
					opacity: 0.8;
				}

				&__divider {
					display: block;
					width: 0.25rem;
					height: 0.25rem;
					background: var(--color-snow-white);
					border-radius: 50%;
				}

				&__divider:last-child {
					display: none;
				}
			}
		}

		&__headline {
			font-size: 3.25rem;
			line-height: 90%;
			font-weight: 600;
			color: var(--color-snow-white);
			max-width: 390px;
			text-align: center;

			@media (min-width: 992px) {
				font-size: 8.125rem;
				letter-spacing: -0.25rem;
				line-height: 85%;
			}

			@media(min-width: 768px){
				max-width: 1200px;
			}

			:global strong {
				font-weight: 600;
				color: var(--color-clay-green);
			}
		}

		&__bottom {
			display: flex;
			flex-direction: column;
			gap: 0.75rem;

			.bottom-texts {
				width: 100%;
				display: flex;
				align-items: end;
				padding-inline: 0.75rem;
				justify-content: space-between;
				width: 100%;

				@media screen and (min-width: 992px) {
					padding-inline: 1.25rem;
					flex-flow: row;
				}

				@media screen and (min-width: 768px) {
					flex-flow: row wrap;
				}

				&__text {
					font-size: 1rem;
					color: var(--color-snow-white);
				}
			}

			.scroll_for_more{
				color: var(--color-snow-white);
				display: none;

				@media(min-width: 768px){
					display: block;
				}
			}

		}
	}
</style>
