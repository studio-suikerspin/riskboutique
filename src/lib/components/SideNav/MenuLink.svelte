<script>
	import { PrismicLink } from '@prismicio/svelte';

	let { menuItem, index } = $props();
</script>

<PrismicLink field={menuItem.link} class={['link-item']} data-sidenav-link="">
	<div class="link-item__wrap" data-sidenav-link="">
		<p class="link-item__heading h4">{menuItem.label}</p>
		<p class="link-item__eyebrow">
			{index + 1 < 10 ? '0' + (index + 1) : index + 1}
		</p>
	</div>
</PrismicLink>

<style>
	.link-item__wrap {
		grid-column-gap: 0.5em;
		grid-row-gap: 0.5em;
		color: #131313;
		width: 100%;
		padding-top: 0.75em;
		padding-bottom: 0.75em;
		text-decoration: none;
		display: flex;
	}

	.link-item__heading {
		z-index: 1;
		font-size: 2.5rem;
		font-weight: 600;
		line-height: 1;
		transition: transform 0.55s cubic-bezier(0.65, 0.05, 0, 1);
		position: relative;
		margin: 0px;
	}

	.link-item__eyebrow {
		position: relative;
		z-index: 1;

		font-size: 1rem;
		font-weight: 300;
		color: var(--color-aqua);

		text-transform: uppercase;
	}
</style>
