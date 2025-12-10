<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	let { site_settings } = page.data;
</script>

<header class="main-header">
	<div class="main-header__inner">
		<a href={resolve('/')}>
			<PrismicImage field={site_settings.data.site_logo} class={['main-header__logo']} />
		</a>
		<nav>
			<PrismicLink field={site_settings.data.contact_link} class={['btn', 'btn--link']}>
				<i class="btn__icon icon-arrow-right"></i>
				<div class="btn__text">
					{site_settings.data.contact_link.text}
				</div>
			</PrismicLink>
		</nav>
	</div>
</header>

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

			@media screen and (min-width: 992px) {
				max-width: 300px;
			}
		}

		:global .btn {
			display: none;
			width: fit-content;

			@media screen and (min-width: 992px) {
				display: flex;
			}

			&__icon {
				font-weight: 600;
				transform: rotate(-45deg);
				transition: transform 0.1s ease-in-out;
			}

			&:hover {
				.btn__icon {
					transform: translate(0.125rem, -0.125rem) rotate(-45deg);
					transition: transform 0.1s ease-in-out;
				}
			}
		}
	}
</style>
