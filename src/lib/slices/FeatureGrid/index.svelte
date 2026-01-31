<script lang="ts">
	import FeatureGridShapes from '$lib/components/FeatureGridShapes.svelte'
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicRichText } from '@prismicio/svelte'
	import { onMount } from 'svelte'
	import { gsap, ScrollTrigger } from '$lib/gsap'

	type Props = SliceComponentProps<Content.FeatureGridSlice>

	const { slice }: Props = $props()

	onMount(() => {
		setTimeout(() => {
			const items = document.querySelectorAll('.feature-grid__item');

			// Set initial state
			gsap.set(items, { y: 40, autoAlpha: 0 });

			// Create staggered animation
			ScrollTrigger.create({
				trigger: '.feature-grid__content',
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
	class="feature-grid block-padding-bottom"
>
<div class="container">
	<div class="feature-grid__inner">
		<div class="feature-grid__heading">
			<h3 class="low">{slice.primary.heading}</h3>
		</div>
		<div class="feature-grid__content">
			{#each slice.primary.features as item}
				<div class="feature-grid__item">
					<div class="icon">
						<FeatureGridShapes shape={item.icon} />
					</div>
					<div class="text general-content">
						<PrismicRichText field={item.description} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>	
</section>

<style lang="scss">
	.feature-grid{

		&__inner{
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
		}

		&__content{
			display: flex;
			gap: 1rem;
			overflow: auto;

			// @media (min-width: 768px) {
			// 	overflow: auto;
			// }
		}

		&__item{
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 0.625rem;
			background: url('/bg-gradient-licht.svg');
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			padding: 1.5rem;
			border-radius: 0.5rem;
			min-width: 16.875rem;

			@media (min-width: 768px) {
				width: unset;
			}

			.icon{
				:global svg{
					width: 2.5rem;
					height: 2.5rem;

					@media(min-width: 768px){
						width: 4.5rem;
						height: 4.5rem;
					}
				}
			}

			.text{
				max-width: 18.75rem;
			}
		}


	}
</style>

