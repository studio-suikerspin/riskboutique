<script lang="ts">
	import type { Content } from '@prismicio/client'
	import {
		PrismicRichText,
		type SliceComponentProps
	} from '@prismicio/svelte'
	import { PrismicImage } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.ImageTextColumns2Slice>

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
</script>

<section
	class="image-block {paddingClass()}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	data-id={slice.id}
>
	<div class="container">
		<div class="image-block__inner">
			{#each slice.primary.image_text_block as item}
				<div
					class="image-block__item"
					data-reveal-group
				>
					<div class="image-block__image">
						<PrismicImage field={item.image} />
					</div>
					<div class="image-block__content">
						<h4>{item.headline}</h4>
						<div class="rich-text-content">
							<PrismicRichText field={item.description} />
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.image-block {
		&__inner {
			display: flex;
			flex-direction: column;
			gap: 5rem;
		}

		&__item {
			display: flex;
			flex-direction: column;
			gap: 2rem;

			@media (min-width: 992px) {
				gap: 5rem;
				flex-direction: row;
			}
		}

		&__image {
			flex: 3;
			max-height: 750px;
			overflow: hidden;
			border-radius: 0.5rem;

			:global img {
				width: 100%;
				height: 100%;
				display: block;
				object-fit: cover;
				max-height: 100%;
				max-width: 100%;
			}
		}

		&__content {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			// max-width: 46rem;
			flex: 4;

			:global & ul {
				padding-inline-start: 1.5rem;
				list-style: unset;
			}

			.rich-text-content {
				max-width: 46rem;
			}
		}
	}
</style>
