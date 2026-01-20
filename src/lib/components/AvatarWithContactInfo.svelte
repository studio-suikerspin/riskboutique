<script>
	import { PrismicImage } from '@prismicio/svelte';
</script>

<div class="avatar-contact">
	<div class="avatar-contact__person">
		<div class="avatar-wrap">
			<img
				src="https://images.prismic.io/riskboutique/aW-1UwIvOtkhBv-c_portret-robert.jpg?auto=format,compress"
				alt="Robert"
			/>
		</div>
		<div class="contact-info">
			<div class="contact-info__name">Robert</div>
			<div class="contact-info__role">Partner</div>
		</div>
	</div>

	<div class="contact-details">
		<a href="mailto:info@riskboutique.nl">info@riskboutique.nl</a>
		<a href="tel:+31612345678">+31 6 123 456 78</a>
	</div>
</div>

<style lang="scss">
	.avatar-contact {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		font-size: 0.825rem;

		margin-top: 1rem;

		&__person {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			line-height: 1;

			.avatar-wrap {
				width: 2rem;
				height: 2rem;
				border-radius: 50%;
				overflow: hidden;
			}

			.contact-info {
				display: flex;
				flex-direction: column;
				gap: 0.25rem;

				&__name {
					font-weight: 600;
				}
			}
		}

		.contact-details {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
			line-height: 1;

			a {
				text-decoration: underline;
			}
		}
	}
</style>
