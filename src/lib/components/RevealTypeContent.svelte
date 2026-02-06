<!-- Usage -->
<!-- <RevealTypeContent text={slice.primary.content} />-->

<script lang="ts">
	import { browser } from '$app/environment'
	import { afterNavigate } from '$app/navigation'
	import { gsap, SplitText } from '$lib/gsap'
	import type { KeyTextField } from '@prismicio/client'
	import { tick } from 'svelte'

	type Props = {
		text: KeyTextField
		darkBackground?: boolean
		trigger?: string | HTMLElement | null
	}

	const { text, darkBackground = false, trigger }: Props = $props()
	let textElement: HTMLElement
	let cleanup: (() => void) | undefined

	const initRevealType = () => {
		if (!browser || !textElement) return

		cleanup?.()

		const split = SplitText.create(textElement, { type: 'words' })

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: trigger || textElement,
				start: `top bottom-=10%`,
				end: `bottom center`,
				scrub: true
			}
		})

		tl.from(split.words, {
			color: darkBackground
				? 'rgba(249, 249, 248, 0.10)'
				: 'rgba(0, 0, 0, 0.08)',
			stagger: 0.1
		})

		cleanup = () => {
			tl.scrollTrigger?.kill()
			tl.kill()
			split.revert()
		}
	}

	$effect(() => {
		initRevealType()
		return () => cleanup?.()
	})

	afterNavigate(async () => {
		await tick()
		initRevealType()
	})
</script>

<h3
	class="reveal-type-content"
	bind:this={textElement}
>
	{text}
</h3>
