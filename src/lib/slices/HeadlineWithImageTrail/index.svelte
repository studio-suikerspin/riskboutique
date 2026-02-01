<script lang="ts">
	import type { Content } from '@prismicio/client'
	import { PrismicImage, type SliceComponentProps } from '@prismicio/svelte'
	import { onMount } from 'svelte'
	import { gsap } from '$lib/gsap'

	type Props = SliceComponentProps<Content.HeadlineWithCornerImagesSlice>

	const { slice }: Props = $props()

	function initRotatingImageTrail() {
		var area = document.querySelector('[data-trail-area]')
		if (!area) return

		var collection = area.querySelector('[data-trail-collection]')
		if (!collection) return

		var items = collection.querySelectorAll('[data-trail-item]')
		if (!items.length) return

		// Distance logic
		var index = 0
		var lastCloneX = null
		var lastCloneY = null

		var cardWidth = items[0].getBoundingClientRect().width
		var stepDistance = cardWidth * 0.5

		function spawnTrailItem(x, y) {
			var original = items[index]
			var clone = original.cloneNode(true)

			clone.style.left = x + 'px'
			clone.style.top = y + 'px'

			clone.setAttribute('data-trail-item', 'hidden')

			area.appendChild(clone)

			void clone.getBoundingClientRect()

			clone.setAttribute('data-trail-item', 'visible')

			setTimeout(function () {
				clone.setAttribute('data-trail-item', 'transition-out')
			}, 400)

			setTimeout(function () {
				clone.remove()
			}, 1200)

			index = (index + 1) % items.length
			lastCloneX = x
			lastCloneY = y
		}

		// Mouse movement logic
		area.addEventListener('mousemove', function (event) {
			var rect = area.getBoundingClientRect()
			var x = event.clientX - rect.left
			var y = event.clientY - rect.top

			if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
				lastCloneX = null
				lastCloneY = null
				return
			}

			if (lastCloneX === null || lastCloneY === null) {
				spawnTrailItem(x, y)
				return
			}

			var dx = x - lastCloneX
			var dy = y - lastCloneY
			var distance = Math.sqrt(dx * dx + dy * dy)

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
				end: 'bottom 20%',
			}
		})

		initRotatingImageTrail()
	})

	const paddingClass = $derived(() => {
		switch (slice.primary.section_padding) {
			case 'top': return 'block-padding-top';
			case 'bottom': return 'block-padding-bottom';
			case 'both': return 'block-padding';
			case 'none': return '';
			default: return '';
		}
	});
</script>

<section
	class="{paddingClass()}"
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
		<div
			data-trail-collection=""
			class="image-trail-slice__collection"
		>
			<div class="image-trail-slice__list">
				{#each slice.primary.images as item, index (index)}
					<div
						data-trail-item=""
						class="image-trail-slice__item"
					>
						<div class="image-trail-slice__card">
							<PrismicImage field={item.image} />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
	</div>
</section>

<style lang="scss">
	.image-trail-slice {
		background: var(--color-dark-mode);
		color: var(--color-snow-white);
		position: relative;
		padding: 10rem 0;

		@media(min-width: 768px){
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

		&__collection {
			opacity: 0;
			pointer-events: none;
		}

		&__list {
			display: flex;
			flex-flow: wrap;
			grid-column-gap: 1rem;
			grid-row-gap: 1rem;
		}

		&__item {
			user-select: none;
			-webkit-user-select: none;
			pointer-events: none;
			z-index: 10;
		}

		&__card {
			position: relative;
			width: 10vw;
			aspect-ratio: 1 / 1;

			:global img {
				position: absolute;
				top: 0;
				left: 0;

				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		:global [data-trail-item='hidden'] {
			transform: translate(-50%, -50%) scale(0) rotate(-20deg);
			position: absolute;
		}

		:global [data-trail-item='visible'] {
			transform: translate(-50%, -50%) scale(1) rotate(0.001deg);
			transition: transform 0.4s cubic-bezier(0.625, 0.05, 0, 1);
			position: absolute;
		}

		:global [data-trail-item='transition-out'] {
			transform: translate(-50%, -50%) scale(0) rotate(180deg);
			transition: transform 0.8s cubic-bezier(0.625, 0, 0.875, 0);
			position: absolute;
		}
	}
</style>
