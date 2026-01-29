<script lang="ts">
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'

	import { gsap, SplitText } from '$lib/gsap'

	import { onMount } from 'svelte'

	type Props = SliceComponentProps<Content.CenteredMessageSlice>

	const { slice }: Props = $props()

	function initStickyTitleScroll() {
		const wraps = document.querySelectorAll('[data-sticky-title="wrap"]')

		wraps.forEach((wrap) => {
			const headings = Array.from(
				wrap.querySelectorAll('[data-sticky-title="heading"]')
			)

			const masterTl = gsap.timeline({
				scrollTrigger: {
					trigger: wrap,
					start: 'top 40%',
					end: 'bottom bottom',
					scrub: true
				}
			})

			const revealDuration = 0.7,
				fadeOutDuration = 0.7,
				overlapOffset = 0.15

			headings.forEach((heading, index) => {
				// Save original heading content for screen readers
				heading.setAttribute('aria-label', heading.textContent)

				const split = SplitText.create(heading, { type: 'words,chars' })

				// Hide all the separate words from screenreader
				split.words.forEach((word) => word.setAttribute('aria-hidden', 'true'))

				// Reset visibility on the 'stacked' headings
				gsap.set(heading, { visibility: 'visible' })

				const headingTl = gsap.timeline()
				headingTl.from(split.chars, {
					autoAlpha: 0,
					stagger: { amount: revealDuration, from: 'start' },
					duration: revealDuration
				})

				// Animate fade-out for every heading except the last one.
				if (index < headings.length - 1) {
					headingTl.to(split.chars, {
						autoAlpha: 0,
						stagger: { amount: fadeOutDuration, from: 'end' },
						duration: fadeOutDuration
					})
				}

				// Overlap the start of fade-in of the new heading a little bit
				if (index === 0) {
					masterTl.add(headingTl)
				} else {
					masterTl.add(headingTl, `-=${overlapOffset}`)
				}
			})
		})
	}

	onMount(() => {
		initStickyTitleScroll()
	})
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	data-sticky-title="wrap"
	class="section-sticky-title"
>
	<div class="section-sticky-title__container">
		<div class="section-sticky-title__inner">
			{#each slice.primary.items as title, index (index)}
				{#if index === 0}
					<div
						data-sticky-title="heading"
						class="section-sticky-title__el"
					>
						{title.headline}
					</div>
				{:else}
					<div
						data-sticky-title="heading"
						class="section-sticky-title__el is--stacked"
					>
						{title.headline}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.section-sticky-title {
		background: linear-gradient(#0b0e13, #0e4f63);
		width: 100%;
		height: 350vh;
		position: relative;
		color: #f9f9f8;

		&__container {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100vh;
			padding-left: 1.5em;
			padding-right: 1.5em;

			position: sticky;
			top: 0;
		}

		&__inner {
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			width: 100%;

			max-width: 60em;
			position: relative;
			text-align: center;

			margin-left: auto;
			margin-right: auto;
		}

		&__el {
			margin-block-start: 0;
			margin-block-end: 0;

			font-size: 2rem;
			font-weight: 500;

			.is--stacked {
				visibility: hidden;
				position: absolute;
			}

			@media (min-width: 992px) {
				font-size: 4rem;
			}
		}
	}
</style>
