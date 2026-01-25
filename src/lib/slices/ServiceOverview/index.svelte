<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte'
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.ServiceOverviewSlice>

	const { slice }: Props = $props()
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
	<div class="service-overview__content">
		{#each slice.primary.service_items as item}
			<div class="service-overview__item">
				<div class="service-overview__item-text">
					<div class="service-overview__title-wrap">
						<div class="service-overview__counter">
							<div class="service-overview__serial subtitle">01 / 04</div>
						</div>
						<h4 class="service-overview__item-title">{item.service_title}</h4>
					</div>
					<div class="service-overview__item-description">
						<PrismicRichText field={item.service_description} />
					</div>
				</div>
				<div class="service-overview__item-image">
					<PrismicImage field={item.service_image} />
				</div>
			</div>
		{/each}
	</div>
</div>
</section>

<style lang="scss">
	.service-overview {
		padding-inline: 12px;
		display: flex;
		flex-direction: column;
		gap: 5rem;

		@media(min-width: 768px) {
			padding-inline: 20px;
		}

		&__content{
			background: url('/bg-gradient-donker.svg') no-repeat center center;
			background-size: cover;
			width: 100%;
			padding: 6.25rem;
			border-radius: 1.5rem 0;
		}

		&__item{
			display: flex;
			align-items: start;
			justify-content: center;
			gap: 5rem;
			color: var(--color-snow-white);
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
		&__item-image{
			flex: 1;

			:global img{
				border-radius: 8px;
			}
		}
	}
</style>
