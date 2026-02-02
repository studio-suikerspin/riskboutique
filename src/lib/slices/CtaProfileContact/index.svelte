<script lang="ts">
	import AvatarWithContactInfo from '$lib/components/AvatarWithContactInfo.svelte'
	import Button from '$lib/components/Button.svelte'
	import ConnectWithUs from '$lib/components/ConnectWithUs.svelte'
	import RevealTypeContent from '$lib/components/RevealTypeContent.svelte'
	import type { Content } from '@prismicio/client'
	import {
		PrismicImage,
		PrismicRichText,
		type SliceComponentProps
	} from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.CtaProfileContactSlice>

	const { slice }: Props = $props()

	const paddingClass = $derived(() => {
		switch (slice.primary.section_padding) {
			case 'top':
				return 'block-padding-top'
			case 'bottom':
				return 'block-padding-bottom'
			case 'both':
				return 'block-padding'
			case 'none':
				return ''
			default:
				return ''
		}
	})
</script>

<section
	class="cta-profile-contact {paddingClass()}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<div class="cta-profile-contact__inner">
			<div class="cta-profile-contact__image-wrap">
				<PrismicImage field={slice.primary.image} />
			</div>

			<div class="cta-profile-contact__content-wrap">
				{#if slice.variation === 'withRevealType'}
					<RevealTypeContent
						text={slice.primary.reveal_type}
						trigger=".cta-profile-contact__content-wrap"
					/>
				{/if}

				<div class="cta-profile-contact__subtext">
					<PrismicRichText field={slice.primary.sub_text} />
				</div>

				<div class="cta-profile-contact__contact-wrap">
					<AvatarWithContactInfo />
					<Button
						field={slice.primary.primary_cta}
						text="Request proposal"
						icon="icon-arrow-right"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.cta-profile-contact {
		&__inner {
			display: flex;
			flex-direction: column;
			gap: 2rem;

			@media (min-width: 1400px) {
				flex-direction: row;
				align-items: center;
				gap: 5rem;
			}
		}

		&__image-wrap {
			display: none;
			max-width: 450px;
			height: 100%;
			width: 100%;
			aspect-ratio: 9 / 16;

			@media (min-width: 1400px) {
				display: block;
			}

			:global img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&__content-wrap {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			@media (min-width: 1024px) {
				gap: 4rem;
			}
		}

		&__contact-wrap {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
		}
	}
</style>
