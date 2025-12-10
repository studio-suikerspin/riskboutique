<script>
	import '../app.css';

	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/state';
	import { repositoryName } from '$lib/prismicio';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	{#if page.data.meta_description}
		<meta name="description" content={page.data.meta_description} />
	{/if}
	{#if page.data.meta_title}
		<meta name="og:title" content={page.data.meta_title} />
		<title>{page.data.meta_title}</title>
	{/if}
	{#if page.data.meta_image}
		<meta name="og:image" content={page.data.meta_image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}

	<link rel="stylesheet" href="fonts/icons/iconly.css" />
	<link rel="stylesheet" href="fonts/general-sans/general-sans.css" />
</svelte:head>
<main>
	<Header />

	{@render children()}
</main>
<PrismicPreview {repositoryName} />
