<script lang="ts">
	import { PrismicImage } from '@prismicio/svelte';

	export let avatar = 'https://images.prismic.io/riskboutique/aW-1UwIvOtkhBv-c_portret-robert.jpg?auto=format,compress';
	export let name = "Robert Dreyer";
	export let role = "MSc RO";
	export let email = "info@riskboutique.nl";
	export let phone = "+31 6 123 456 78";
	export let isDarkBackground: boolean = false;
</script>

<div class="avatar-contact {isDarkBackground ? 'dark-background' : ''}">
	<div class="avatar-contact__person">
		<div class="avatar-wrap">
			<img src={avatar} alt="Avatar" />
		</div>
		<div class="contact-info">
			<span class="contact-info__name">{name}</span>
			<span class="contact-info__role">{role}</span>
		</div>
	</div>

	<div class="divider"></div>

	<div class="contact-details">
		<span class="title">Vragen?</span>
		<a href="mailto:{email}">{email}</a>
		<a href="tel:{phone.replace(/\s/g, '')}">{phone}</a>
	</div>
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
				border: 2px solid rgba(0, 0, 0, 0.1);
				cursor: pointer;
				transition: transform 0.3s ease;

				&:hover {
					transform: scale(1.5);
					z-index: 10;
				}

				:global(img) {
					width: 100%;
					object-fit: cover;
				}
			}

			.contact-info {
				display: flex;
				flex-direction: column;
				gap: 0.125rem;
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

		.divider {
			width: 1px;
			height: 2rem;
			background: rgba(0, 0, 0, 0.1);
		}

		.contact-details {
			display: flex;
			flex-direction: column;
			gap: 0.125rem;
			line-height: 1.3;

			.title {
				font-weight: 500;
				color: #000;
				font-size: 0.75rem;
			}

			a {
				text-decoration: underline;
				color: rgba(0, 0, 0, 0.6);
				font-size: 0.75rem;
				transition: color 0.2s;

				&:hover {
					color: #000;
					text-decoration: none;
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
