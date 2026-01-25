<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte'
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.ServiceOverviewSlice>

	const { slice }: Props = $props()
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="block-padding"
>
<div class="service-overview">
	<div class="service-overview__title">
		<SectionHeading
			title={slice.primary.heading}
			description={slice.primary.description}
		/>
	</div>
</div>
</section>

<style lang="scss">
	.service-overview {
		padding-inline: 12px;

		@media(min-width: 768px) {
			padding-inline: 20px;
		}
	}
</style>
