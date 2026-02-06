<script lang="ts">
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { gsap } from '$lib/gsap'
	import { onMount } from 'svelte'
	import AvatarWithContactInfo from '$lib/components/AvatarWithContactInfo.svelte'
	import Button from '$lib/components/Button.svelte'

	type Props = SliceComponentProps<Content.AbstractHighlightsSlice>

	const { slice }: Props = $props()

	onMount(() => {
		const patterns = gsap.utils.toArray('[data-highlight-pattern]')

		if (!patterns) return

		const tl = gsap.timeline()
		patterns.forEach((pattern) => {
			const dashes = pattern.querySelectorAll('.pattern-dash')

			tl.fromTo(
				dashes,
				{
					y: '5px',
					autoAlpha: 0.5
				},
				{
					y: 0,
					autoAlpha: 1,
					stagger: 0.1
					// yoyo: true,
					// repeat: -1
				}
			)
		})

		tl.repeat(-1)
		tl.yoyo(true)
	})
</script>

<section
	class="abstract-highlights block-padding-{slice.primary
		.section_padding} {slice.primary.section_theme
		? 'abstract-highlights--dark'
		: ''}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<div class="abstract-highlights__inner">
			<h2 class="h1 headline">{slice.primary.headline}</h2>

			<div
				class="abstract-highlights__grid"
				data-reveal-group
			>
				{#each slice.primary.highlights as highlight, index (index)}
					<div class="highlight">
						<div
							class="highlight__pattern"
							data-highlight-pattern
						>
							<div class="pattern-circle"></div>
							<div class="pattern-dashes">
								<div class="pattern-dash"></div>
								<div class="pattern-dash"></div>
								<div class="pattern-dash"></div>
								<div class="pattern-dash"></div>
								<div class="pattern-dash"></div>
								<div class="pattern-dash"></div>
								<div class="pattern-dash"></div>
								<div class="pattern-dash"></div>
								<div class="pattern-dash"></div>
								<div class="pattern-dash"></div>
							</div>
						</div>
						<div class="highlight__text">{highlight.text}</div>
					</div>
				{/each}
			</div>

			<div class="abstract-highlights__contact-wrap">
				<AvatarWithContactInfo isDarkBackground={true} />
				<Button
					field={slice.primary.cta_link}
					text={slice.primary.cta_link.text}
					variant="white"
					icon="icon-arrow-right"
				/>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.abstract-highlights {
		&--dark {
			background: var(--color-dark-mode);
			color: var(--color-snow-white);
		}

		&__inner {
			display: flex;
			flex-direction: column;
			gap: 2.5rem;

			@media (min-width: 1024px) {
				gap: 7.5rem;
			}
		}

		&__grid {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			column-gap: 4rem;
			row-gap: 4rem;

			@media (min-width: 568px) {
				grid-template-columns: repeat(2, 1fr);
				row-gap: 5rem;
			}

			@media (min-width: 1200px) {
				grid-template-columns: repeat(4, 1fr);
				column-gap: 2.5rem;
			}
		}

		&__contact-wrap {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			align-self: flex-end;
		}

		.highlight {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: 100%;
			min-width: 0;

			justify-self: flex-start;

			@media (min-width: 768px) {
				gap: 2.5rem;
			}

			&__pattern {
				display: grid;
				grid-auto-flow: column;
				align-items: center;
				justify-content: flex-start;
				gap: 2.5rem;

				.pattern-circle {
					width: 1.5rem;
					height: 1.5rem;
					border-radius: 50%;
					background: var(--color-aqua);
				}

				.pattern-dashes {
					display: flex;
					align-items: center;
					gap: 0.5rem;
				}

				.pattern-dash {
					width: 0.75rem;
					height: 0.125rem;
					background: var(--color-snow-white);
				}
			}

			&__text {
				font-size: 1.125rem;
				font-weight: 500;
				color: var(--color-snow-white);
			}
		}
	}

	.abstract-highlights__contact-wrap {
		width: fit-content;

		:global a{
			width: 100%;
		}
	}
</style>
