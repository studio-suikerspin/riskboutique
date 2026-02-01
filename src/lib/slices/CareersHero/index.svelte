<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import type { Content } from '@prismicio/client'
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte'
	import { onMount } from 'svelte'
	import { Gradient } from '$lib/gradients';

	type Props = SliceComponentProps<Content.ContentHeroSlice>

	const { slice }: Props = $props()

	onMount(() => {
		const gradient = new Gradient();

		gradient.initGradient('#gradient-canvas');
	});

</script>

<section
	class="section-careers-hero"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
<canvas id="gradient-canvas" class="section-careers-hero__gradient" data-transition-in></canvas>
	<div class="container">
		<div class="section-careers-hero__wrapper">
			<div class="section-careers-hero__text">
				<h1>{slice.primary.headline}</h1>
				<PrismicRichText field={slice.primary.description} />
				{#each slice.primary.actions as item, index (index)}
					<Button
						field={item}
						text={item.text}
						variant="white"
						className="'btn', 'btn--link', 'main-header__cta"
						icon="icon-arrow-right"
					/>
				{/each}
			</div>
			<img
				class="section-careers-hero__image"
				src={slice.primary.main_visual.url}
				alt={slice.primary.main_visual.alt}
			/>
		</div>
	</div>
</section>

<style lang="scss">
	.section-careers-hero {
		// background: url('/bg-gradient-donker.svg');
		// background-repeat: no-repeat;
		// background-size: cover;
		// padding-inline: 1.25rem;
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

		&__wrapper {
			gap: 5rem;
			display: grid;
			padding-block-end: 2.5rem;
			padding-block-start: 8.75rem;
			z-index: 1;
			position: relative;

			@media (min-width: 992px) {
				margin: auto;

				padding-block: 12.125rem;
				// max-width: 1300px;
				padding-inline: unset;
				grid-template-columns: 1fr 408px;
				align-items: center;
				justify-content: center;
			}
		}

		&__text {
			display: flex;
			gap: 2.5rem;
			flex-direction: column;
			color: white;
			max-width: 50rem;
		}

		&__image {
			object-fit: cover;
			border-radius: 0.5rem;
			width: 100%;

			@media (max-width: 992px) {
				max-height: 500px;
				object-position: left -175px;
			}

			@media (max-width: 768px) {
				max-height: 400px;
				object-position: left -125px;
			}

			@media (max-width: 576px) {
				object-position: left -73px;
			}
		}
	}
</style>
