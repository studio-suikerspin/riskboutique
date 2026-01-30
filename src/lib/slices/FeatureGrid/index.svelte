<script lang="ts">
	import SvgShapes from '$lib/components/SvgShapes.svelte'
import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicRichText } from '@prismicio/svelte'
	import { PrismicImage } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.FeatureGridSlice>

	const { slice }: Props = $props()
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="feature-grid"
>
<div class="container">
	<div class="feature-grid__inner">
		<div class="feature-grid__heading">
			<h3 class="low">{slice.primary.heading}</h3>
		</div>
		<div class="feature-grid__content">
			{#each slice.primary.features as item}
				<div class="feature-grid__item">
					<div class="icon">
						<SvgShapes shape={item.icon} featureGrid={true} />
					</div>
					<div class="text general-content">
						<PrismicRichText field={item.description} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>	
</section>

<style lang="scss">
	.feature-grid{

		&__inner{
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
		}

		&__content{
			display: flex;
			gap: 1rem;
		}

		&__item{
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 0.625rem;
			background: url('/bg-gradient-licht.svg');
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			padding: 1.5rem;
			border-radius: 0.5rem;

			.icon{
				:global svg{
					width: 4.5rem;
					height: 4.5rem;
				}
			}
		}


	}
</style>

