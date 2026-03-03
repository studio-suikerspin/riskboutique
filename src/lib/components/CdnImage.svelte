<script>
	import { PUBLIC_CDN_BASE } from '$env/static/public'
	import { PrismicImage } from '@prismicio/svelte'

	const CDN_BASE = PUBLIC_CDN_BASE ?? 'https://images.prismic.io'

	let { field, imgixParams = {}, ...restProps } = $props()

	function swapBase(f) {
		if (!f?.url) return f

		const swap = (url) => url.replace('https://images.prismic.io', CDN_BASE)

		return {
			...f,
			url: swap(f.url),
			thumbnails: f.thumbnails
				? Object.fromEntries(
						Object.entries(f.thumbnails).map(([key, thumb]) => [
							key,
							{ ...thumb, url: swap(thumb.url) }
						])
					)
				: f.thumbnails
		}
	}

	const cdnField = $derived(swapBase(field))
</script>

<PrismicImage
	field={cdnField}
	{imgixParams}
	{...restProps}
/>
