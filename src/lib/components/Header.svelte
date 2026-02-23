<script lang="ts">
	import { resolve } from '$app/paths'
	import { page } from '$app/state'
	import { PrismicImage, PrismicLink } from '@prismicio/svelte'
	import SideNav from './SideNav/index.svelte'
	import Button from './Button.svelte'
	import type { Attachment } from 'svelte/attachments'

	let { site_settings, header, socials } = page.data

	const initFixedOnScroll: Attachment = (node) => {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 50) {
				node.classList.add('main-header--fixed')
				return
			}

			node.classList.remove('main-header--fixed')
		})
	}
</script>

<header
	class="main-header"
	{@attach initFixedOnScroll}
>
	<div class="container">
		<div class="main-header__inner">
			<a
				href={resolve('/')}
				data-default-logo={page.params.uid === 'contact'
					? 'dark'
					: 'light'}
			>
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

<SideNav
	menuItems={header.data.menu_items}
	{socials}
/>

<style lang="scss">
	.main-header {
		padding-block: 1.25rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: var(--z-header);
		transition: all 150ms ease;

		:global &--fixed {
			.main-header__logo {
				@media (min-width: 992px) {
					max-width: 200px;
				}

				&--dark {
					position: absolute;
					z-index: 1;
					top: 50%;
					translate: 0% -50%;
					display: block;
				}

				&--light {
				}
			}

			background: var(--color-snow-white);
			transition: all 250ms ease-out;
			border-bottom: 1px solid #b2c1bd4d;
		}

		&__inner {
			display: flex;
			align-items: center;
			justify-content: space-between;
			// padding-inline: 1.25rem;
		}

		:global &__logo {
			max-width: 170px;
			transition: max-width 250ms ease-out;

			&--dark {
				display: none;
			}

			[data-default-logo='dark'] &--light {
				display: none;
			}

			[data-default-logo='dark'] &--dark {
				display: block;
			}

			@media screen and (min-width: 992px) {
				max-width: 300px;
			}
		}

		&__nav {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			.btn {
				transition: all ease 0.3s;
			}

			.btn:hover {
				background: var(--color-snow-white);
				color: var(--color-dark-mode);
				border-color: var(--color-dark-mode);
			}
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
			color: var(--color-snow-white);

			@media (min-width: 768px) {
				padding-inline: 0.75rem 1rem;
				padding-block: 0.75rem;
			}
		}
	}
</style>
