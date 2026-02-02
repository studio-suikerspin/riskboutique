<script lang="ts">
	import RevealTypeContent from '$lib/components/RevealTypeContent.svelte'
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { onMount } from 'svelte'

	type Props = SliceComponentProps<Content.HighlightedTextBlockSlice>

	const { slice }: Props = $props()

	let trigger: HTMLElement | null = $state(null)

	onMount(() => {
		trigger = document.querySelector('.reveal-type-block')
	})
</script>

<section
	class="reveal-type-block block-padding-{slice.primary
		.section_padding} {slice.primary.section_padding === 'both'
		? 'block-padding'
		: ''}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		{#if slice.primary.items.length}
			<div class="reveal-type-block__stack">
				{#each slice.primary.items as item, key (key)}
					<RevealTypeContent
						text={item.content}
						{trigger}
					/>
				{/each}
			</div>
		{:else}
			<RevealTypeContent text={slice.primary.content} />
		{/if}
	</div>
</section>

<style lang="scss">
	.reveal-type-block {
		&__stack {
			display: flex;
			flex-direction: column;
			gap: 4.75rem;
		}
	}
</style>
