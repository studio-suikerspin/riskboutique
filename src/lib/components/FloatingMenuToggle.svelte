<script>
	import { onMount } from 'svelte'

	onMount(() => {
		window.addEventListener('scroll', () => {
			const scrollY = window.scrollY
			const toggle = document.querySelector('.floating-menu-toggle')

			if (scrollY > 400) {
				toggle?.classList.add('floating-menu-toggle--scrolled')
			} else {
				toggle?.classList.remove('floating-menu-toggle--scrolled')
			}
		})
	})
</script>

<div class="floating-menu-toggle">
	<div class="container">
		<button
			class="btn btn--dark btn--menu"
			data-sidenav-toggle
		>
			<i class="btn__icon icon-menu"></i>
			Menu
		</button>
	</div>
</div>

<style lang="scss">
	.floating-menu-toggle {
		position: fixed;
		z-index: var(--z-header);
		right: 0;
		top: 1.25rem;

		opacity: 0;
		transform: translateX(100%) scaleX(0);
		transition: all 200ms cubic-bezier(0.78, 0, 0.22, 1);

		.btn {
			transition: all 200ms cubic-bezier(0.78, 0, 0.22, 1);
		}

		.btn:hover {
			background: var(--color-snow-white);
			color: var(--color-dark-mode);
			border-color: var(--color-dark-mode);
			transition: all 200ms cubic-bezier(0.78, 0, 0.22, 1);
		}
	}

	:global .floating-menu-toggle.floating-menu-toggle--scrolled {
		opacity: 1;
		transform: translateX(0) scaleX(1);
		transition: all 350ms cubic-bezier(0.78, 0, 0.22, 1);
	}
</style>
