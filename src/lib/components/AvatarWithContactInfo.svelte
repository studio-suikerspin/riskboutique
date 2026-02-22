<script lang="ts">
	import { PrismicImage } from '@prismicio/svelte';

	export let image: string;
	export let name = "Robert Dreyer";
	export let role = "MSc RO";
	export let email = "info@riskboutique.nl";
	export let phone = "+31 6 123 456 78";
	export let isDarkBackground: boolean = false;
	export let second_role: string = "";
</script>

<div class="avatar-contact {isDarkBackground ? 'dark-background' : ''}">
	<div class="avatar-contact__person">
		<div class="avatar-contact__image">
			<PrismicImage field={image} />
		</div>

		<div class="avatar-contact__name-and-role">
			<span class="contact-info__name">{name}</span>
			<span class="">-</span>
			<span class="contact-info__role">{role}</span>
		</div>
		<div class="avatar__middle">{second_role}</div>
		<div class="avatar-contact__actions">
			<a href="mailto:{email}">
				{email}</a>
			<a href="tel:{phone.replace(/\s/g, '')}">
				{phone}</a>
		</div>
	</div>

</div>

<style lang="scss">
	.avatar-contact {

		&__person{
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		&__image :global img{
			width: 100%;
			height: auto;
			aspect-ratio: 2 / 5;
			max-height: 110px;
			max-width: 110px;
			object-fit: cover;
			border-radius: 0.5rem;
		}
	}
</style>
