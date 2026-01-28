<script lang="ts">
	import type { Content } from '@prismicio/client';
	import {
		PrismicImage,
		PrismicRichText,
		PrismicLink,
		type SliceComponentProps
	} from '@prismicio/svelte';
	import { onMount } from 'svelte';

	import { gsap, ScrollTrigger } from '$lib/gsap';
	import AvatarWithContactInfo from '$lib/components/AvatarWithContactInfo.svelte';
	import Button from '$lib/components/Button.svelte'

	type Props = SliceComponentProps<Content.IndependentDesignSlice>;

	const { slice }: Props = $props();

	function initStickyFeatures(root) {
		const wraps = Array.from((root || document).querySelectorAll('[data-sticky-feature-wrap]'));
		if (!wraps.length) return;

		wraps.forEach((w) => {
			const visualWraps = Array.from(w.querySelectorAll('[data-sticky-feature-visual-wrap]'));
			const items = Array.from(w.querySelectorAll('[data-sticky-feature-item]'));
			const progressBar = w.querySelector('[data-sticky-feature-progress]');

			if (visualWraps.length !== items.length) {
				console.warn('[initStickyFeatures] visualWraps and items count do not match:', {
					visualWraps: visualWraps.length,
					items: items.length,
					wrap: w
				});
			}

			const count = Math.min(visualWraps.length, items.length);
			if (count < 1) return;

			const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			const DURATION = rm ? 0.01 : 0.75; // If user prefers reduced motion, reduce duration
			const EASE = 'power4.inOut';
			const SCROLL_AMOUNT = 0.9; // % of scroll used for step transitions

			const getTexts = (el) => Array.from(el.querySelectorAll('[data-sticky-feature-text]'));

			if (visualWraps[0]) gsap.set(visualWraps[0], { clipPath: 'inset(0% round 0.75em)' });
			gsap.set(items[0], { autoAlpha: 1 });

			let currentIndex = 0;

			// Transition Function
			function transition(fromIndex, toIndex) {
				if (fromIndex === toIndex) return;
				const tl = gsap.timeline({ defaults: { overwrite: 'auto' } });

				if (fromIndex < toIndex) {
					tl.to(
						visualWraps[toIndex],
						{
							clipPath: 'inset(0% round 0.75em)',
							duration: DURATION,
							ease: EASE
						},
						0
					);
				} else {
					tl.to(
						visualWraps[fromIndex],
						{
							clipPath: 'inset(50% round 0.75em)',
							duration: DURATION,
							ease: EASE
						},
						0
					);
				}
				animateOut(items[fromIndex]);
				animateIn(items[toIndex]);
			}

			// Fade out text content items
			function animateOut(itemEl) {
				const texts = getTexts(itemEl);
				gsap.to(texts, {
					autoAlpha: 0,
					y: -30,
					ease: 'power4.out',
					duration: 0.4,
					onComplete: () => gsap.set(itemEl, { autoAlpha: 0 })
				});
			}

			// Reveal incoming text content items
			function animateIn(itemEl) {
				const texts = getTexts(itemEl);
				gsap.set(itemEl, { autoAlpha: 1 });
				gsap.fromTo(
					texts,
					{
						autoAlpha: 0,
						y: 30
					},
					{
						autoAlpha: 1,
						y: 0,
						ease: 'power4.out',
						duration: DURATION,
						stagger: 0.1
					}
				);
			}

			const steps = Math.max(1, count - 1);

			ScrollTrigger.create({
				trigger: w,
				start: 'center center',
				end: () => `+=${steps * 100}%`,
				pin: true,
				scrub: true,
				invalidateOnRefresh: true,
				onUpdate: (self) => {
					const p = Math.min(self.progress, SCROLL_AMOUNT) / SCROLL_AMOUNT;
					let idx = Math.floor(p * steps + 1e-6);
					idx = Math.max(0, Math.min(steps, idx));

					gsap.to(progressBar, {
						scaleX: p,
						ease: 'none'
					});

					if (idx !== currentIndex) {
						transition(currentIndex, idx);
						currentIndex = idx;
					}
				}
			});
		});
	}

	onMount(() => {
		initStickyFeatures();
	});
</script>

<section
	class="sticky-features"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div data-sticky-feature-wrap="" class="sticky-features__wrap">
		<div class="sticky-features__scroll">
			<div class="sticky-features__container">
				<div class="sticky-features__col is--img">
					<div class="sticky-features__img-collection">
						<div class="sticky-features__img-list">
							{#each slice.primary.features as feature, index (index)}
								<div data-sticky-feature-visual-wrap="" class="sticky-features__img-item">
									<PrismicImage class="sticky-features__img" field={feature.image} />
								</div>
							{/each}
						</div>
					</div>
					<div class="sticky-features__progress-w">
						<div class="sticky-features__progress-bar" data-sticky-feature-progress></div>
					</div>
				</div>
				<div class="sticky-features__col">
					<div class="sticky-features__text-collection">
						<div class="sticky-features__text-list">
							{#each slice.primary.features as feature, index (index)}
								<div data-sticky-feature-item="" class="sticky-features__text-item">
									<span data-sticky-feature-text="" class="sticky-features__tag"
										>{index + 1 < 10 ? '0' + (index + 1) : index + 1}</span
									>
									<h2 data-sticky-feature-text="" class="sticky-features__heading h3 low">
										{feature.heading}
									</h2>
									<div data-sticky-feature-text="">
										<PrismicRichText field={feature.description} class="sticky-features__p" />
									</div>

									{#if feature.cta_link.url}
										<div class="sticky-features__cta" data-sticky-feature-text="">
											<Button
												field={feature.cta_link}
												text={feature.cta_link.text}
												variant="blue"
												icon="icon-arrow-right "
											/>

											<!-- <AvatarWithContactInfo /> -->
										</div>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.sticky-features {
		&__wrap {
			width: 100%;
			padding-left: 1.25em;
			padding-right: 1.25em;
			position: relative;
		}

		&__scroll {
			justify-content: center;
			align-items: center;
			height: 100vh;
			display: flex;
		}

		&__container {
			grid-column-gap: 5rem;
			grid-row-gap: 1.25em;
			justify-content: center;
			align-items: stretch;
			width: 100%;
			max-width: 70em;
			margin-left: auto;
			margin-right: auto;
			display: flex;
		}

		&__col {
			flex: 1;
			position: relative;

			&.is--img {
				overflow: hidden;
				border-radius: 0.75em;
			}
		}

		&__progress-w {
			position: absolute;
			left: 0em;
			right: 0em;
			bottom: 0em;
			height: 0.25em;
			background-color: rgba(255, 255, 255, 0.15);
		}

		&__progress-bar {
			width: 100%;
			height: 100%;
			background-color: rgb(255, 255, 255);
			transform: scale3d(0, 1, 1);
			transform-origin: 0% 50%;
		}

		&__img-collection {
			width: 100%;
		}

		&__img-list {
			aspect-ratio: 1 / 1.3;
			width: 100%;
			position: relative;
		}

		&__img-item {
			-webkit-clip-path: inset(50% round 0.75em);
			clip-path: inset(50% round 0.75em);
			width: 100%;
			height: 100%;
			position: absolute;
			inset: 0%;
		}

		:global &__img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}

		&__text-collection {
			height: 100%;
		}

		&__text-list {
			flex-flow: column;
			justify-content: center;
			align-items: flex-start;
			height: 100%;
			max-height: 100%;
			display: flex;
			position: relative;
		}

		&__text-item {
			visibility: hidden;
			flex-flow: column;
			grid-template-rows: auto auto;
			grid-template-columns: 1fr 1fr;
			grid-auto-columns: 1fr;
			justify-content: center;
			align-items: flex-start;
			width: 100%;
			max-width: 27.5em;
			/* margin-left: auto; */
			display: flex;
			position: absolute;
			/* right: 0; */
		}

		&__heading {
			color: var(--color-dark-mode);
			margin-bottom: 1.5rem;

			@media (min-width: 768px) {
				margin-bottom: 2rem;
			}
		}

		:global &__p {
			color: var(--color-dark-mode);
			margin-bottom: 0;
			font-size: 1.125rem;
			line-height: 1.5;

			&.is--link {
				color: var(--color-aqua);
				text-decoration: underline;
			}
		}

		&__tag {
			font-size: 1.5rem;
			font-weight: 500;

			background-color: var(--color-dark-mode);
			border-radius: 0.25rem;
			margin-bottom: 1.5rem;
			padding: 0.5rem;
			line-height: 0.95;
			color: var(--color-snow-white);

			@media (min-width: 768px) {
				margin-bottom: 3.5rem;
			}
		}

		&__cta {
			margin-top: 1.5rem;

			@media (min-width: 768px) {
				margin-top: 3.5rem;
			}

			:global .btn {
				width: 100%;
			}

		}
	}

	[data-sticky-feature-visual-wrap]:first-of-type {
		clip-path: inset(0% round 0.75em);
	}

	[data-sticky-feature-item]:first-of-type {
		visibility: visible;
	}

	@media screen and (max-width: 767px) {
		.sticky-features__scroll {
			justify-content: center;
			align-items: center;
			height: auto;
			min-height: 100svh;
			padding-top: 1.25em;
			padding-bottom: 2.5em;
		}

		.sticky-features__container {
			grid-column-gap: 2em;
			grid-row-gap: 4rem;
			flex-flow: column;
			justify-content: flex-start;
			align-items: stretch;
		}

		.sticky-features__img-list {
			aspect-ratio: 1;
		}

		.sticky-features__text-list {
			min-height: 20em;
			max-height: none;
		}

		.sticky-features__text-item {
			max-width: none;
		}
	}
</style>
