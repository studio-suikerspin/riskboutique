<script lang="ts">
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicRichText, PrismicImage, PrismicLink } from '@prismicio/svelte'
	import { onMount } from "svelte"
	import { gsap, ScrollTrigger } from '$lib/gsap'

	type Props = SliceComponentProps<Content.FeatureGrid2Slice>

	const { slice }: Props = $props()

	onMount(() => {
		setTimeout(() => {
			const items = document.querySelectorAll('.feature-grid-second__item');

			// Set initial state
			gsap.set(items, { y: 40, autoAlpha: 0 });

			// Create staggered animation
			ScrollTrigger.create({
				trigger: '.feature-grid-second__grid',
				start: 'top 85%',
				once: true,
				onEnter: () => {
					gsap.to(items, {
						y: 0,
						autoAlpha: 1,
						duration: 0.8,
						ease: 'power4.out',
						stagger: 0.2,
						onComplete: () => {
							gsap.set(items, { clearProps: 'transform,opacity' });
						}
					});
				}
			});
		}, 200);
	});
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="feature-grid-second block-padding-bottom"
>
	<div class="container">
		<div class="feature-grid-second__inner">
			<div class="feature-grid-second__heading">
				<div class="h1">{slice.primary.heading}</div>
			</div>
			<div class="feature-grid-second__grid">
				{#each slice.primary.features as item}
					<div class="feature-grid-second__item">
						<div class="text-icon">
							<div class="icon">
								<PrismicImage field={item.icon} />
							</div>
							<div class="text general-content">
								<PrismicRichText field={item.description} />
							</div>
						</div>
						<div class="cta">
							<PrismicLink field={item.cta_link} />
							<i class="btn__icon--rotate icon-arrow-right"></i>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
.feature-grid-second{

	&__inner{
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		@media(min-width: 768px){
			gap: 5rem;
		}
	}

	&__heading{
		max-width: 67.5rem;
		text-align: center;

		@media(min-width: 768px){
			text-align: start;
		}
	}

	&__grid{
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;

		@media(min-width: 768px){
			grid-template-columns: repeat(6, minmax(0, 1fr));
			// gap: 3rem;
		}
	}

	&__item{
		background: url('/bg-gradient-licht.svg');
		background-size: cover;
		background-position: center;
		padding: 2.5rem;
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 20rem;

		.text-icon{
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			max-width: 25rem;
		}

		.icon{
			background: var(--color-aqua);
			padding: 0.75rem;
			border-radius: 0.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			width: fit-content;
		}

		.cta{
			border-bottom: 1px solid var(--color-aqua);
			width: fit-content;
			padding-bottom: 0.5rem;
			display: flex;
			align-items: center;
			gap: 0.75rem;
			font-size: 1.125rem;
			font-weight: 500;

				i{
					font-size: 1.5rem;
					transform: rotate(-45deg);
					transition: transform 0.3s ease;

				}

			&:hover i{
				transform: rotate(0deg);
			}
		}
	}

	&__item:nth-child(1),
	&__item:nth-child(2) {
		@media(min-width: 768px){
			grid-column: span 3;
		}
	}

	&__item:nth-child(3),
	&__item:nth-child(4),
	&__item:nth-child(5) {
		@media(min-width: 768px){
			grid-column: span 2;
		}
	}
}
</style>
