<script lang="ts">
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.HeroTextOnlySlice>

	const { slice }: Props = $props()
</script>

<section
	class="hero"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="hero__inner">
		<h1 class="h2">{slice.primary.headline}</h1>
	</div>
</section>

<style lang="scss">
	.hero {
		background: url('/bg-gradient-donker.svg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;

		&__inner {
			padding-block: 9.25rem;
			display: flex;
			align-items: center;
			justify-content: center;

			color: var(--color-snow-white);
		}
	}
</style>
