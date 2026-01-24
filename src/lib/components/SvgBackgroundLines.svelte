<script>
	import { gsap } from '$lib/gsap'
	import { onMount } from 'svelte'

	function initLineWobblers() {
		const wobblers = document.querySelectorAll('[data-line-wobbler]')

		wobblers.forEach((wobbler) => {
			gsap.fromTo(
				wobbler,
				{
					top: '-10%'
				},
				{
					top: '100%',
					duration: 50,
					repeat: -1,
					yoyo: Math.random() >= 0.5,
					delay: Math.random() * 5
				}
			)
		})
	}

	onMount(() => {
		initLineWobblers()
	})
</script>

<div class="bg-lines">
	<div class="bg-lines__line">
		<div
			class="bg-lines__line-wobbler"
			data-line-wobbler
		></div>
	</div>
	<div class="bg-lines__line">
		<div
			class="bg-lines__line-wobbler"
			data-line-wobbler
		></div>
	</div>
	<div class="bg-lines__line">
		<div
			class="bg-lines__line-wobbler"
			data-line-wobbler
		></div>
	</div>
	<div class="bg-lines__line">
		<div
			class="bg-lines__line-wobbler"
			data-line-wobbler
		></div>
	</div>
	<div class="bg-lines__line">
		<div
			class="bg-lines__line-wobbler"
			data-line-wobbler
		></div>
	</div>
</div>

<style lang="scss">
	.bg-lines {
		position: absolute;
		z-index: -1;
		top: 0;
		bottom: 0;
		left: 0;
		height: 100%;
		width: 100%;

		display: grid;
		grid-auto-flow: column;
		gap: 4rem;

		justify-content: space-evenly;

		&__line {
			position: relative;
			width: 1px;
			height: 100%;
			background: rgba(178, 193, 189, 0.3);

			&:nth-child(1) {
				display: none;

				@media (min-width: 768px) {
					display: block;
				}
			}

			&:nth-child(2) {
				display: none;

				@media (min-width: 1024px) {
					display: block;
				}
			}

			&:nth-child(3) {
				display: none;

				@media (min-width: 1200px) {
					display: block;
				}
			}
		}

		&__line-wobbler {
			position: absolute;
			left: 50%;
			translate: -50% 0;
			width: 0.8px;
			height: 96px;
			filter: blur(5px);
			background: var(--color-aqua);
		}
	}
</style>
