<script lang="ts">
	import RevealTypeContent from '$lib/components/RevealTypeContent.svelte'
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.HighlightedTextBlockSlice>

	const { slice }: Props = $props()
</script>

<section
     class="block-padding-{slice.primary.section_padding} {slice.primary.section_padding === 'both' ? 'block-padding' : ''}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
     <div class="container">
          <RevealTypeContent text={slice.primary.content} />
     </div>
</section>
