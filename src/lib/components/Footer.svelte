<script>
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import { page } from '$app/state';

	const footer = page.data.footer.data;
	const socials = page.data.socials.data.socials;
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
							<PrismicLink data-sidenav-fade="" field={social_link} class="socials__item-link">
								<i class="icon-linkedin"></i>
							</PrismicLink>
						</li>
					{/each}
				</ul>
			</div>

			<div class="footer__columns">
				{#each footer.columns as footerColumn, index (index)}
					<div class="footer-column">
						<div class="footer-column__title">
							{footerColumn.column_title}
						</div>

						<div class="footer-column__links">
							<ul>
								{#each footerColumn.links as link, index (index)}
									<li>
										<PrismicLink field={link} />
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>

			<div class="footer__cta"></div>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer {
		padding-block: 3.125rem 1.25rem;

		background: linear-gradient(to bottom right, var(--color-snow-white), var(--color-clay-green));

		@media (min-width: 768px) {
			padding-block: 6.25rem 1.25rem;
		}

		&__container {
			max-width: 2000px;
			padding-inline: 1.25rem;
		}

		&__inner {
			display: flex;
			flex-direction: column;
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
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			.footer-column {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;

				&__title {
					font-size: 1.125rem;
					font-weight: 700;
				}
			}
		}
	}
</style>
