<script lang="ts">
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';
	import { gsap, ScrollTrigger } from '$lib/gsap';

	type Props = SliceComponentProps<Content.PillarsSlice>;

	const { slice }: Props = $props();

	let swiper: Swiper;

	onMount(() => {
		swiper = new Swiper('.swiper', {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 0,
			breakpoints: {
				992: {
					slidesPerView: 3,
					spaceBetween: 20
				}
			},

			// If we need pagination
			pagination: {
				el: '.swiper-pagination'
			},

			// Navigation arrows
			navigation: {
				nextEl: '.custom-next',
				prevEl: '.custom-prev'
			}
		});

		// Custom reveal animation for slides
		setTimeout(() => {
			const slides = document.querySelectorAll('.feature-cards .slide-content');

			// Set initial state
			gsap.set(slides, { y: 40, autoAlpha: 0 });

			// Create staggered animation
			ScrollTrigger.create({
				trigger: '.feature-cards__swiper',
				start: 'top 85%',
				once: true,
				onEnter: () => {
					gsap.to(slides, {
						y: 0,
						autoAlpha: 1,
						duration: 0.8,
						ease: 'power4.out',
						stagger: 0.2,
						onComplete: () => {
							// Clear transforms after animation
							gsap.set(slides, { clearProps: 'transform,opacity' });
						}
					});
				}
			});
		}, 200);

		// Cleanup function
		return () => {
			if (swiper) {
				swiper.destroy();
			}
		};
	});
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="feature-cards block-padding"
>
	<div class="container">
		<div class="feature-cards__inner">
			<div class="feature-cards__headline h1">
				<PrismicRichText field={slice.primary.heading} />
			</div>

			<div class="swiper-container">
				<div class="swiper feature-cards__swiper">
					<!-- Additional required wrapper -->
					<div class="swiper-wrapper">
						{#each slice.primary.pillars as item, index}
							<div class="swiper-slide">
								<div class="slide-content">
									<FeatureCard
										title={item.title}
										description={item.description}
										background={item.background_color}
										text_color={item.text_color}
										number={item.index}
										shape={item.shape}
									/>
								</div>
							</div>
						{/each}
					</div>

					<!-- Custom navigation buttons -->
					<button class="custom-prev navigation-button" aria-label="Previous">
						<i class="icon-chevron prev-icon"></i>
					</button>
					<button class="custom-next navigation-button" aria-label="Next">
						<i class="icon-chevron next-icon"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.feature-cards {

		&__inner {
			display: flex;
			flex-direction: column;
			gap: 2.5rem;

			@media (min-width: 768px) {
				gap: 5rem;
			}
		}
	}

	.swiper-container {
		width: 100%;
	}

	.swiper {
		width: 100%;
	}

	.swiper-slide {
		height: 43.75rem;
	}

	@media (min-width: 768px) {
		.swiper-slide {
			height: 50rem;
		}
	}

	.slide-content {
		height: 100%;
	}

	// Verberg standaard Swiper navigation (als je ze per ongeluk nog hebt)
	:global(.swiper-button-next),
	:global(.swiper-button-prev) {
		display: none;
	}

	// Custom navigation button styles
	@media (min-width: 992px) {
		.navigation-button {
			display: none !important;
		}
	}
	.navigation-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		width: 2.75em;
		height: 2.75em;
		background-color: var(--color-snow-white);
		border: none;
		border-radius: 50%;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		cursor: pointer;
		// display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		display: flex;

		i {
			font-size: 1.25em;
			color: var(--color-dark-mode);
			transition: color 0.3s ease;
		}

		.prev-icon {
			transform: rotate(180deg);
		}

		&:disabled {
			opacity: 0.3;
			cursor: not-allowed;

			&:hover {
				transform: translateY(-50%);
			}
		}

		&.custom-prev {
			left: 0.625rem;
		}

		&.custom-next {
			right: 0.625rem;
		}
	}
</style>
