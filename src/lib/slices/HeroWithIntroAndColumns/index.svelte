<script lang="ts">
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicImage } from '@prismicio/svelte'
	import { PrismicRichText } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.HeroWithIntroAndColumnsSlice>

	const { slice }: Props = $props()
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="hero"
>
<div class="hero__inner">
	<div class="hero__image">
		<PrismicImage field={slice.primary.background_image} />
		<div class="overlay"></div>
	</div>
	<div class="container">
		<div class="hero__heading">
			<div class="hero__title">
				<h1 class="">
				<PrismicRichText field={slice.primary.title} />
				</h1>
				<div class="subtitle">
					<PrismicRichText field={slice.primary.subtitle} />
				</div>
			</div>
			<div class="hero__columns">
				{#each slice.primary.descriptions as item}
					<div class="hero__columns_item">
						<div class="title">
							<PrismicRichText field={item.section_title} />
						</div>
						<div class="general-content">
							<PrismicRichText field={item.section_body} />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
	
</section>

<style lang="scss">
	.hero{
		background: url('/bg-gradient-licht.svg');
		background-repeat: no-repeat;
		background-size: cover;
		height: 110vh;

		


		&__inner{
			position: relative;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
		}

		&__image{
			width: 100%;
			height: 55vh;
			position: relative;

			:global img{
				object-fit: cover;
				width: 100%;
				height: 100%;
			}

			.overlay{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.25);
				mix-blend-mode: multiply;
			}
		}

		&__heading{
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
		}

		&__title{
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			.subtitle{

				:global p{
					font-size: 2.5rem;
					font-weight: 600;
					line-height: 90%; /* 36px */
					letter-spacing: -1.6px;
					color: rgba(11, 14, 19, 0.75);
				}
			}
		}

		&__columns{
			display: flex;
			justify-content: space-between;
			gap: 5rem;

			&_item{
				flex: 1;				
			}
		}
	}

</style>
