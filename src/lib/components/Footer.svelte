<script>
	import { PrismicImage, PrismicLink } from '@prismicio/svelte'
	import { page } from '$app/state'
	import { onMount } from 'svelte'
	import { gsap } from '$lib/gsap'

	const footer = page.data.footer.data
	const socials = page.data.socials.data.socials

	const toggleAccordion = (e) => {
		const currentAccordion = e.target.closest('[data-accordion-status]')
		const isCurrentlyActive = currentAccordion.getAttribute('data-accordion-status') === 'active'
		
		// Sluit alle accordions
		const accordions = document.querySelectorAll('[data-accordion-status]')
		accordions.forEach((accordion) => {
			accordion.setAttribute('data-accordion-status', 'not-active')
		})

		// Als de huidige accordion niet actief was, open hem dan
		if (!isCurrentlyActive) {
			currentAccordion.setAttribute('data-accordion-status', 'active')
		}
	}
</script>

<footer class="footer">
	<div class="footer__container">
		<div class="footer__inner">
			<div class="footer__top">
				<div class="logo-wrap">
					<PrismicImage field={footer.logo} />
				</div>

				<ul class="socials">
					{#each socials as { social_link }, index (index)}
						<li class="socials__item">
							<PrismicLink
								field={social_link}
								class="socials__item-link"
								data-sidenav-fade=""
							>
								<i class="icon-linkedin"></i>
							</PrismicLink>
						</li>
					{/each}
					<li class="socials__item">
							<a href="mailto:info@riskboutique.com" class="socials__item-link" data-sidenav-fade="">
								<i class="icon-mail"></i>
							</a>
						</li>
				</ul>
			</div>

			<div class="footer__columns">
				<div
					data-accordion-close-siblings="true"
					data-accordion-css-init=""
					class="accordion-css"
				>
					<ul class="accordion-css__list">
						{#each footer.columns as footerColumn, index (index)}
							<li
								data-accordion-status="not-active"
								class="accordion-css__item"
							>
								<button
									data-hover=""
									data-accordion-toggle=""
									class="accordion-css__item-top"
									onclick={toggleAccordion}
								>
									<h3 class="accordion-css__item-h3">
										{footerColumn.column_title}
									</h3>
									<div class="accordion-css__item-icon">
										<svg
											class="accordion-css__item-icon-svg"
											xmlns="http://www.w3.org/2000/svg"
											width="100%"
											viewbox="0 0 36 36"
											fill="none"
											><path
												d="M28.5 22.5L18 12L7.5 22.5"
												stroke="currentColor"
												stroke-width="3"
												stroke-miterlimit="10"
											></path></svg
										>
									</div>
								</button>
								<div class="accordion-css__item-bottom">
									<div class="accordion-css__item-bottom-wrap">
										<div class="accordion-css__item-bottom-content">
											<ul class="footer-column__list">
												{#each footerColumn.links as link, index (index)}
													<li>
														<PrismicLink field={link} />
													</li>
												{/each}
											</ul>
										</div>
									</div>
								</div>
							</li>
						{/each}
					</ul>
				</div>

				<div class="footer__grid">
					{#each footer.columns as footerColumn, index (index)}
						<div class="footer__grid-item">
							<div class="footer__grid-item-title">
								{footerColumn.column_title}
							</div>
							<ul class="footer__grid-item-list">
								{#each footerColumn.links as link, index (index)}
									<li>
										<PrismicLink field={link} />
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</div>

			<div class="footer__cta">
				<PrismicLink
					field={footer.cta_link}
					class="footer__cta-link"
				>
					<span class="footer__cta-text">{footer.cta_link.text}</span>
					<i class="footer__cta-icon icon-arrow-right"></i>
				</PrismicLink>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer {
		padding-block: 3.125rem 1.25rem;

		background: linear-gradient(
			to bottom right,
			var(--color-snow-white),
			var(--color-clay-green)
		);

		@media (min-width: 768px) {
			padding-block: 6.25rem 1.25rem;
		}

		&__container {
			max-width: 2000px;
			padding-inline: 1.25rem;
		}

		&__inner {
			display: flex;
			flex-flow: column;
			gap: 5rem;

			@media (min-width: 768px) {
				gap: 4.25rem;
			}
		}

		&__top {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1.5rem;

			@media (min-width: 768px) {
				flex-direction: row;
				justify-content: space-between;
			}
		}

		.logo-wrap {
			max-width: 280px;
		}

		.socials {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;

			:global &__item-link {
				display: flex;
				align-items: center;
				justify-content: center;

				border-radius: 50%;

				padding: 0.5rem;

				background: var(--color-aqua);
				color: var(--color-snow-white);

				font-size: 1.125rem;
			}
		}

		&__columns {
			.accordion-css {
				@media (min-width: 1024px) {
					display: none;
				}

				.accordion-css__list {
					grid-column-gap: 1.5rem;
					grid-row-gap: 1.5rem;
					flex-flow: column;
					margin-top: 0;
					margin-bottom: 0;
					padding-left: 0;
					display: flex;
					position: static;
				}

				.accordion-css__item-top {
					display: flex;
					flex-flow: row;
					justify-content: space-between;
					align-items: center;
					width: 100%;
				}

				.accordion-css__item-bottom {
					transition: grid-template-rows 0.6s cubic-bezier(0.625, 0.05, 0, 1);
					grid-template-rows: 0fr;
					display: grid;
					position: relative;
					overflow: hidden;
				}

				.accordion-css__item-bottom-wrap {
					flex-flow: column;
					height: 100000%;
					display: flex;
					position: relative;
					overflow: hidden;
				}

				.accordion-css__item-bottom-content {
					padding-block-start: 1.5rem;
				}

				.accordion-css__item-h3 {
					margin-top: 0;
					margin-bottom: 0;
					font-size: 1.125em;
					font-weight: 600;
				}

				.accordion-css__item-icon {
					transition: transform 0.6s cubic-bezier(0.625, 0.05, 0, 1);
					flex-shrink: 0;
					justify-content: center;
					align-items: center;
					display: flex;
					transform: rotate(180deg);
				}

				.accordion-css__item-icon-svg {
					width: 1.5rem;
				}

				:global [data-accordion-status='active'] {
					.accordion-css__item-bottom {
						grid-template-rows: 1fr;
					}

					.accordion-css__item-icon {
						transform: rotate(0.001deg);
					}
				}
			}

			.footer-column__list {
				display: flex;
				flex-flow: column;
				gap: 1rem;
			}
		}

		&__grid {
			display: none;

			@media (min-width: 1024px) {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 2.5rem;
			}

			@media (min-width: 1200px) {
				grid-template-columns: repeat(5, 1fr);
			}
		}

		&__grid-item {
			display: flex;
			flex-flow: column;
			gap: 1.5rem;
		}

		&__grid-item-title {
			font-size: 1.125em;
			font-weight: 600;
		}

		&__grid-item-list {
			display: flex;
			flex-flow: column;
			gap: 1rem;
		}

		&__cta{
			display: flex;
			justify-content: center;
			border-bottom: 1px solid var(--color-aqua);
		}

		

		&__cta:hover {
			.footer__cta-text {
				background-position-y: 40%;
				transition: background-position-y 0.3s ease;
			}

			.footer__cta-icon {
				transform: translate(2rem, -2rem) rotate(-45deg);
				background-position-y: 40%;
				transition: all 0.3s ease;
			}
		}

		&__cta-text {
			font-size: clamp(1rem, 10vw, 10rem);
			font-weight: 600;
			color: var(--color-aqua);
			background: url('/bg-gradient-donker.svg') lightgray 50% / cover no-repeat;
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;

			transition: background-position-y 0.3s ease;
		}

		&__cta-icon {
			transform-origin: center;
			transform: rotate(-45deg);
			font-size: clamp(1rem, 10vw, 10rem);
			color: var(--color-aqua);
			font-weight: 600;
			background: url('/bg-gradient-donker.svg') lightgray 50% / cover no-repeat;
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;

			transition: all 0.3s ease;
		}
	}
</style>
