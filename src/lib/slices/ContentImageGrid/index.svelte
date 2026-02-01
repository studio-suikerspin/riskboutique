<script lang="ts">
	import type { Content } from '@prismicio/client'
	import {
		PrismicRichText,
		PrismicImage,
		type SliceComponentProps
	} from '@prismicio/svelte'
	import { gsap } from '$lib/gsap'
	import { onMount } from 'svelte'

	type Props = SliceComponentProps<Content.ContentImageGridSlice>

	const { slice }: Props = $props()

	onMount(() => {
		const gridItems = document.querySelectorAll('.grid-item')

		gsap.set(gridItems, { autoAlpha: 0, y: 50 })
		gsap.to(gridItems, {
			autoAlpha: 1,
			y: 0,
			duration: 0.35,
			ease: 'power2.out',
			stagger: 0.2,
			scrollTrigger: {
			     trigger: '.content-grid',
			     start: '-20% top',
				end: 'bottom bottom',
			}
		})
	})
</script>

<section
	class="content-grid block-padding"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<div class="content-grid__grid">
			{#each slice.primary.items as item, index (index)}
				<div
					class="grid-item grid-item--{item.type} grid-item--{item.item_position}"
				>
					{#if item.type === 'text'}
						<div class="grid-item__text general-content">
							<PrismicRichText field={item.text} />
						</div>
					{:else if item.type === 'image'}
						<PrismicImage
							field={item.image}
							class="grid-item__image"
						/>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.content-grid {
		&__grid {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			/* grid-template-rows: repeat(3, 1fr); */
			column-gap: 4.5rem;
			row-gap: 2.5rem;

			@media (min-width: 768px) {
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: repeat(3, 1fr);
				column-gap: 4.5rem;
				row-gap: 2.5rem;
			}

			@media (min-width: 1024px) {
				grid-template-columns: repeat(3, 1fr);
				grid-template-rows: repeat(3, 1fr);
				column-gap: 4.5rem;
				row-gap: 1rem;
			}
		}

		.grid-item {
			display: flex;
			height: 100%;

			&--image {
				grid-row: span 2;
			}

			&--start {
				align-items: start;
			}

			&--center {
				align-items: center;
			}

			&--end {
				align-items: end;
			}
		}
	}
</style>
