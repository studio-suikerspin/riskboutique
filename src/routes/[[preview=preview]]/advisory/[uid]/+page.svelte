<script lang="ts">
	import { SliceZone } from '@prismicio/svelte'
	import type { PageProps } from './$types'
	import SvgBackgroundLines from '$lib/components/SvgBackgroundLines.svelte'

	import { components } from '$lib/slices'
	import { initContentRevealScroll } from '$lib'
	import { afterNavigate } from '$app/navigation'

	const { data }: PageProps = $props()

	afterNavigate(() => {
		initContentRevealScroll()
	})
</script>

<SliceZone
	slices={data.page.data.slices}
	{components}
/>

<SvgBackgroundLines />
