<script lang="ts">
	import AvatarWithContactInfo from '$lib/components/AvatarWithContactInfo.svelte'
	import RevealTypeContent from '$lib/components/RevealTypeContent.svelte'
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicImage } from '@prismicio/svelte'
	import { PrismicRichText } from '@prismicio/svelte'
	import { PrismicLink } from '@prismicio/svelte'
	import { initContentRevealScroll } from '$lib/revealContent.js'
	import { onMount } from 'svelte'


	type Props = SliceComponentProps<Content.StepCardListSlice>

	const { slice }: Props = $props()

	onMount(() => {
    initContentRevealScroll()
  })

	const paddingClass = $derived(() => {
		switch (slice.primary.section_padding) {
			case 'top': return 'block-padding-top';
			case 'bottom': return 'block-padding-bottom';
			case 'both': return 'block-padding';
			case 'none': return '';
			default: return '';
		}
	});
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="step-card-list {paddingClass()}"
>
	<div class="container">
		<div class="step-card-list__inner">
			<div class="step-card-list__text">
				<h3>
					<RevealTypeContent
							text={slice.primary.top_title}
							trigger=".step-card-list__text "
							darkBackground={true}
						/>
				</h3>
			</div>
			<div class="step-card-list__blocks">
				{#each slice.primary.steps as item}
					<div class="step-card-list__blocks-block" data-reveal-group>
						<div class="image-number-wrap">
							<div class="image">
								<PrismicImage field={item.image} />
							</div>
							<div class="number">
								{item.step_number}
							</div>
						</div>
						<div class="text-action">
							<div class="title ">
								{item.title}
							</div>
							<div class="cta">
								<div class="btn btn--white">
									<i class="btn__icon btn__icon--rotate icon-arrow-right"></i>
									<PrismicLink field={item.cta} />
								</div>
								<AvatarWithContactInfo 
									isDarkBackground={true} 
									name={item.contact_name ?? "Robert Dreyer"} 
									role={item.contact_role ?? "MSc RO"} 
									email={item.contact_email ?? "info@riskboutique.nl"} 
									phone={item.contact_phone ?? "+31 6 123 456 78"} 
								/>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="step-card-list__text second">
				<h3>
					<RevealTypeContent
							text={slice.primary.bottom_title}
							trigger=".step-card-list__text.second"
							darkBackground={true}
						/>
				</h3>
			</div>
		</div>
	</div>

</section>

<style lang="scss">
	.step-card-list {
		background: var(--color-dark-mode);

		&__inner{
			display: flex;
			flex-direction: column;
			gap: 4rem;

			@media(min-width: 992px){
				gap: 6.5rem;
			}
		}

		&__text{
			h3{
				color: var(--color-snow-white);
			}
		}

		&__blocks{
			display: flex;
			flex-direction: column;
		}

		&__blocks-block:first-child{
			border-top: 1px solid var(--color-snow-white);
		}

		&__blocks-block{
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			color: var(--color-snow-white);
			padding: 2.5rem 0;
			border-bottom: 1px solid var(--color-snow-white);

			@media(min-width: 992px){
				flex-direction: row;
				gap: 5rem;
				padding: 5rem 0;
			}

			.image-number-wrap{
				flex: 1;
				display: flex;
				flex-direction: column;
				gap: 1.5rem;

				@media(min-width: 992px){
					flex-direction: row;
					gap: 5rem;
				}	

				.number{
					font-size: 1.5rem;
					font-weight: 500;
					line-height: 120%; /* 48px */

					@media(min-width: 992px){
						font-size: 2.5rem;
					}
				}

				.image{
					width: 100%;
					height: auto;
					border-radius: 0.5rem;
					overflow: hidden;
					// max-height: 37.5rem;
					aspect-ratio: 16 / 9;

					@media(min-width: 992px){
						max-height: 37.5rem;
						aspect-ratio: 9 / 9;
					}
				}
			}
			.text-action{
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 4rem;

				.title{
					font-size: 1.5rem;
					font-weight: 500;
					line-height: 120%; /* 48px */

					@media(min-width: 767px){
						font-size: 2rem;
					}

					@media(min-width: 992px){
						font-size: 2.5rem;
					}
				}

				.cta{
					display: flex;
					flex-direction: column;
					gap: 16px;
					width: fit-content;

					.btn{
						width: 100%;
					}
				}
			}
		}
	}
</style>
