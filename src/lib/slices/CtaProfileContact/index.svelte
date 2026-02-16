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

	function getImagePositionClass(item: any) {
		if (slice.variation !== 'inlineHeading') return ''
		return item.image_position == false ? 'image-left' : 'image-right'
	}
</script>

<section
	class="cta-profile-contact {paddingClass()}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container medium">
		{#if slice.variation == 'default'}
			<h2 class="cta-profile-contact__headline h1">
				{slice.primary.headline}
			</h2>
		{/if}

		{#if slice.variation == 'inlineHeading'}
			<div class="cta-profile-contact__group">
				{#each slice.primary.image_block as item}
					<div
						class="cta-profile-contact__inner inline-heading {getImagePositionClass(
							item
						)}"
						data-reveal-group
					>
						<div
							class="cta-profile-contact__image-wrap border-radius"
						>
							<PrismicImage field={item.side_image} />
						</div>

						<div class="cta-profile-contact__content-wrap">
							<h3 class="cta-profile-contact__headline low">
								{item.headline}
							</h3>

							<div
								class="cta-profile-contact__subtext rich-text-content"
							>
								<PrismicRichText field={item.sub_text} />
							</div>

							<div class="cta-profile-contact__contact-wrap">
								<!-- <AvatarWithContactInfo /> -->
								<Button
									field={item.primary_cta}
									text="Request proposal"
									icon="icon-arrow-right"
								/>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="cta-profile-contact__inner">
				<div class="cta-profile-contact__image-wrap border-radius">
					<PrismicImage field={slice.primary.image} />
				</div>

				<div class="cta-profile-contact__content-wrap">
					{#if slice.variation === 'withRevealType'}
						<RevealTypeContent
							text={slice.primary.reveal_type}
							trigger=".cta-profile-contact__content-wrap"
						/>
					{:else if slice.variation === 'default'}
						<h3 class="cta-profile-contact__subheadline">
							{slice.primary.main_text}
						</h3>
					{:else if slice.variation === 'inlineHeading'}
						<h2 class="cta-profile-contact__headline">
							{slice.primary.headline}
						</h2>
					{/if}

					<div class="cta-profile-contact__subtext">
						<PrismicRichText field={slice.primary.sub_text} />
					</div>

					<div class="cta-profile-contact__contact-wrap">
						<!-- <AvatarWithContactInfo /> -->
						{#if slice.primary.contact_avatar?.data}
							<AvatarWithContactInfo
								image={slice.primary.contact_avatar.data.image}
								name={slice.primary.contact_avatar.data.name}
								role={slice.primary.contact_avatar.data.role}
								phone={slice.primary.contact_avatar.data.phone}
								email={slice.primary.contact_avatar.data.email}
							/>
						{/if}
						<Button
							field={slice.primary.primary_cta}
							text="Request proposal"
							icon="icon-arrow-right"
						/>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
	.cta-profile-contact {
		&__headline {
			margin-bottom: 2.5rem;

			@media (min-width: 1024px) {
				margin-bottom: 5rem;
			}
		}

		.inline-heading &__headline {
			margin-bottom: 0 !important;
		}

		&__inner {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 2rem;

			@media (min-width: 1400px) {
				flex-direction: row;
				align-items: center;
				gap: 5rem;
			}
		}

		&__inner.inline-heading {
			flex-direction: column-reverse;

			@media (min-width: 1400px) {
				flex-direction: row;
			}
		}

		&__image-wrap {
			display: none;
			max-width: 450px;
			height: 100%;
			width: 100%;
			aspect-ratio: 9 / 16;
			overflow: hidden;

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
				gap: 2.5rem;
			}
		}

		&__contact-wrap {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
		}

		&__group {
			display: flex;
			flex-direction: column;
			gap: 5rem;
		}
	}

	[data-slice-variation='default'],
	[data-slice-variation='inlineHeading'] {
		.cta-profile-contact__inner {
			@media (min-width: 992px) {
				flex-direction: row;
				align-items: center;
				gap: 5rem;
			}
		}

		.cta-profile-contact__image-wrap {
			aspect-ratio: 3 / 4;
			max-height: 750px;
			max-width: 100%;
			display: block;
			flex: 1;

			@media (min-width: 992px) {
				// max-width: 630px;
			}
		}
	}

	.cta-profile-contact__subtext {
		max-width: 37.5rem;
	}

	.cta-profile-contact__inner.image-right {
		flex-direction: column-reverse;

		@media (min-width: 992px) {
			flex-direction: row-reverse;
		}
	}

	.cta-profile-contact__contact-wrap{
		width: fit-content;
	}
	
	.cta-profile-contact__contact-wrap :global a {
		width: 100%;

	}
</style>
