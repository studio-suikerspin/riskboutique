<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import ConnectWithUs from '$lib/components/ConnectWithUs.svelte'
	import type { Content } from '@prismicio/client'
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.ContentHeroSlice>

	const { slice }: Props = $props()
	console.log(slice.primary)
</script>

<section
	class="section-careers-hero"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="section-careers-hero__wrapper">
		<div class="section-careers-hero__text">
			<h1>{slice.primary.headline}</h1>
			<PrismicRichText field={slice.primary.description} />
			{#each slice.primary.actions as item, index (index)}
				<Button
					field={item}
					text={item.text}
					variant="white"
					className="'btn', 'btn--link', 'main-header__cta"
					icon="icon-arrow-right"
				/>
			{/each}
		</div>
		<img
			class="section-careers-hero__image"
			src={slice.primary.main_visual.url}
			alt={slice.primary.main_visual.alt}
		/>
	</div>
</section>

<style lang="scss">
	.section-careers-hero {
		background: url('/bg-gradient-donker.svg');
		background-repeat: no-repeat;
		background-size: cover;
		padding-inline: 1.25rem;

		& .section-careers-hero__wrapper {
			display: flex;
			flex-direction: column;
			gap: 5rem;
			padding-block-end: 2.5rem;
			padding-block-start: 8.75rem;

			@media (min-width: 992px) {
				margin: auto;
				flex-direction: row;
				justify-content: space-between;
				gap: 2.5rem;

				padding-block: 12.125rem;
				max-width: 1000px;
				padding-inline: unset;
			}
		}

		& .section-careers-hero__text {
			display: flex;
			gap: 2.5rem;
			flex-direction: column;
			color: white;
		}

		& .section-careers-hero__image {
			max-height: 600px;
			object-fit: cover;
		}
	}
</style>
