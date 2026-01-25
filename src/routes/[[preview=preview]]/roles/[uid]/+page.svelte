<script>
	import { resolve } from '$app/paths'
	import AvatarWithContactInfo from '$lib/components/AvatarWithContactInfo.svelte'
	import { PrismicRichText } from '@prismicio/svelte'

	const { data } = $props()

	const role = data.role || []
</script>

<section class="hero">
	<div class="hero__inner">
		<h1 class="hero__title h2">{role.data.title}</h1>
	</div>
</section>

<section class="role block-padding">
	<div class="container mx-auto">
		<div class="role__inner">
			<div class="role__content">
				<PrismicRichText field={role.data.content} />
			</div>

			<AvatarWithContactInfo />
			<a
				href="mailto:info@riskboutique.nl"
				title="Apply now"
				class="btn btn--dark"
			>
				<i class="icon-mail"></i> Apply now
			</a>
		</div>
	</div>
</section>

<style lang="scss">
	.hero {
		background: url('/bg-gradient-donker.svg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;

		&__inner {
			padding-block: 9rem;
			display: flex;
			align-items: center;
			justify-content: center;

			color: var(--color-snow-white);
		}

		&__title {
			text-align: center;
		}
	}

	.role {
		&__inner {
			display: flex;
			flex-flow: column;
			gap: 1rem;

			padding-inline: 1.5rem;
		}

		&__content {
			@media (min-width: 1024px) {
				font-size: 1.124rem;
			}
		}
	}
</style>
