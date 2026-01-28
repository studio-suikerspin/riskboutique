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

		&__wrapper {
			gap: 5rem;
			display: grid;
			padding-block-end: 2.5rem;
			padding-block-start: 8.75rem;

			@media (min-width: 992px) {
				margin: auto;

				padding-block: 12.125rem;
				max-width: 1300px;
				padding-inline: unset;
				grid-template-columns: 1fr 408px;
				align-items: center;
				justify-content: center;
			}
		}

		&__text {
			display: flex;
			gap: 2.5rem;
			flex-direction: column;
			color: white;
		}

		&__image {
			object-fit: cover;
			border-radius: 0.5rem;
			width: 100%;

			@media (max-width: 992px) {
				max-height: 500px;
				object-position: left -175px;
			}

			@media (max-width: 768px) {
				max-height: 400px;
				object-position: left -125px;
			}

			@media (max-width: 576px) {
				object-position: left -73px;
			}
		}
	}
</style>
