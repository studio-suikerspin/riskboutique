<script lang="ts">
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'
	import { PrismicRichText, PrismicLink } from '@prismicio/svelte'
	import { onMount } from 'svelte'
	import ConnectWithUs from '$lib/components/ConnectWithUs.svelte'

	type Props = SliceComponentProps<Content.FeatureGrid2Slice>

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
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="feature-grid-second {paddingClass()}"
	data-reveal-group
	data-start="top 60%"
>
	<div class="container">
		<div class="feature-grid-second__inner">
			<div class="feature-grid-second__heading">
				<div class="h1">{slice.primary.heading}</div>
			</div>
			<div
				class="feature-grid-second__grid"
				data-reveal-group-nested
				data-stagger="300"
			>
				{#each slice.primary.features as item, index (index)}
					<div class="feature-grid-second__item">
						<div class="feature-grid-second__item-inner">
							<div class="text-icon">
								<div class="icon">
									<!-- <PrismicImage field={item.icon} /> -->
									{#if index == 0}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
										>
											<path
												d="M18.7463 14.2532L15.9997 12.9998L18.7463 11.7465L19.9997 8.99984L21.253 11.7465L23.9997 12.9998L21.253 14.2532L19.9997 16.9998L18.7463 14.2532ZM5.33301 19.6665L6.58634 16.9198L9.33301 15.6665L6.58634 14.4132L5.33301 11.6665L4.07967 14.4132L1.33301 15.6665L4.07967 16.9198L5.33301 19.6665ZM11.333 12.9998L12.7863 9.7865L15.9997 8.33317L12.7863 6.87984L11.333 3.6665L9.87967 6.87984L6.66634 8.33317L9.87967 9.7865L11.333 12.9998ZM5.99967 28.3332L13.9997 20.3198L19.333 25.6532L30.6663 12.9065L28.7863 11.0265L19.333 21.6532L13.9997 16.3198L3.99967 26.3332L5.99967 28.3332Z"
												fill="#F9F9F8"
											/>
										</svg>
									{:else if index == 1}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
										>
											<path
												d="M26.667 2.6665H5.34699C3.88033 2.6665 2.68033 3.8665 2.68033 5.33317L2.66699 29.3332L8.00033 23.9998H26.667C28.1337 23.9998 29.3337 22.7998 29.3337 21.3332V5.33317C29.3337 3.8665 28.1337 2.6665 26.667 2.6665ZM26.667 21.3332H6.89366L5.33366 22.8932V5.33317H26.667V21.3332ZM16.0003 13.3332C17.467 13.3332 18.667 12.1332 18.667 10.6665C18.667 9.19984 17.467 7.99984 16.0003 7.99984C14.5337 7.99984 13.3337 9.19984 13.3337 10.6665C13.3337 12.1332 14.5337 13.3332 16.0003 13.3332ZM21.3337 17.9065C21.3337 16.8265 20.6937 15.8665 19.707 15.4398C18.5737 14.9465 17.3203 14.6665 16.0003 14.6665C14.6803 14.6665 13.427 14.9465 12.2937 15.4398C11.307 15.8665 10.667 16.8265 10.667 17.9065V18.6665H21.3337V17.9065Z"
												fill="#F9F9F8"
											/>
										</svg>
									{:else if index == 2}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
										>
											<path
												d="M30.6663 10.6667C30.6663 12.1333 29.4663 13.3333 27.9997 13.3333C27.7597 13.3333 27.533 13.3067 27.3197 13.24L22.573 17.9733C22.6397 18.1867 22.6663 18.4267 22.6663 18.6667C22.6663 20.1333 21.4663 21.3333 19.9997 21.3333C18.533 21.3333 17.333 20.1333 17.333 18.6667C17.333 18.4267 17.3597 18.1867 17.4263 17.9733L14.0263 14.5733C13.813 14.64 13.573 14.6667 13.333 14.6667C13.093 14.6667 12.853 14.64 12.6397 14.5733L6.57301 20.6533C6.63967 20.8667 6.66634 21.0933 6.66634 21.3333C6.66634 22.8 5.46634 24 3.99967 24C2.53301 24 1.33301 22.8 1.33301 21.3333C1.33301 19.8667 2.53301 18.6667 3.99967 18.6667C4.23967 18.6667 4.46634 18.6933 4.67967 18.76L10.7597 12.6933C10.693 12.48 10.6663 12.24 10.6663 12C10.6663 10.5333 11.8663 9.33333 13.333 9.33333C14.7997 9.33333 15.9997 10.5333 15.9997 12C15.9997 12.24 15.973 12.48 15.9063 12.6933L19.3063 16.0933C19.5197 16.0267 19.7597 16 19.9997 16C20.2397 16 20.4797 16.0267 20.693 16.0933L25.4263 11.3467C25.3597 11.1333 25.333 10.9067 25.333 10.6667C25.333 9.2 26.533 8 27.9997 8C29.4663 8 30.6663 9.2 30.6663 10.6667Z"
												fill="#F9F9F8"
											/>
										</svg>
									{:else if index == 3}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
										>
											<path
												d="M15.9997 2.6665L5.33301 6.6665V14.7865C5.33301 21.5198 9.87967 27.7998 15.9997 29.3332C22.1197 27.7998 26.6663 21.5198 26.6663 14.7865V6.6665L15.9997 2.6665ZM23.9997 14.7865C23.9997 20.1198 20.5997 25.0532 15.9997 26.5598C11.3997 25.0532 7.99967 20.1332 7.99967 14.7865V8.41317L15.9997 5.5865L23.9997 8.41317V14.7865ZM11.7597 14.1198L9.86634 15.9998L14.5863 20.7198L22.133 13.1732L20.253 11.2932L14.5997 16.9465L11.7597 14.1198Z"
												fill="#F9F9F8"
											/>
										</svg>
									{:else if index == 4}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
										>
											<path
												d="M8.00033 19.9993C6.89366 19.9993 5.89366 20.4526 5.17366 21.1726C3.60033 22.7459 2.66699 29.3326 2.66699 29.3326C2.66699 29.3326 9.25366 28.3993 10.827 26.8259C11.547 26.1059 12.0003 25.1059 12.0003 23.9993C12.0003 21.7859 10.2137 19.9993 8.00033 19.9993ZM8.94699 24.9459C8.57366 25.3193 6.05366 25.9593 6.05366 25.9593C6.05366 25.9593 6.68033 23.4526 7.06699 23.0659C7.29366 22.8126 7.62699 22.6659 8.00033 22.6659C8.73366 22.6659 9.33366 23.2659 9.33366 23.9993C9.33366 24.3726 9.18699 24.7059 8.94699 24.9459ZM23.227 18.1993C31.707 9.71926 28.8803 3.11926 28.8803 3.11926C28.8803 3.11926 22.2803 0.292592 13.8003 8.77259L10.4803 8.10593C9.61366 7.93259 8.70699 8.21259 8.06699 8.83926L2.66699 14.2526L9.33366 17.1059L14.8937 22.6659L17.747 29.3326L23.147 23.9326C23.7737 23.3059 24.0537 22.3993 23.8803 21.5193L23.227 18.1993ZM9.88033 14.4393L7.33366 13.3459L9.96033 10.7193L11.8803 11.1059C11.1203 12.2126 10.4403 13.3726 9.88033 14.4393ZM18.6537 24.6659L17.5603 22.1193C18.627 21.5593 19.787 20.8793 20.8803 20.1193L21.267 22.0393L18.6537 24.6659ZM21.3337 16.3193C19.5737 18.0793 16.827 19.5193 15.947 19.9593L12.0403 16.0526C12.467 15.1859 13.907 12.4393 15.6803 10.6659C21.9203 4.42593 26.6537 5.34593 26.6537 5.34593C26.6537 5.34593 27.5737 10.0793 21.3337 16.3193ZM20.0003 14.6659C21.467 14.6659 22.667 13.4659 22.667 11.9993C22.667 10.5326 21.467 9.33259 20.0003 9.33259C18.5337 9.33259 17.3337 10.5326 17.3337 11.9993C17.3337 13.4659 18.5337 14.6659 20.0003 14.6659Z"
												fill="#F9F9F8"
											/>
										</svg>
									{/if}
								</div>
								<div class="text general-content">
									<PrismicRichText field={item.description} />
								</div>
							</div>
							<ConnectWithUs
								field={item.cta_link}
								border="dark"
							/>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.feature-grid-second__item-inner {
		height: 100%;
		will-change: transform;
	}

	.feature-grid-second {
		&__inner {
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
			max-width: 1600px;
			margin-left: auto;
			margin-right: auto;

			@media (min-width: 768px) {
				gap: 5rem;
			}
		}

		&__heading {
			// max-width: 67.5rem;
			text-align: center;
			display: flex;
			justify-content: center;

			.h1 {
				max-width: 75rem;
				line-height: 100%;

				@media (max-width: 767px) {
					font-size: 2.5rem;
				}
			}
		}

		&__grid {
			display: grid;
			grid-template-columns: 1fr;
			row-gap: 1rem;

			@media (min-width: 992px) {
				grid-template-columns: repeat(6, minmax(0, 1fr));
				column-gap: 1rem;
			}
		}

		&__item-inner {
			background: url('/bg-gradient-licht.svg');
			background-size: cover;
			background-position: center;
			padding: 2.5rem;
			border-radius: 0.5rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			min-height: 20rem;

			.text-icon {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;
				max-width: 25rem;
			}

			.icon {
				background: var(--color-aqua);
				padding: 0.75rem;
				border-radius: 0.5rem;
				display: flex;
				align-items: center;
				justify-content: center;
				width: fit-content;

				svg {
					display: block;

					path {
						animation: pathPulse 2.5s ease-in-out infinite;
					}
				}
			}

			@keyframes pathPulse {
				0%,
				100% {
					opacity: 1;
				}
				50% {
					opacity: 0.7;
				}
			}

			.cta {
				border-bottom: 1px solid var(--color-aqua);
				width: fit-content;
				padding-bottom: 0.5rem;
				display: flex;
				align-items: center;
				gap: 0.75rem;
				font-size: 1.125rem;
				font-weight: 500;

				i {
					font-size: 1.5rem;
					transform: rotate(-45deg);
					transition: transform 0.3s ease;
				}

				&:hover i {
					transform: rotate(0deg);
				}
			}
		}

		&__item:nth-child(1),
		&__item:nth-child(2) {
			@media (min-width: 768px) {
				grid-column: span 3;
			}
		}

		&__item:nth-child(3),
		&__item:nth-child(4),
		&__item:nth-child(5) {
			@media (min-width: 768px) {
				grid-column: span 2;
			}
		}
	}
</style>
