<script lang="ts">
	import AvatarWithContactInfo from '$lib/components/AvatarWithContactInfo.svelte'
	import Button from '$lib/components/Button.svelte'
	import SvgShapes from '$lib/components/SvgShapes.svelte'
	import type { Content } from '@prismicio/client'
	import {
		PrismicRichText,
		type SliceComponentProps
	} from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.FeaturedCtaBlocksSlice>

	const { slice }: Props = $props()
</script>

<section
	class="featured-cta-blocks block-padding-{slice.primary.section_padding}"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="container">
		<div class="featured-cta-blocks__header">
			<div class="title-wrap">
				<h2>{slice.primary.headline}</h2>
				<div class=" featured-cta-blocks__subtitle">
					<PrismicRichText field={slice.primary.subheadline} />
				</div>
			</div>

			<div class="contact-wrap">
				<AvatarWithContactInfo />
				<Button
					field={slice.primary.cta_link}
					icon="icon-arrow-right"
					text={slice.primary.cta_link.text}
				/>
			</div>
		</div>

		<div class="featured-cta-blocks__inner">
			<aside class="featured-cta-blocks__aside">
				<SvgShapes shape="WorldShapeBlue" />
			</aside>

			<main
				class="featured-cta-blocks__main"
				data-reveal-group
				data-stagger="200"
			>
				{#each slice.primary.featured_blocks as block, key (key)}
					<div class="featured-cta-blocks__block border-radius">
						<div class="block-header">
							<h3 class="h2">{block.headline}</h3>
							<div class="rich-text-content">
								<PrismicRichText field={block.content} />
							</div>
						</div>

						{#if block.cta_link.url || block.show_contact_info}
							<div class="contact-wrap">
								{#if block.cta_link.url}
									<Button
										field={block.cta_link}
										icon="icon-arrow-right"
										text={block.cta_link.text}
										variant="aqua"
									/>
								{/if}
								{#if block.show_contact_info}
									<AvatarWithContactInfo />
								{/if}
							</div>
						{/if}
					</div>
				{/each}
			</main>
		</div>
	</div>
</section>

<style lang="scss">
	.featured-cta-blocks {
		&__header {
			display: flex;
			flex-flow: column;
			justify-content: space-between;
			align-items: flex-start;

			margin-bottom: 2.5rem;

			@media (min-width: 1024px) {
				margin-bottom: 5rem;
				flex-flow: row;
				align-items: flex-end;
			}

			.title-wrap {
				display: flex;
				flex-flow: column;
				align-items: flex-start;
				gap: 2.5rem;
			}

			.contact-wrap {
				display: none;
				flex-flow: column;
				gap: 1rem;

				@media (min-width: 1024px) {
					display: flex;
				}
			}
		}

		&__subtitle {
			max-width: 655px;
		}

		&__inner {
			display: flex;
			align-items: stretch;
			gap: 5rem;
		}

		&__aside {
			display: none;
			padding-block: 2rem;
			position: relative;

			@media (min-width: 1200px) {
				display: block;
			}

			:global .world-shape {
				position: sticky;
				top: 0;
			}
		}

		&__main {
			display: flex;
			flex-flow: column;
			gap: 2.5rem;

			@media (min-width: 1024px) {
				gap: 5rem;
			}
		}

		&__block {
			display: flex;
			flex-direction: column;
			gap: 2.5rem;

			padding-block: 4rem;
			padding-inline: 2.5rem;

			background: url('/bg-gradient-clay-green.svg') no-repeat center
				center / cover;

			@media (min-width: 768px) {
				padding-inline: 4rem;
				padding-block: 6rem;
			}

			@media (min-width: 1200px) {
				padding-inline: 4rem;
			}

			@media (min-width: 1400px) {
				padding: 6rem;
			}

			.block-header {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;
			}

			.contact-wrap {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				align-self: flex-end;
			}
		}
	}
</style>
