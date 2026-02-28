<script lang="ts">
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicRichText } from '@prismicio/svelte'
	import { PrismicImage } from '@prismicio/svelte'
	import { tick } from 'svelte'
	import { gsap } from '$lib/gsap'
	import { browser } from '$app/environment'
	import { afterNavigate } from '$app/navigation'

	type Props = SliceComponentProps<Content.TimelineStepsSlice>

	const { slice }: Props = $props()

	const paddingClass = $derived(() => {
		switch (slice.primary.section_padding) {
			case 'top':
				return 'block-padding-top'
			case 'bottom':
				return 'block-padding-bottom'
			case 'both':
				return 'block-padding'
			case 'none':
				return ''
			default:
				return ''
		}
	})

	let cleanup: (() => void) | undefined

	const initTimeline = () => {
		const progressLine = document.querySelector('[data-progress-line]')
		const timelineBlock = document.querySelector('[data-timeline-block]')

		if (!browser || !progressLine || !timelineBlock) return

		cleanup?.()

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: timelineBlock,
				start: 'top center',
				end: 'bottom bottom',
				scrub: 0.5
			}
		})

		tl.to(progressLine, {
			height: '100%',
			ease: 'none'
		})

		cleanup = () => {
			tl.scrollTrigger?.kill()
			tl.kill()
		}
	}

	$effect(() => {
		initTimeline()

		return () => cleanup?.()
	})

	afterNavigate(async () => {
		await tick()

		initTimeline()
	})
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="time-line-steps {paddingClass()}"
>
	<div class="container medium">
		<div class="time-line-steps__inner">
			<div class="time-line-steps__first-block">
				<div class="heading h3 low">
					{slice.primary.section_title}
				</div>
				<div class="description general-content">
					<PrismicRichText field={slice.primary.introduction} />
				</div>
			</div>
			<div
				class="time-line-steps__second-block"
				data-timeline-block
			>
				<div
					class="time-line-steps__progress-line"
					data-progress-line
				></div>
				{#each slice.primary.steps as item, i (i)}
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
	.time-line-steps {
		&__inner {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 2.5rem;

			@media (min-width: 768px) {
				flex-direction: row;
				gap: 5rem;
			}
		}

		&__first-block {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 2.5rem;

			@media (min-width: 768px) {
				position: sticky;
				top: 7rem;
				align-self: flex-start;
			}

			.description {
				max-width: 40rem;
			}
		}

		&__item {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			position: relative;
			@media (min-width: 992px) {
				&::before {
					content: '';
					position: absolute;
					left: -2.78rem; // uitlijnen op de lijn
					top: 0.4rem; // uitlijnen met nummer
					width: 0.75rem;
					height: 0.75rem;
					background-color: #0f4c5c;
					border-radius: 50%;
				}
			}

			.general-content {
				max-width: 40rem;
			}
		}

		&__second-block {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 2.5rem;

			position: relative;

			@media (min-width: 768px) {
				gap: 5rem;
			}

			@media (min-width: 992px) {
				&::before {
					content: '';
					position: absolute;
					left: -2.51rem;
					top: 0.75rem;
					bottom: 0.75rem;
					width: 2px;
					background-color: rgba(178, 193, 189, 0.7);
				}
			}

			.number {
				font-size: 1.5rem;
				font-weight: 400;
				color: rgba(11, 14, 19, 0.5);
			}

			.image-content {
				width: 100%;
				height: 14rem;
				overflow: hidden;
				border-radius: 0.5rem;

				@media (min-width: 768px) {
					height: 17.8rem;
				}

				:global img {
					width: fit-content;
					height: 100%;
					object-fit: cover;
					border-radius: 0.5rem;
				}
			}
		}

		&__item-heading {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		&__progress-line {
			position: absolute;
			left: -2.51rem;
			top: 0.75rem;
			width: 2px;
			height: 0;
			background-color: #0f4c5c;
			transform-origin: top;
			z-index: 1;
		}
	}
</style>
