<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { PrismicRichText, PrismicImage } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.HeroStatementSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	hero section
</section>
