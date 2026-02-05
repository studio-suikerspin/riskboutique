<script lang="ts">
	import type { Content } from '@prismicio/client'
	import { PrismicImage, type SliceComponentProps } from '@prismicio/svelte'
	import { onMount } from 'svelte'
	import { gsap } from '$lib/gsap'

	type Props = SliceComponentProps<Content.HeadlineWithCornerImagesSlice>

	const { slice }: Props = $props()

	function initRotatingImageTrail() {
		const area = document.querySelector('[data-trail-area]')
		if (!area) return

		const poolItems = area.querySelectorAll('[data-trail-pool-item]')
		if (!poolItems.length) return

		// Pool management
		let currentIndex = 0
		let lastX: number | null = null
		let lastY: number | null = null
		let lastSpawnTime = 0
		const minSpawnInterval = 50

		const cardWidth = poolItems[0].getBoundingClientRect().width
		const stepDistance = cardWidth * 0.5

		// Initialize all pool items as hidden
		gsap.set(poolItems, {
			scale: 0,
			rotation: -20,
			xPercent: -50,
			yPercent: -50,
			autoAlpha: 1
		})

		function spawnTrailItem(x: number, y: number) {
			const item = poolItems[currentIndex]

			// Kill any ongoing animation on this item
			gsap.killTweensOf(item)

			// Position and animate in
			gsap.set(item, { left: x, top: y, scale: 0, rotation: -20 })

			gsap.to(item, {
				scale: 1,
				rotation: 0,
				duration: 0.4,
				ease: 'power3.out',
				onComplete: () => {
					// Animate out after a brief hold
					gsap.to(item, {
						scale: 0,
						rotation: 180,
						duration: 0.8,
						ease: 'power2.in'
					})
				}
			})

			currentIndex = (currentIndex + 1) % poolItems.length
			lastX = x
			lastY = y
			lastSpawnTime = performance.now()
		}

		area.addEventListener('mousemove', (event: MouseEvent) => {
			const now = performance.now()
			if (now - lastSpawnTime < minSpawnInterval) return

			const rect = area.getBoundingClientRect()
			const x = event.clientX - rect.left
			const y = event.clientY - rect.top

			if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
				lastX = null
				lastY = null
				return
			}

			if (lastX === null || lastY === null) {
				spawnTrailItem(x, y)
				return
			}

			const dx = x - lastX
			const dy = y - lastY
			const distance = Math.sqrt(dx * dx + dy * dy)

			if (distance >= stepDistance) {
				spawnTrailItem(x, y)
			}
		})
	}

	onMount(() => {
		gsap.from('[data-reveal-text]', {
			autoAlpha: 0,
			y: 50,
			duration: 0.35,
			stagger: 0.2,
			scrollTrigger: {
				trigger: '.image-trail-slice',
				start: 'top 70%',
				end: 'bottom 20%'
			}
		})

		initRotatingImageTrail()
	})

	const paddingClass = $derived(() => {
		switch (slice.primary.section_padding) {
			case 'top':
				return 'block-padding-top'
			case 'bottom':
				return 'block-padding-bottom'
			case 'both':
				return 'block-padding'
			case 'none':
				return ''
			default:
				return ''
		}
	})
</script>

<section
	class={paddingClass()}
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="image-trail-slice">
		<div class="container">
			<div class="image-trail-slice__inner">
				<h2
					class="image-trail-slice__headline h2"
					data-reveal-text
				>
					{slice.primary.headline}
				</h2>
				<div
					class="image-trail-slice__subheadline h2"
					data-reveal-text
				>
					{slice.primary.subheadline}
				</div>
			</div>
		</div>

		<div
			class="image-trail-slice__trail"
			data-trail-area=""
		>
			<!-- Pool of reusable trail items - each image repeated for smooth trails -->
			{#each { length: 3 } as _, repeat}
				{#each slice.primary.images as item, index (repeat * slice.primary.images.length + index)}
					<div
						data-trail-pool-item=""
						class="image-trail-slice__pool-item"
					>
						<div class="image-trail-slice__card">
							<PrismicImage field={item.image} />
						</div>
					</div>
				{/each}
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.image-trail-slice {
		background: var(--color-dark-mode);
		color: var(--color-snow-white);
		position: relative;
		padding: 10rem 0;

		@media (min-width: 768px) {
			padding: 18.75rem 0;
		}

		&__inner {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 5rem;
		}

		&__headline {
			text-align: center;
		}

		&__subheadline {
			text-align: center;
		}

		&__trail {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 2;
			top: 0;
			left: 0;
		}

		&__pool-item {
			position: absolute;
			user-select: none;
			-webkit-user-select: none;
			pointer-events: none;
			z-index: 10;
			will-change: transform;
		}

		&__card {
			position: relative;
			width: 10vw;
			aspect-ratio: 1 / 1;

			:global img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
