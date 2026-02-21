<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicImage } from '@prismicio/svelte'
	import { onMount } from 'svelte'

	type Props = SliceComponentProps<Content.HeroWithBackgroundSlice>

	const paddingClass = $derived(() => {
		switch (slice.primary.section_padding) {
			case 'top':
				return 'block-padding-top'
			case 'bottom':
				return 'block-padding-bottom'
			case 'both':
				return 'block-padding'
			case 'none':
				return ''
			default:
				return ''
		}
	})

	const { slice }: Props = $props()
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="banner {paddingClass()}"
>
	<div class="container">
		<div class="banner__inner">
			<div class="banner__image">
				<PrismicImage field={slice.primary.background_image} />
				<div class="banner__overlay"></div>
			</div>
			<div
				class="banner__text"
				data-reveal-group
			>
				<div class="h2">{slice.primary.headline}</div>
				<div class="h3 low">{slice.primary.headline}</div>
				<div class="banner__buttons">
					{#each slice.primary.cta_button as link (link.key)}
						<Button
							field={link}
							text={link.text || 'Connect with us'}
							variant={link.variant || 'light'}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.banner {
		@media (max-width: 767px) {
			.container {
				max-width: none;
				padding: 0;
			}
		}

		&__image :global img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&__inner {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			min-height: 20rem;
			padding: 0.5rem;
			overflow: hidden;
			// border-radius: 0.5rem;

			@media (min-width: 767px) {
				border-radius: 0.5rem;
				padding: 1.5rem;
			}

			.h3 {
				display: block;

				@media (min-width: 992px) {
					display: none;
				}
			}

			.h2 {
				display: none;
				@media (min-width: 992px) {
					display: block;
				}
			}

			@media (min-width: 992px) {
				min-height: 36.625rem;
				padding: 2.5rem;
				border-radius: 0.5rem;
			}
		}

		&__image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
			z-index: 1;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&__overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.5);
			z-index: 1;
		}

		&__text {
			color: var(--color-snow-white);
			z-index: 2;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2.5rem;
			max-width: 75rem;
		}

		&__buttons {
			display: flex;
			gap: 0.5rem;

			:global .btn {
				transition:
					background-color 0.3s ease,
					color 0.3s ease;
			}

			:global .btn--secondary {
				background: transparent;
				color: var(--color-snow-white);
			}

			:global .btn--secondary:hover {
				background: var(--color-snow-white);
				color: var(--color-dark-mode);
			}

			:global .btn--primary:hover {
				background: var(--color-dark-mode);
				color: var(--color-snow-white);
			}
		}
	}
</style>
