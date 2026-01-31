<script>
	import { resolve } from '$app/paths'
	import { page } from '$app/state'
	import { PrismicImage } from '@prismicio/svelte'
	import SideNav from './SideNav/index.svelte'
	import Button from './Button.svelte'
	import { onMount } from 'svelte'

	let { site_settings, header, socials } = page.data

	onMount(() => {
	     window.addEventListener('scroll', () => {
		const scrollY = window.scrollY;
		const toggle = document.querySelector('.floating-menu-toggle');

		if (scrollY > 400) {
			toggle?.classList.add('floating-menu-toggle--scrolled');
		} else {
			toggle?.classList.remove('floating-menu-toggle--scrolled');
		}
	});
	})
</script>

<header class="main-header">
	<div class="container">
		<div class="main-header__inner">
			<a href={resolve('/')}>
				<PrismicImage
					field={header.data.logo_light}
					class={['main-header__logo', 'main-header__logo--light']}
				/>
				<PrismicImage
					field={header.data.logo_dark}
					class={['main-header__logo', 'main-header__logo--dark']}
				/>
			</a>
			<nav class="main-header__nav">
				<button
					class="btn btn--dark btn--menu"
					data-sidenav-toggle
				>
					<i class="btn__icon icon-menu"></i>
					Menu
				</button>

				<Button
					variant="link"
					icon="icon-arrow-right"
					className="main-header__cta"
					text={site_settings.data.contact_link.text}
					field={site_settings.data.contact_link}
				></Button>
			</nav>
		</div>
	</div>
</header>

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

<SideNav
	menuItems={header.data.menu_items}
	{socials}
/>

<style lang="scss">
	.main-header {
		padding-block: 1.25rem;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: var(--z-header);
		transition: all 150ms cubic-bezier(0.86, 0, 0.14, 1);

		/* :global &.main-header--scrolled {
		     position: fixed;
			background: var(--color-snow-white);
			transition: all 150ms cubic-bezier(0.86, 0, 0.14, 1);

			:global .main-header__logo {
				max-width: 200px;
				transition: width 150ms ease;

				&--light {
					display: none;
				}

				&--dark {
					display: initial;
				}
			}
		} */

		&__inner {
			display: flex;
			align-items: center;
			justify-content: space-between;
			// padding-inline: 1.25rem;
		}

		:global &__logo {
			max-width: 170px;

			&--dark {
				display: none;
			}

			@media screen and (min-width: 992px) {
				max-width: 300px;
			}
		}

		&__nav {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		:global &__cta {
			display: none;

			@media (min-width: 768px) {
				display: flex;
			}
		}

		:global .btn--menu {
			padding-block: 0.5rem;
			padding-inline: 0.825rem;

			@media (min-width: 768px) {
				padding-inline: 0.75rem 1rem;
				padding-block: 0.75rem;
			}
		}
	}

	.floating-menu-toggle {
		position: fixed;
		z-index: var(--z-header);
		right: 0;
		top: 1.25rem;

		opacity: 0;
		transform: translateX(100%) scaleX(0);
		transition: all 200ms cubic-bezier(0.78, 0, 0.22, 1);
	}

	:global .floating-menu-toggle.floating-menu-toggle--scrolled {
	     opacity: 1;
	     transform: translateX(0) scaleX(1);
		transition: all 350ms cubic-bezier(0.78, 0, 0.22, 1);
	}
</style>
