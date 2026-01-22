<script lang="ts">
	import ConnectWithUs from '$lib/components/ConnectWithUs.svelte';
	import SvgShapes from '$lib/components/SvgShapes.svelte';
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import { PrismicLink } from '@prismicio/svelte';
	import { initContentRevealScroll } from '$lib/revealContent.js';
	

	type Props = SliceComponentProps<Content.AssuranceWithImagesSlice>;

	const { slice }: Props = $props();
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="block-padding-top">
	<div class="floating-images">

		<div class="floating-images__shape">
			<SvgShapes shape="squareShape"/>
		</div>

		<div class="floating-images__inner">
		<div class="floating-images__text">
			<div class="floating-images__heading" data-reveal-group>
				<div class="h1">
					<PrismicRichText field={slice.primary.heading} />
				</div>

				<div class="floating-images__heading_video">
					<video autoplay muted loop playsinline>
						<source src="/floating-video-1.mp4" type="video/mp4" />
					</video>
					<video autoplay muted loop playsinline>
						<source src="/floating-video-2.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			<div class="floating-images__subheading">
				<div class="floating-images__text subtitle">
					<PrismicRichText field={slice.primary.body} />
				</div>
				<div class="floating-images__cta">
						<ConnectWithUs field={slice.primary.ctaLink} />
				</div>
			</div>

		</div>

		<div class="floating-images__videos-wrapper">
			<div class="floating-images__videos">
					<div class="floating-images__video first">
						<video autoplay muted loop playsinline>
							<source src="/floating-video-1.mp4" type="video/mp4" />
						</video>
					</div>
					<div class="floating-images__video second">
						<video autoplay muted loop playsinline>
							<source src="/floating-video-2.mp4" type="video/mp4" />
						</video>
					</div>
					<div class="floating-images__video third">
						<video autoplay muted loop playsinline>
							<source src="/floating-video-3.mp4" type="video/mp4" />
						</video>
					</div>
					<div class="floating-images__video fourth">
						<video autoplay muted loop playsinline>
							<source src="/floating-video-4.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.floating-images{
		padding: 4rem 0;
		background-color: var(--color-dark-mode);
		color: var(--color-snow-white);
		padding-inline: 12px;

		position: relative;
		overflow: hidden;

		display: flex;
		align-items: center;
		justify-content: center;

		@media(min-width: 992px) {
			padding: 9.375rem 0;
			padding-inline: 2.5rem;
		}

		&__shape{
			position: absolute;
			bottom: 0;
			left: 100px;
			z-index: 1;
			display: none;

			:global svg{
				width: 300px;
				height: auto;
			}

			@media(min-width: 992px) {
				display: block;
			}
		}

		&__inner{
			// position: relative;
			display: flex;
			justify-content: center;
			width: 100%;
			max-width: 1800px;
			z-index: 9;
		}

		&__text{
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
			flex: 3;
			// width: 100%;

			@media(min-width: 992px) {
				gap: 6.25rem;
			}
		}

		&__heading {
			text-indent: 0;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			@media(min-width: 992px) {
				text-indent: 10%;
				display: block;
			}

			:global strong{
				font-weight: 600;
				color: var(--color-clay-green);
			}

			&_video{
				display: flex;
				gap: 0.5rem;
				width: 100%;

				video{
					width: 100%;
					height: 150px;
					border-radius: 8px;
					object-fit: cover;
				}

				@media(min-width: 992px) {
					display: none;
				}
			}
		}

		&__subheading {
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
			max-width: 600px;
		}

		&__videos-wrapper{
			position: relative;
			flex: 1;
			display: none;

			@media(min-width: 992px) {
				display: block;
			}
		}

		&__videos{
			display: flex;
			flex-direction: column;
			gap: 2.5rem;
			width: 100%;
			flex: 2;

			position: absolute;
			right: 100px;
			top: 40px;
			bottom: 0;
			// max-width: 600px;
		}

		&__video{
			border-radius: 8px;
			overflow: hidden;

			display: flex;
			align-items: center;
			justify-content: start;

			video{
				width: 152px;
				height: 152px;
				display: block;
			}
		}

		&__video.first {
			justify-content: end;
		}
		&__video.second {
			justify-content: start;
		}
		&__video.third {
			justify-content: end;
		}
		&__video.fourth {
			justify-content: start;
		}

	}

</style>
