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
					<span class="btn__text">Menu</span>
				</button>

				<Button
					variant="link"
					icon="icon-arrow-right"
					className="main-header__cta"
					text={site_settings.data.contact_link.text}
					field={site_settings.data.contact_link}
				></Button>

				<PrismicLink
					class="main-header__cta main-header__cta--mobile btn"
					field={site_settings.data.contact_link}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
						style="color: var(--color-snow-white); transform: scaleX(-1);"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
						/>
					</svg>
				</PrismicLink>
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

			&--mobile {
				display: flex;
				padding-block: 0.5rem;
				padding-inline: 0.825rem;
			}

			@media (min-width: 768px) {
				display: flex;

				&.main-header__cta--mobile {
					display: none;
				}
			}
		}

		:global .btn--menu {
			padding-block: 0.5rem;
			padding-inline: 0.825rem;
			color: var(--color-snow-white);
			order: 2;

			@media (min-width: 768px) {
				padding-inline: 0.75rem 1rem;
				padding-block: 0.75rem;
				order: 1;
			}

			.btn__text {
				display: none;

				@media (min-width: 400px) {
					display: initial;
				}
			}
		}
	}
</style>
