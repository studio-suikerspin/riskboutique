<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ValuePropositionSlice>;

	const { slice }: Props = $props();
</script>

<section class="section-reveal-type" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	RevealTypeWithCta
	<PrismicLink class="btn btn--underline" field={slice.primary.cta_link} />
</section>

<style lang="scss">
	.section-reveal-type {
		padding: 32px;
	}

	.btn--underline {
		background: transparent;
	}
</style>