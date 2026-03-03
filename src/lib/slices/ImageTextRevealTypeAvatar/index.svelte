<script lang="ts">
	import type { Content } from '@prismicio/client'
	import {
		PrismicRichText,
		type SliceComponentProps
	} from '@prismicio/svelte'
	import RevealTypeContent from '$lib/components/RevealTypeContent.svelte'
	import AvatarWithContactInfo from '$lib/components/AvatarWithContactInfo.svelte'
	import ConnectWithUs from '$lib/components/ConnectWithUs.svelte'
	import CdnImage from '$lib/components/CdnImage.svelte'

	type Props = SliceComponentProps<Content.ImageTextRevealTypeAvatarSlice>

	const { slice }: Props = $props()

	// const paddingClass = $derived(() => {
	// 	switch (slice.primary.section_padding) {
	// 		case 'top':
	// 			return 'block-padding-top'
	// 		case 'bottom':
	// 			return 'block-padding-bottom'
	// 		case 'both':
	// 			return 'block-padding'
	// 		case 'none':
	// 			return ''
	// 		default:
	// 			return ''
	// 	}
	// })
</script>

<section
	class="image-block"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	data-id={slice.id}
>
	<div class="container">
		<div class="image-block__inner">
			<div
				class="image-block__item"
				data-reveal-group
			>
				<div class="image-block__image">
					<CdnImage field={slice.primary.image} />
				</div>
				<div class="image-block__content">
					<RevealTypeContent text={slice.primary.reveal_type} />
					<div class="rich-text-content">
						<PrismicRichText field={slice.primary.subtext} />
					</div>
					<AvatarWithContactInfo />
					<ConnectWithUs
						field={slice.primary.cta_link}
						border="dark"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.image-block {
		&__inner {
			display: flex;
			flex-direction: column;
			gap: 5rem;
		}

		&__item {
			display: flex;
			flex-direction: column;
			gap: 2rem;

			@media (min-width: 992px) {
				gap: 5rem;
				flex-direction: row;
			}
		}

		&__image {
			flex: 3;
			max-height: 750px;
			overflow: hidden;
			border-radius: 0.5rem;

			:global img {
				width: 100%;
				height: 100%;
				display: block;
				object-fit: cover;
				max-height: 100%;
				max-width: 100%;
			}
		}

		&__content {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			// max-width: 46rem;
			flex: 4;

			:global & ul {
				padding-inline-start: 1.5rem;
				list-style: unset;
			}

			.rich-text-content {
				max-width: 46rem;
			}
		}
	}
</style>
