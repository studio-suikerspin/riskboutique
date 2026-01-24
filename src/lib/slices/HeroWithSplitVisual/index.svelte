<script lang="ts">
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicImage } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.HeroWithSplitVisualSlice>

	const { slice }: Props = $props()

	// type Props = SliceComponentProps<Content.ComingSoonSlice>;
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
<div class="hero-advisory">

	<div class="hero-advisory__content">
		<div class="hero-advisory__title-wrap">
			<h1 class="hero-advisory__title">Advisory</h1>
			<div class="hero-advisory__subtitle h4">{slice.primary.page_title}</div>
		</div>
		<div class="hero-advisory__visual">
			<PrismicImage field={slice.primary.visual} />
		</div>
	</div>
</section>

<style lang="scss">
	.hero-advisory{
		height: 130vh;
		width: 100%;
		position: relative;
		overflow: hidden;
		background: url('/bg-gradient-donker-.svg') no-repeat center center;
		background-size: cover;

		@media(min-width: 768px){
			height: 100vh;
		}

		&__content{
			display: flex;
			flex-direction: column;
			align-items: start;
			justify-content: center;
			height: 100%;
			// gap: 2rem;
			padding-inline: 12px;
			gap: 5rem;
			// position: relative;
			// z-index: 9;

			@media(min-width: 768px){
				padding-inline: 20px;
				flex-direction: row;
				gap: 2.5rem;
				align-items: center;
				justify-content: space-between;
			}
		}

		&__title-wrap{
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			color: var(--color-snow-white);

			@media(min-width: 768px){
				gap: 2.5rem;
			}
		}

		&__visual :global img{
			width: 100%;
			height: auto;
			max-width: 572px;
			max-height: 572px;
			object-fit: cover;
			border-radius: 1.5rem 0;
			border: 1px solid var(--color-snow-white);

		}
	}
</style>
