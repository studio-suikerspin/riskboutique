<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { PrismicImage } from '@prismicio/svelte';

	let { site_settings } = page.data;
</script>

<header class="main-header">
	<div class="main-header__inner">
		<a href={resolve('/')}>
			<PrismicImage field={site_settings.data.site_logo} />
		</a>

		<nav></nav>
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
	}
</style>
