<script lang="ts">
	import { PrismicImage } from '@prismicio/svelte';

	export let image: string;
	export let name = "Robert Dreyer";
	export let role = "MSc RO";
	export let email = "info@riskboutique.nl";
	export let phone = "+31 6 123 456 78";
	export let isDarkBackground: boolean = false;
</script>

<div class="avatar-contact {isDarkBackground ? 'dark-background' : ''}">
	<div class="avatar-contact__person">
		<div class="avatar-wrap">
			<PrismicImage field={image} />
		</div>
		<div class="contact-info">
			<div class="avatar-contact__name-and-role">
			<span class="contact-info__name">{name}</span>
			<span class="contact-info__role">{role}</span>
			</div>
			<div class="avatar-contact__actions">
			<a href="mailto:{email}">
				{email}</a>
			<a href="tel:{phone.replace(/\s/g, '')}">
				{phone}</a>
			</div>
		</div>
		<!-- <div class="divider"></div> -->
	</div>


	<!-- <div class="contact-details">
		<a href="mailto:{email}">{email}</a>
		<a href="tel:{phone.replace(/\s/g, '')}">{phone}</a>
	</div> -->
</div>

<style lang="scss">
	.avatar-contact {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		font-size: 0.825rem;

		&__person {
			display: flex;
			align-items: center;
			gap: 0.75rem;

			.avatar-wrap {
				width: 3.5rem;
				height: 3.5rem;
				border-radius: 0.5rem;
				overflow: hidden;
				border: 1px solid var(--color-aqua);

				:global(img) {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.contact-info {
				display: flex;
				align-items: center;
				gap: 1.5rem;
				line-height: 1.2;

				&__name {
					font-weight: 600;
					color: #000;
				}

				&__role {
					color: rgba(0, 0, 0, 0.6);
					font-size: 0.75rem;
				}
			}
		}

		&__name-and-role{
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		&__actions {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;

			a {
				display: flex;
				align-items: center;
				gap: 0.25rem;
				// color: var(--color-aqua);
				// text-decoration: none;
				// font-size: 0.75rem;

				&:hover {
					text-decoration: underline;
				}

				i {
					font-size: 0.75rem;
					transition: transform 0.2s;

					&:hover {
						transform: translateX(2px);
					}
				}
			}
		}

		.divider {
			width: 1px;
			height: 2rem;
			background: var(--color-aqua);
			opacity: 0.5;
		}

		.contact-details {
			display: flex;
			flex-direction: column;
			gap: 0.125rem;
			line-height: 1.3;

			.title {
				font-weight: 500;
				color: var(--color-dark-mode);
				font-size: 0.75rem;
			}

			a {
				text-decoration: underline;
				color: var(--color-dark-mode);
				font-size: 0.75rem;
				transition: color 0.2s;

				&:hover {
					color: var(--color-aqua);
				}
			}
		}

		&.dark-background {
			.avatar-contact__person {
				.avatar-wrap {
					border-color: rgba(255, 255, 255, 0.2);
				}

				.contact-info {
					&__name {
						color: #fff;
					}

					&__role {
						color: rgba(255, 255, 255, 0.7);
					}
				}
			}

			.divider {
				background: rgba(255, 255, 255, 0.2);
			}

			.contact-details {
				.title {
					color: #fff;
				}

				a {
					color: rgba(255, 255, 255, 0.7);

					&:hover {
						color: #fff;
					}
				}
			}
		}
	}
</style>
