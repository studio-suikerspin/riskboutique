<script lang="ts">
	import FeatureGridShapes from '$lib/components/FeatureGridShapes.svelte'
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicRichText } from '@prismicio/svelte'
	import { onMount } from 'svelte'
	import { gsap, ScrollTrigger } from '$lib/gsap'
	import Swiper from 'swiper/bundle'
	import 'swiper/css/bundle'
	

	type Props = SliceComponentProps<Content.FeatureGridSlice>

	const { slice }: Props = $props()

	let swiper: Swiper

	onMount(() => {
		const itemCount = slice.primary.features.length

		swiper = new Swiper('.feature-grid__swiper', {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 16,
			breakpoints: {
				768: {
					slidesPerView: Math.min(itemCount, 2),
					spaceBetween: 16
				},
				1024: {
					slidesPerView: Math.min(itemCount, 3),
					spaceBetween: 16
				},
				1200: {
					slidesPerView: Math.min(itemCount, 4),
					spaceBetween: 16
				}
			},
			navigation: {
				nextEl: '.feature-grid__nav-next',
				prevEl: '.feature-grid__nav-prev'
			}
		})

		return () => {
			if (swiper) {
				swiper.destroy()
			}
		}
	})

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
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="feature-grid {paddingClass()}"
	data-reveal-group
>
	<div class="container">
		<div class="feature-grid__inner">
			<div class="feature-grid__heading">
				<h3 class="low">{slice.primary.heading}</h3>
			</div>
			<div class="feature-grid__content swiper feature-grid__swiper">
				<div
					class="swiper-wrapper"
				>
					{#each slice.primary.features as item, index (index)}
						<div class="feature-grid__item swiper-slide">
							<div class="icon">
								<FeatureGridShapes shape={item.icon} />
							</div>
							<div class="text general-content">
								<PrismicRichText field={item.description} />
							</div>
						</div>
					{/each}
				</div>

				<div class="feature-grid__navigation">
					<button
						class="feature-grid__nav-prev navigation-button"
						aria-label="Previous"
					>
						<i class="icon-chevron prev-icon"></i>
					</button>
					<button
						class="feature-grid__nav-next navigation-button"
						aria-label="Next"
					>
						<i class="icon-chevron next-icon"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.feature-grid {
		&__inner {
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
		}

		&__content {
			width: 100%;
		}

		&__item {
			// flex: 1;
			display: flex;
			flex-direction: column;
			gap: 0.625rem;
			background: url('/bg-gradient-licht.svg');
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			padding: 1.5rem;
			border-radius: 0.5rem;
			height: auto;
			// min-width: 16.875rem;

			.icon {
				:global svg {
					width: 2.5rem;
					height: 2.5rem;

					@media (min-width: 992px) {
						width: 4.5rem;
						height: 4.5rem;
						flex: 1;
					}
				}
			}

			@media (min-width: 992px) {
				.text {
					max-width: 18.75rem;
				}
			}
		}

		&__navigation {
			display: flex;
			gap: 0.5rem;
			margin-top: 1rem;

			@media (min-width: 1200px) {
				display: none;
			}
		}

		&__nav-prev,
		&__nav-next {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 3rem;
			height: 3rem;
			border-radius: 0.5rem;
			cursor: pointer;
			border: 1px solid var(--color-dark-mode);
		}

		&__nav-prev i {
			rotate: 180deg;
		}

		&__nav-prev:disabled,
		&__nav-next:disabled {
			opacity: 0.5 !important;
		}
	}
</style>
