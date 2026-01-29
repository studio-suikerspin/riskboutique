<script lang="ts">
	import type { Content } from '@prismicio/client'
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.ImageTextColumns2Slice>

	const { slice }: Props = $props()
</script>

<section
	class="section-careers-image-block"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	data-id={slice.id}
>
	<img
		src={slice.primary.media.url}
		alt={slice.primary.media.alt}
	/>

	<div class="section-careers-image-block__content">
		<h4>{slice.primary.headline}</h4>
		<div>
			<PrismicRichText field={slice.primary.description} />
		</div>
	</div>
</section>

<style lang="scss">
	.section-careers-image-block {
		padding-inline: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		max-width: 1500px;
		margin: auto;

		&[data-id='image_text_columns_2$c10ad0eb-ce83-405f-9fa8-6587935358b2'] {
			padding-top: 5rem;
		}

		@media (min-width: 992px) {
			padding-inline: 1.25rem;
			flex-direction: row;
			gap: 5rem;
		}

		& img {
			width: 100%;
			order: 1;

			@media (min-width: 992px) {
				width: 50%;
				order: -1;
			}
		}

		&__content {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			:global & ul {
				padding-inline-start: 1.5rem;
				list-style: unset;
			}
		}
	}
</style>
