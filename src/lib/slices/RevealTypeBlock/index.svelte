<script lang="ts">
	import RevealTypeContent from '$lib/components/RevealTypeContent.svelte'
	import type { Content } from '@prismicio/client'

	type Props = SliceComponentProps<Content.HighlightedTextBlockSlice>

	const { slice }: Props = $props()
</script>

<section
	class="section-careers-reveal-type"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<RevealTypeContent text={slice.primary.content} />
</section>

<style>
	.section-careers-reveal-type {
		height: 1000px;
	}
</style>
