<script>
	import '../app.css';

	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/state';
	import { repositoryName } from '$lib/prismicio';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();

	const { data: metadata } = page.data.page;
</script>

<svelte:head>
	{#if metadata.meta_description}
		<meta name="description" content={metadata.meta_description} />
	{/if}
	{#if metadata.meta_title}
		<meta name="og:title" content={metadata.meta_title} />
		<title>{metadata.meta_title}</title>
	{/if}
	{#if metadata.meta_image}
		<meta name="og:image" content={metadata.meta_image} />
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
