<script lang="ts">
	import RevealTypeContent from '$lib/components/RevealTypeContent.svelte';
import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.ImageTextColumnsSlice>

	const { slice }: Props = $props()
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="image-text-columns"
>
<div class="container">
	
		<div class="image-text-columns__content">
		{#each slice.primary.blocks as item, index}
			<div class="image-text-columns__column {index === 0 ? 'first' : index === 1 ? 'second' : index === 2 ? 'third' : ''}">
				{#if index === 1 || index === 2}
					<div class="image-text-columns__image">
						<PrismicImage field={item.image} />
					</div>
				{/if}
				<!-- <h3 class="image-text-columns__title h3">{item.heading}</h3> -->
				<div class="image-text-columns__title">
					<RevealTypeContent text={item.heading} darkBackground={true} />
				</div>
				<div class="image-text-columns__text general-content">
					<PrismicRichText field={item.description} />
				</div>
			</div>
		{/each}
		</div>
</div>
</section>

<style lang="scss">
	.image-text-columns{
		background: var(--color-dark-mode);
		color: var(--color-snow-white);
		padding-top: 6.25rem;
		padding-bottom: 6.25rem;

		@media(min-width: 768px){
			padding-bottom: 12.5rem;
			padding-top: 6.25rem;
		}
		
		&__content{
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
		}

		&__column{
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}

		@media(min-width: 992px){
			.image-text-columns__column.first{
				max-width: 71.25rem;
			}
			.image-text-columns__column.second{
				max-width: 52.5rem;
				align-self: center;
				margin-left: 25rem;
			}
			.image-text-columns__column.third{
				max-width: 81.25rem;
				margin-top: -6.25rem;
			}
		}

		&__image{
			overflow: hidden;
			border-radius: 8px;
			width: 100%;
			height: auto;
			width: 100%;
			height: 23.125rem;

			@media(min-width: 768px){
				width: 23.125rem;
				// height: 370px;
			}

			:global img{
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&__text{
			max-width: 41.25rem;
		}

	}
</style>
