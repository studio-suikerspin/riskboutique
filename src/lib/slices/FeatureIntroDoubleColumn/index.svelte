<script lang="ts">
	import RevealTypeContent from '$lib/components/RevealTypeContent.svelte'
	import SvgShapes from '$lib/components/SvgShapes.svelte'
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicRichText } from '@prismicio/svelte'
	import { onMount } from 'svelte'

	type Props = SliceComponentProps<Content.FeatureIntroDoubleColumnSlice>

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

	const { slice }: Props = $props()

	const formattedHeading = $derived(() => {
		const text = slice.primary.heading
		if (!text) return text
		
		// Split before "as a Service" or "as a service"
		const regex = /\s+(as a [Ss]ervice)/i
		const match = text.match(regex)
		
		if (match) {
			const parts = text.split(regex)
			return `${parts[0]}<br>${match[1]}${parts[2] || ''}`
		}
		
		// Fallback to splitting after second word if no "as a service" found
		const words = text.split(' ')
		if (words.length <= 2) return text
		return `${words[0]} ${words[1]}<br>${words.slice(2).join(' ')}`
	})
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="double-column {paddingClass()}"
	data-reveal-group
>
	<div class="container medium">
		<div class="double-column__inner">
			<div class="double-column__first">
				<div class="double-column__heading">
					<h2>{@html formattedHeading()}</h2>
				</div>
				<div class="double-column__flex-text">
					<div class="text general-content">
						<PrismicRichText field={slice.primary.description} />
					</div>
					<div class="shape">
						<SvgShapes shape={slice.primary.shape} />
					</div>
				</div>
			</div>
			<div class="double-column__second">
				<div class="double-column__second__text-wrap">
					<RevealTypeContent text={slice.primary.highlight} />
					<div class="general-content">
						<PrismicRichText
							field={slice.primary.supporting_text}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.double-column {
		&__inner {
			display: flex;
			flex-direction: column;

			@media (min-width: 768px) {
				gap: 5rem;
			}
			@media (min-width: 992px) {
				gap: unset;
			}
		}

		&__first {
			display: flex;
			flex-direction: column;
			gap: 2.5rem;

			@media (min-width: 768px) {
				// gap: 2.5rem;
			}
		}

		&__heading {
			// max-width: 68.75rem;
			max-width: 78rem;
		}

		&__flex-text {
			display: flex;
			flex-direction: column;
			gap: 2.5rem;

			@media (min-width: 768px) {
				gap: 5rem;
				flex-direction: row;
			}

			.text {
				flex: 1;

				:global p {
					max-width: 530px;
				}
			}
			.shape {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: start;

				:global svg,
				:global .world-shape {
					width: 15.625rem;
					height: 15.625rem;
				}

				@media (min-width: 768px) {
					:global svg,
					:global .world-shape {
						width: 100%;
						height: auto;
						max-height: 25rem;
						max-width: 25rem;
					}
				}
			}
		}

		&__second {
			display: flex;
			justify-content: end;

			&__text-wrap {
				display: flex;
				flex-direction: column;
				justify-content: end;
				gap: 2.5rem;
				max-width: 53.125rem;

				:global p {
					max-width: 35rem;
				}
			}
		}
	}
</style>
