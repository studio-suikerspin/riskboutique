<script>
	import '../app.css'

	import { PrismicPreview } from '@prismicio/svelte/kit'
	import { page } from '$app/state'
	import { repositoryName } from '$lib/prismicio'
	import { onNavigate } from '$app/navigation'
	import { register } from 'swiper/element/bundle'

	import Header from '$lib/components/Header.svelte'
	import PageLoader from '$lib/components/PageLoader.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import { onMount } from 'svelte'

	let { children } = $props()

	onMount(() => {
		register()
	})

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
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
	<meta
		name="og:image"
		content="/square-og-image.png"
	/>
	<meta
		name="twitter:card"
		content="summary_large_image"
	/>

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
