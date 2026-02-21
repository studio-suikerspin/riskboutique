<script>
	import { PrismicLink } from '@prismicio/svelte'

	let { menuItem } = $props()
</script>

<PrismicLink
	field={menuItem.link}
	class={['link-item']}
	data-sidenav-link=""
>
	<div class="link-item__wrap">
		<p class="link-item__heading h4">{menuItem.label}</p>
	</div>
</PrismicLink>

<style lang="scss">
	.link-item {
		&__wrap {
			grid-column-gap: 0.5em;
			grid-row-gap: 0.5em;
			color: #131313;
			width: 100%;
			padding-block: 0.5rem;
			text-decoration: none;
			display: flex;

			@media (min-width: 768px) {
				padding-top: 0.75em;
				padding-bottom: 0.75em;
			}
		}

		&__heading {
			z-index: 1;
			font-size: 1.5rem;
			font-weight: 600;
			line-height: 1;
			transition: transform 0.55s cubic-bezier(0.65, 0.05, 0, 1);
			position: relative;
			margin: 0px;

			@media (min-width: 768px) {
				font-size: 2.5rem;
			}
		}
	}
</style>
