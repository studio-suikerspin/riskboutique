<script>
	import { resolve } from '$app/paths'
	import AvatarWithContactInfo from '$lib/components/AvatarWithContactInfo.svelte'
	import { PrismicRichText } from '@prismicio/svelte'

	const { data } = $props()

	const role = data.role || []
</script>

<svelte:head>
	<title>Risk Boutique - {role.data.title}</title>
	<meta
		name="description"
		content={role.data.summary}
	/>
</svelte:head>

<section class="hero">
	<div class="hero__inner">
		<h1 class="hero__title h2">{role.data.title}</h1>
	</div>
</section>

<section class="role block-padding-bottom">
	<div class="container mx-auto">
		<div class="role__inner">
			<div class="role__content rich-text-content">
				<PrismicRichText field={role.data.content} />
			</div>

			<div class="role__cta">
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

			h1{
				max-width: 875px;
				text-align: center;
			}
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
			padding-top: 2.5rem;

			padding-inline: 1.5rem;

			@media(min-width: 768px){
				padding-top: 6.25rem;

			}
		}

		&__cta{
				display: flex;
				flex-direction: column;
				gap: 1rem;
				width: fit-content;

				:global .btn{
					width: 100%;
				}
			}

		&__content {
			@media (min-width: 1024px) {
				font-size: 1.124rem;
			}
		}
	}
</style>
