<script lang="ts">
	import type { Content } from '@prismicio/client'
	import {
		PrismicImage,
		PrismicRichText,
		type SliceComponentProps
	} from '@prismicio/svelte'
	import { onMount } from 'svelte'
	import Swiper from 'swiper/bundle'
	import 'swiper/css/bundle'

	type Props = SliceComponentProps<Content.ContentCardsWithImageSlice>

	const { slice }: Props = $props()

	onMount(() => {
		new Swiper('.content-cards__slider', {
			navigation: {
				prevEl: '.custom-prev',
				nextEl: '.custom-next'
			},
			scrollbar: {
				el: '.swiper-scrollbar'
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: '20px'
				},
				768: {
					slidesPerView: 1.2,
					spaceBetween: '20px'
				},
				1024: {
					spaceBetween: '40px'
				}
			}
		})
	})
</script>

<section
	class="content-cards block-padding-{slice.primary.section_padding}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<h2 class="content-cards__headline">{slice.primary.headline}</h2>

		<div class="content-cards__slider swiper">
			<div class="swiper-wrapper">
				{#each slice.primary.items as item, key (key)}
					<div class="swiper-slide">
						<div class="content-cards__card-wrap">
							<div class="content-card border-radius">
								<div class="content-card__media-wrap">
									<PrismicImage field={item.media} />
								</div>
								<div class="content-card__content">
									<h3 class="h4">{item.title}</h3>
									<div class="rich-text-content">
										<PrismicRichText
											field={item.description}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<div class="content-cards__slider-nav">
				<div class="swiper-scrollbar"></div>

				<div class="buttons-wrap">
					<button
						class="custom-prev navigation-button btn btn--outline"
						aria-label="Previous"
					>
						Prev
					</button>
					<button
						class="custom-next navigation-button btn btn--dark"
						aria-label="Next"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.content-cards {
		overflow: hidden;

		&__headline {
			margin-bottom: 2.5rem;

			@media (min-width: 1024px) {
				margin-bottom: 5rem;
			}
		}

		&__slider {
			overflow: visible;

			&::-webkit-scrollbar {
				display: none;
			}

			.navigation-button {
				border-width: 1px;
				font-weight: 400;
			}
		}

		&__slider-nav {
			margin-top: 1rem;
			display: flex;
			align-items: center;
			gap: 2.5rem;

			@media (min-width: 1024px) {
				margin-top: 2.5rem;
			}

			.swiper-scrollbar {
				display: none;
				height: 8px;
				position: unset;
				background: #d9d9d9;

				:global .swiper-scrollbar-drag {
					background: var(--color-dark-mode);
				}

				@media (min-width: 768px) {
					display: block;
				}
			}

			.buttons-wrap {
				display: flex;
				align-items: center;
				gap: 0.5rem;
			}
		}

		.swiper-slide {
			@media (min-width: 768px) {
				height: auto;
			}
		}

		&__card-wrap {
			height: 100%;
		}

		.content-card {
			padding: 2.5rem;
			background: url('/bg-gradient-clay-green.svg') no-repeat center
				center / cover;
			height: 100%;

			display: flex;
			flex-direction: column;
			align-items: center;

			gap: 2.5rem;

			@media (min-width: 1400px) {
				flex-direction: row;
			}

			&__media-wrap {
				height: 100%;
				flex: 1;
				border-radius: 0.25rem;
				overflow: hidden;
				display: none;

				max-height: 42em;

				:global img {
					height: 100%;
					object-fit: cover;
				}

				@media (min-width: 1200px) {
					display: block;
				}
			}

			&__content {
				flex: 1;

				display: flex;
				flex-direction: column;
				gap: 1rem;
			}
		}
	}
</style>
