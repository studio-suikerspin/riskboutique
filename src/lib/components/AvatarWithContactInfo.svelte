<script lang="ts">
	import CdnImage from './CdnImage.svelte'

	export let image: string
	export let name = 'Robert Dreyer'
	export let role = 'MSc RO'
	export let email = 'info@riskboutique.nl'
	export let phone = '+31 6 123 456 78'
	export let isDarkBackground: boolean = false
	export let second_role = 'Partner'
</script>

<div class="avatar-contact {isDarkBackground ? 'dark-background' : ''}">
	<div class="avatar-contact__person">
		<div class="avatar-contact__image">
			<CdnImage field={image} />
		</div>

		<div class="avatar-contact__info">
			<div class="avatar-contact__name-and-role">
				<span class="contact-info__name">{name}</span>
				<span class="">-</span>
				<span class="contact-info__role">{role}</span>
			</div>
			<!-- <div class="avatar__middle">{second_role}</div> -->
			<div class="avatar-contact__actions">
				<a href="mailto:{email}">
					E: {email}
				</a>
				<a href="tel:{phone.replace(/\s/g, '')}"> T: {phone}</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.avatar-contact {
		font-size: 0.875rem;
		min-width: 220px;

		&__person {
			display: flex;
			gap: 0.5rem;
			align-items: center;

			@media (min-width: 992px) {
				flex-direction: column;
				align-items: start;
			}
		}

		&__image :global img {
			// width: 100%;
			// height: auto;
			aspect-ratio: 2 / 5;
			height: 90px;
			width: 90px;
			object-fit: cover;
			border-radius: 0.5rem;
			border: 1.5px solid var(--color-aqua);
		}

		&__info {
			display: flex;
			flex-direction: column;
			// gap: 0.5rem;
		}

		&__name-and-role {
			display: flex;
			gap: 0.25rem;
			font-weight: 600;
		}

		&__actions {
			display: flex;
			flex-direction: column;
			// gap: 0.25rem;

			a {
				// color: var(--color-aqua);
				text-decoration: none;
				transition: color 0.3s ease;

				&:hover {
					color: var(--color-primary-dark);
				}
			}
		}
	}
</style>
