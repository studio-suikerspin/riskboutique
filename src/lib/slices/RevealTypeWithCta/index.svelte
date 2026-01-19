<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ValuePropositionSlice>;

	const { slice }: Props = $props();
</script>

<section
	class="section-reveal-type"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<!-- Arrow right -->
	<i class="icon-arrow-right"></i>

	<!-- Text wrapper -->
	<div class="reveal-type__text">
		<!-- Label -->
		<div>{slice.primary.label}</div>

		<!-- Content -->
		<div>{slice.primary.content}</div>

		<!-- Link -->
		<PrismicLink class="link" field={slice.primary.cta_link}>
			{slice.primary.cta_link.text}
			<i class="icon-arrow-right"></i>
		</PrismicLink>
	</div>
</section>

<style lang="scss">
	.section-reveal-type {
		padding: 32px;
	}
</style>
