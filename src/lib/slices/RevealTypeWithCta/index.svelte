<script lang="ts">
	import RevealTypeContent from '$lib/components/RevealTypeContent.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicLink, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ValuePropositionSlice>;

	const { slice }: Props = $props();
</script>

<section
	class="section-reveal-type block-padding-top"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<!-- Arrow right -->
	<i class="icon-arrow-right"></i>

	<!-- Text wrapper -->
	<div class="reveal-type__text">
		<div class="reveal-type__text-wrapper">
			<!-- Label -->
			<div class="reveal-type__text-label">
				<i class="icon-waves"></i>
				{slice.primary.label}
			</div>

			<!-- Content -->
			<RevealTypeContent text={slice.primary.content} darkBackground={false} />
		</div>

		<!-- Link -->
		<PrismicLink class="link" field={slice.primary.cta_link}>
			{slice.primary.cta_link.text}
			<i class="icon-arrow-right"></i>
		</PrismicLink>
	</div>
</section>

<style lang="scss">
	.section-reveal-type {
		padding-inline: 1.25rem;

		& > .icon-arrow-right {
			display: none;

			@media (min-width: 768px) {
				display: block;
				font-size: 3rem;
				margin-top: 2rem;
			}
		}

		& .reveal-type__text {
			display: inline-flex;
			flex-direction: column;
			gap: 2.5rem;

			@media (min-width: 768px) {
				gap: 2rem;
			}

			& .reveal-type__text-wrapper {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;

				& .reveal-type__text-label {
					display: flex;
					gap: 0.5rem;
					align-items: center;
					font-weight: 400;

					@media (min-width: 768px) {
						font-size: 1.125rem;
						font-weight: 100;
					}
				}

				@media (min-width: 768px) {
					gap: 2.5rem;
				}
			}
		}

		@media (min-width: 768px) {
			max-width: 75rem;
			margin: auto;

			display: flex;
			gap: clamp(6.25rem, -0.1786rem + 13.3929vw, 11.875rem);
		}
	}
</style>
