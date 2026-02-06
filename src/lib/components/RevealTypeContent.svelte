<!-- Usage -->
<!-- <RevealTypeContent text={slice.primary.content} />-->

<script lang="ts">
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import { gsap } from '$lib/gsap'
	import { SplitText } from 'gsap/SplitText'
	import type { KeyTextField } from '@prismicio/client'

	type Props = {
		text: KeyTextField
		darkBackground?: boolean
		trigger?: string | HTMLElement | null
	}

	const { text, darkBackground = false, trigger }: Props = $props()
	let textElement: HTMLElement

	function revealType() {
		if (!textElement) return

		let split = SplitText.create(textElement, { type: 'words' })

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: trigger || textElement,
				start: `top bottom-=10%`, // Start when the top of the elment hits the top of the container + 100px
				end: `bottom center`, // End when the center of the element hits the top of the container
				scrub: true
				// markers: true
			}
		})

		tl.from(split.words, {
			color: darkBackground
				? 'rgba(249, 249, 248, 0.10)'
				: 'rgba(0, 0, 0, 0.08)',
			stagger: 0.1
		})
	}

	onMount(() => {
		if (browser) {
			revealType()
		}
	})
</script>

<h3
	class="reveal-type-content"
	bind:this={textElement}
>
	{text}
</h3>
