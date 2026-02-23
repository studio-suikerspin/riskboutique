<script lang="ts">
	import type { RichTextField } from '@prismicio/client'
	import { PrismicRichText } from '@prismicio/svelte'
	import SvgShapes from './SvgShapes.svelte'

	type Props = {
		title: string
		description: RichTextField
		background?: string
		text_color?: string
		number?: string
		shape?: string
		isSliderCard?: boolean
	}

	const {
		title,
		description,
		background,
		text_color,
		number,
		shape,
		isSliderCard
	}: Props = $props()
</script>

<div
	class="feature-card border-radius {isSliderCard
		? 'feature-cards--slider'
		: ''}"
	style="background: var(--color-{background}); color: var(--color-{text_color});"
>
	<div class="feature-card__text">
		<h4
			class="feature-cards__card-title"
			style="color: var(--color-{text_color});"
		>
			{title}
		</h4>
		<div
			class="feature-card__description subtitle"
			style="color: var(--color-{text_color});"
		>
			<PrismicRichText field={description} />
		</div>
	</div>
	<div class="feature-card__shape">
		<SvgShapes {shape} />
	</div>
</div>

<style lang="scss">
	.feature-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 2.5rem;
		min-height: 600px;
		height: 100%;

		&__text {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		&__shape {
			display: flex;
			align-items: flex-end;
			justify-content: center;
		}
	}

	.feature-card__shape {
		padding-block-start: 2.5rem;
		padding-inline: 2.5rem;
	}

	.feature-card__shape :global svg {
		// max-width: 280px;
		height: auto;
		max-width: 100%;
	}
</style>
