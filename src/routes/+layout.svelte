<script>
	import '../app.css'

	import { PrismicPreview } from '@prismicio/svelte/kit'
	import { page } from '$app/state'
	import { repositoryName } from '$lib/prismicio'

	import Header from '$lib/components/Header.svelte'
	import PageLoader from '$lib/components/PageLoader.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import SvgBackgroundLines from '$lib/components/SvgBackgroundLines.svelte'

	let { children } = $props()
</script>

<svelte:head>
	{#if page.data.meta_description}
		<meta
			name="description"
			content={page.data.meta_description}
		/>
	{/if}
	{#if page.data.meta_title}
		<meta
			name="og:title"
			content={page.data.meta_title}
		/>
		<title>{page.data.meta_title}</title>
	{/if}
	{#if page.data.meta_image}
		<meta
			name="og:image"
			content={page.data.meta_image}
		/>
		<meta
			name="twitter:card"
			content="summary_large_image"
		/>
	{/if}

	<link
		rel="stylesheet"
		href="/fonts/icons/iconly.css"
	/>
	<link
		rel="stylesheet"
		href="/fonts/general-sans/general-sans.css"
	/>
</svelte:head>
<main class="relative">
	<PageLoader />
	<Header />

	{@render children()}

	<Footer />
</main>
<PrismicPreview {repositoryName} />
