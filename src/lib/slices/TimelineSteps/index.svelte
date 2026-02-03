<script lang="ts">
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicRichText } from '@prismicio/svelte'
	import { PrismicImage } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.TimelineStepsSlice>

	const { slice }: Props = $props()

	const paddingClass = $derived(() => {
		switch (slice.primary.section_padding) {
			case 'top': return 'block-padding-top';
			case 'bottom': return 'block-padding-bottom';
			case 'both': return 'block-padding';
			case 'none': return '';
			default: return '';
		}
	});

</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="time-line-steps {paddingClass()}"
>
<div class="container">
	<div class="time-line-steps__inner">
		<div class="time-line-steps__first-block">
			<div class="heading h3 low">
				{slice.primary.section_title}
			</div>
			<div class="description general-content">
				<PrismicRichText field={slice.primary.introduction} />
			</div>
		</div>
		<div class="time-line-steps__second-block">
			{#each slice.primary.steps as item}
				<div class="time-line-steps__item">
					<div class="time-line-steps__item-heading">
						<div class="number">
							0{item.step_number}
						</div>
						<div class="title h4">
							{item.title}
						</div>
					</div>
					<div class="general-content">
						<PrismicRichText field={item.description} />
					</div>
					{#if item.image?.url}
					<div class="image-content">
						<PrismicImage field={item.image} />
					</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
	
</section>

<style lang="scss">
	.time-line-steps{

		&__inner{
			display: flex;
			justify-content: space-between;
			gap: 5rem;
		}

		&__first-block{
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
			position: sticky;
			top: 1rem;
			align-self: flex-start;
	}

	&__item{
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	&__second-block{
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 5rem;

			.number{
				font-size: 1.5rem;
				font-weight: 400;
				color: rgba(11, 14, 19, 0.50);
			}

			.image-content{
				width: 100%;
				height: 17.8rem;
				overflow: hidden;
				border-radius: 0.5rem;

				:global img{
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}

		&__item-heading{
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
