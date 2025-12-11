<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { PrismicRichText, PrismicLink, PrismicImage } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ComingSoonSlice>;

	const { slice }: Props = $props();

	import { Gradient } from '$lib/gradients';
	import { onMount } from 'svelte';

	onMount(() => {
		const gradient = new Gradient();

		gradient.initGradient('#gradient-canvas');
	});
</script>

<section
	class="coming-soon"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<canvas id="gradient-canvas" class="coming-soon__gradient" data-transition-in></canvas>

	<div class="coming-soon__inner">
		<div class="coming-soon__centered-content">
			<div class="taglines">
				{#each slice.primary.tags as item (item.tag)}
					<p class="taglines__tag">{item.tag}</p>

					<div class="taglines__divider"></div>
				{/each}
			</div>

			<div class="coming-soon__headline">
				<PrismicRichText field={slice.primary.heading} />
			</div>

			{#if slice.primary.social_links && slice.primary.social_links.length > 0}
				<div class="social-links">
					{#each slice.primary.social_links as link (link.key)}
						<PrismicLink field={link} class="social-links__link">
							<i class="icon-{link.text}"></i>
						</PrismicLink>
					{/each}
				</div>
			{/if}
		</div>

		<div class="coming-soon__bottom">
			<div class="bottom-texts">
				{#each slice.primary.bottom_texts as text (text.bottom_text)}
					<div class="bottom-texts__text">
						<PrismicRichText field={text.bottom_text} />
					</div>
				{/each}
			</div>

			<div class="bottom-images">
				{#each slice.primary.images as item, index (index)}
					<div class="bottom-images__image" data-index={index}>
						<PrismicImage field={item.image} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.coming-soon {
		position: relative;
		min-height: 100vh;
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

		&__centered-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			flex: 1;

			.taglines {
				display: flex;
				align-items: center;
				gap: 1rem;
				margin-block-end: 1.25rem;

				@media (min-width: 992px) {
					gap: 2rem;
				}

				&__tag {
					font-size: 0.75rem;
					font-weight: 500;
					color: var(--color-snow-white);
					opacity: 0.8;

					@media screen and (min-width: 992px) {
						font-size: 1.125rem;
					}
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
			max-width: 1000px;
			text-align: center;

			margin-block-end: 2.5rem;

			@media (min-width: 992px) {
				font-size: 8.125rem;
				letter-spacing: -0.25rem;
				line-height: 85%;
			}

			:global strong {
				font-weight: 600;
				color: var(--color-clay-green);
			}
		}

		.social-links {
			display: flex;
			align-items: center;
			gap: 1.5rem;

			:global &__link {
				display: flex;
				align-items: center;
				justify-content: center;
				background: var(--color-snow-white);
				border-radius: 50%;
				width: 3rem;
				height: 3rem;
				color: var(--color-aqua);

				i {
					font-size: 1.5rem;
				}
			}
		}

		&__bottom {
			display: flex;
			flex-direction: column;
			gap: 1.25rem;

			.bottom-texts {
				width: 100%;
				display: flex;
				flex-flow: row wrap;
				align-items: center;
				justify-content: space-between;
				padding-inline: 0.25rem;

				@media screen and (min-width: 992px) {
					padding-inline: 1.25rem;
					flex-flow: row;
				}

				&__text {
					font-size: 1rem;
					color: var(--color-snow-white);
				}
			}

			.bottom-images {
				align-items: center;
				gap: 0.5rem;
				display: flex;

				&__image {
					display: none;
					border-radius: 0.25rem;
					overflow: hidden;
					height: 100%;
					width: 100%;

					@media screen and (min-width: 992px) {
						display: flex;
					}

					:global img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			}
		}
	}
</style>
