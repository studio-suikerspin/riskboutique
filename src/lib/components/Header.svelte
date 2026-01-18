<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import SideNav from './SideNav/index.svelte';

	let { site_settings, header } = page.data;
</script>

<header class="main-header">
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
			<button class="btn btn--dark btn--menu" data-sidenav-toggle>
				<i class="btn__icon icon-menu"></i>
				Menu
			</button>

			<PrismicLink field={site_settings.data.contact_link} class={['btn', 'btn--link']}>
				<i class="btn__icon btn__icon--rotate icon-arrow-right"></i>
				<div class="btn__text">
					{site_settings.data.contact_link.text}
				</div>
			</PrismicLink>
		</nav>
	</div>
</header>

<SideNav menuItems={header.data.menu_items} />

<style lang="scss">
	.main-header {
		margin-block-start: 1.25rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: var(--z-header);

		&__inner {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-inline: 1.25rem;
		}

		:global &__logo {
			max-width: 200px;

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
	}
</style>
