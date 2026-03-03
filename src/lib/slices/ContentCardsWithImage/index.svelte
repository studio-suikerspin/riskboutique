<script lang="ts">
	import AvatarWithContactInfo from '$lib/components/AvatarWithContactInfo.svelte'
	import type { Content } from '@prismicio/client'
	import { onMount } from 'svelte'
	import {
		PrismicLink,
		PrismicRichText,
		type SliceComponentProps
	} from '@prismicio/svelte'
	import { Swiper } from 'swiper/bundle'

	import { initContentRevealScroll } from '$lib/revealContent.js'
	import CdnImage from '$lib/components/CdnImage.svelte'

	type Props = SliceComponentProps<Content.ContentCardsWithImageSlice>

	const { slice }: Props = $props()

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

	function initSwiper(node) {
		new Swiper(node, {
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
					slidesPerView: 2.1,
					spaceBetween: '40px'
				},
				1200: {
					slidesPerView: 1.4,
					spaceBetween: '40px'
				}
			}
		})
	}

	onMount(() => {
		initContentRevealScroll()
	})
</script>

<section
	class="content-cards {paddingClass()}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<div
			class="content-cards__headline_wrap"
			data-reveal-group
		>
			<div class="content-cards__inner">
				<div class="content-cards__text">
					<h2 class="content-cards__headline">
						{slice.primary.headline}
					</h2>
					{#if slice.primary.subtekst.length > 0}
						<div class="general-content subtext-wrapper">
							<PrismicRichText field={slice.primary.subtekst} />
							{#if slice.primary.call_to_action?.url}
								<div class="btn btn--dark">
									<PrismicLink
										field={slice.primary.call_to_action}
									>
										<i
											class="btn__icon btn__icon--rotate icon-arrow-right"
										></i>
										<span>Request proposal</span>
									</PrismicLink>
								</div>
							{/if}
						</div>
					{/if}
				</div>
				{#if slice.primary.contact_avatar?.data}
					<div class="avatar">
						<AvatarWithContactInfo
							image={slice.primary.contact_avatar.data.image}
							name={slice.primary.contact_avatar.data.name}
							role={slice.primary.contact_avatar.data.role}
							phone={slice.primary.contact_avatar.data.phone}
							email={slice.primary.contact_avatar.data.email}
							second_role={slice.primary.contact_avatar.data
								.second_role}
						/>
					</div>
				{/if}
			</div>

			<div
				class="content-cards__slider"
				{@attach initSwiper}
			>
				<div class="swiper-wrapper">
					{#each slice.primary.items as item, key (key)}
						<div class="swiper-slide item">
							<div class="content-cards__card-wrap">
								<div class="content-card border-radius">
									<div class="content-card__media-wrap">
										<CdnImage field={item.media} />
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

			<div class="mobile-call-to-action">
				{#if slice.primary.call_to_action?.url}
					<div class="btn btn--dark">
						<PrismicLink field={slice.primary.call_to_action}>
							<i
								class="btn__icon btn__icon--rotate icon-arrow-right"
							></i>
							<span>Request proposal</span>
						</PrismicLink>
					</div>
				{/if}
				{#if slice.primary.contact_avatar?.data}
					<AvatarWithContactInfo
						image={slice.primary.contact_avatar.data.image}
						name={slice.primary.contact_avatar.data.name}
						role={slice.primary.contact_avatar.data.role}
						phone={slice.primary.contact_avatar.data.phone}
						email={slice.primary.contact_avatar.data.email}
						second_role={slice.primary.contact_avatar.data
							.second_role}
					/>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.content-cards {
		overflow: hidden;

		&__inner {
			display: flex;
			justify-content: space-between;
			align-items: end;
		}

		&__text {
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
		}

		&__headline_wrap {
			display: flex;
			flex-direction: column;

			@media (min-width: 768px) {
				gap: 2.5rem;
			}

			.general-content :global p {
				max-width: 40rem;
			}
			.avatar {
				width: fit-content;
				display: flex;
				flex-direction: column;
				justify-content: end;
				align-items: end;
				gap: 0.5rem;
				display: none;

				@media (min-width: 992px) {
					display: flex;
				}

				:global .btn {
					width: 100%;
				}
			}
			.subtext-wrapper {
				display: flex;
				flex-direction: column;
				gap: 2.5rem;
				width: 100%;

				@media (min-width: 768px) {
					flex-direction: row;
					align-items: bottom;
					justify-content: space-between;
				}
			}
		}

		&__slider {
			overflow: visible;
			margin-top: 2.5rem;

			.item {
				height: auto;
			}

			/* @media (min-width: 1024px) {
				margin-top: 5rem;
			} */

			&::-webkit-scrollbar {
				display: none;
			}

			.navigation-button {
				border-width: 1px;
				font-weight: 400;
			}
		}

		&__slider-nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 2.5rem;

			margin-top: 1rem;

			@media (min-width: 768px) {
				margin-top: 0;
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

				button {
					width: 100%;

					@media (min-width: 767px) {
						width: fit-content;
					}
				}
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

			@media (min-width: 1200px) {
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

	.btn.mobile-only {
		display: none;

		@media (max-width: 767px) {
			display: flex;
		}
	}

	.mobile-call-to-action {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-top: 1.5rem;

		@media (min-width: 992px) {
			display: none;
		}

		.btn {
			width: 100%;
		}
	}
</style>
