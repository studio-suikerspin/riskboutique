<script lang="ts">
	import AvatarWithContactInfo from '$lib/components/AvatarWithContactInfo.svelte'
	import Button from '$lib/components/Button.svelte'
	import SectionHeading from '$lib/components/SectionHeading.svelte'
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte'
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';

	type Props = SliceComponentProps<Content.ServiceOverviewSlice>

	const { slice }: Props = $props()

	let swiper: Swiper;

	onMount(() => {
		swiper = new Swiper('.swiper', {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 20,

			// Navigation arrows
			navigation: {
				nextEl: '.custom-next',
				prevEl: '.custom-prev'
			}
		});
	});
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="block-padding"
>
<div class="service-overview">
	<div class="service-overview__title">
		<SectionHeading
			title={slice.primary.heading}
			description={slice.primary.description}
		/>
	</div>
	<div class="service-overview__content swiper ">
		<div class="swiper-wrapper">
		{#each slice.primary.service_items as item, index}
			<div class="service-overview__item swiper-slide">
				<div class="service-overview__item-text">
					<div class="service-overview__title-wrap">
						<div class="service-overview__counter">
							<div class="service-overview__serial subtitle">
								{String(index + 1).padStart(2, '0')} / {String(slice.primary.service_items.length).padStart(2, '0')}
							</div>
						</div>
						<h4 class="service-overview__item-title">{item.service_title}</h4>
					</div>
					<div class="service-overview__item-description rich-text-content">
						<PrismicRichText field={item.service_description} />
					</div>
				</div>
				<div class="service-overview__item-image">
					<PrismicImage field={item.service_image} />
				</div>
			</div>
		{/each}
		</div>

		<div class="service-overview__navigation">
			<!-- Custom navigation buttons -->
			<button class="custom-prev navigation-button" aria-label="Previous">
				Prev
			</button>
			<button class="custom-next navigation-button" aria-label="Next">
				Next
			</button>
		</div>

	</div>

	<div class="service-overview__cta">
		<Button 
			href="#" 
			text="Request proposal" 
			variant="dark"
			icon="icon-arrow-right"
		/>
		<AvatarWithContactInfo />
	</div>
</div>
</section>

<style lang="scss">
	.service-overview {
		padding-inline: 12px;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		@media(min-width: 992px) {
			padding-inline: 20px;
			gap: 5rem;
		}

		&__content{
			background: url('/bg-gradient-donker.svg') no-repeat center center;
			background-size: cover;
			width: 100%;
			// padding: 6.25rem;
			border-radius: 8px;

			@media(min-width: 992px) {
				border-radius: 1.5rem 0;
			}
		}

		&__item{
			display: flex;
			align-items: start;
			justify-content: center;
			gap: 5rem;
			color: var(--color-snow-white);
			padding: 1.5rem;
			padding-bottom: 0;

			@media(min-width: 992px) {
				padding: 6.25rem;
				padding-bottom: 0;
			}
		}

		&__item-text{
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
		}

		&__title-wrap{
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
		}

		&__item-description{
			max-width: 480px;
		}


		&__item-image{
			flex: 1;
			// display: flex;
			align-items: center;
			justify-content: center;
			display: none;

			@media(min-width: 992px) {
				display: flex;
			}

			:global img{
				border-radius: 8px;
				max-width: 512px;
				max-height: 512px;
			}
		}

		&__navigation{
			display: flex;
			gap: 0.5rem;
			padding-left: 1.5rem;
			padding-bottom: 1.5rem;
			padding-right: 1.5rem;
			margin-top: 1.5rem;

			@media(min-width: 992px) {
				padding-left: 6.25rem;
				padding-bottom: 6.25rem;
				margin-top: 0;
			}

			.custom-prev,
			.custom-next {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 16px;
				padding: 16px 24px;
				border-radius: 0.5rem;
				cursor: pointer;
				transition: background-color 0.3s, color 0.3s;
				width: 100%;

				@media(min-width: 992px) {
					width: auto;
				}
			}

			.custom-prev:disabled,
			.custom-next:disabled{
				opacity: 0.5 !important;
			}

			.custom-next{
				background: var(--color-snow-white);
				color: var(--color-dark-mode);
				border: 1px solid var(--color-snow-white);

				&:hover {
					background-color: transparent;
					color: var(--color-snow-white);
				}
			}

			.custom-prev{
				border: 1px solid var(--color-snow-white);
				color: var(--color-snow-white);

				&:hover {
					background-color: var(--color-snow-white);
					color: var(--color-dark-mode);
				}
			}
		
		}

		&__cta{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: start;
			gap: 1rem;
			

			:global .btn {
				width: 100%;
			}

			@media(min-width: 768px) {
				display: none;
			}

			
		}
	}



</style>
