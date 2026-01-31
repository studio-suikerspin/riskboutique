<script lang="ts">
	import type { Content } from '@prismicio/client'
	import { type SliceComponentProps, PrismicRichText, PrismicImage } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.IntroWithMediaRowSlice>

	const { slice }: Props = $props()

	import { Gradient } from '$lib/gradients'
	import { onMount } from 'svelte'
	import Label from '$lib/components/UI/Label.svelte'

	onMount(() => {
		const gradient = new Gradient()

		gradient.initGradient('#gradient-canvas')
	})
</script>

<section
	class="hero-section"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<canvas
		id="gradient-canvas"
		class="hero-section__gradient"
		data-transition-in
	></canvas>

	<div class="container">
		<div class="hero-section__inner">
			<Label variant="white">
				{slice.primary.label}
			</Label>
			<div class="hero-section__headline">
				<PrismicRichText field={slice.primary.headline} />
			</div>
		</div>
	</div>

	<div class="hero-section__bottom">
	    {#each slice.primary.media as item, index (index)}
			<div class="media-item">
			    <PrismicImage field={item.image} />
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.hero-section {
		position: relative;
		min-height: 90vh;
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
			height: 100%;
			z-index: 1;

			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 1.5rem;
		}

		&__headline {
			color: var(--color-snow-white);
			max-width: 1032px;
		}

		&__bottom {
			display: grid;
			grid-auto-flow: column;
			gap: 0.75rem;

			position: absolute;
			bottom: -50%;
			transform: translateY(-50%);

			.media-item {
				:global img {
				    height: 485px;
					width: 100%;
				}
			}
		}
	}
</style>
