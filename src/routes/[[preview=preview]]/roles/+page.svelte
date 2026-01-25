<script>
	import { resolve } from '$app/paths'

	const { data } = $props()

	const openRoles = data.openRoles || []
</script>

<svelte:head>
	<title>Risk Boutique - Open Roles</title>
	<meta
		name="description"
		content="Discover our open roles at Risk Boutique."
	/>
	<meta
		name="keywords"
		content="Risk Boutique, open roles"
	/>
</svelte:head>

<section class="hero">
	<div class="hero__inner">
		<h1 class="h1">Open roles</h1>
	</div>
</section>

<section class="roles block-padding">
	<div class="container mx-auto">
		<ul class="roles__list">
			{#each openRoles as openRole, index (index)}
				<li class="role">
					<div class="role__heading">
						<h4 class="h4">{openRole.data.title}</h4>

						<a
							href={resolve(`/roles/${openRole.uid}`)}
							class="role__cta"
						>
							Apply <i class="icon-arrow-right"></i>
						</a>
					</div>

					<div class="role__summary subtitle">
						{openRole.data.summary}
					</div>

					<ul class="role__tags">
						{#each openRole.data.tags as item, index (index)}
							<li class="tag">{item.tag}</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
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
	}

	.roles {
		&__list {
			display: flex;
			flex-flow: column;
			gap: 2.5rem;
		}

		padding-inline: 1rem;
	}

	.role {
		padding-block-end: 2.5rem;
		border-bottom: 1px solid var(--color-dark-mode);

		display: flex;
		flex-flow: column;
		gap: 1rem;

		&__heading {
			display: flex;
			justify-content: space-between;
			flex-flow: column;
			gap: 0.5rem;

			@media (min-width: 1024px) {
				flex-flow: row;
			}
		}

		&__cta {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			color: var(--color-aqua);
			font-size: 1.125rem;

			@media (min-width: 1024px) {
				font-size: 2rem;
			}

			&:hover {
				i {
					transform: translate(0.5rem, -0.5rem) rotate(-45deg);
					transition: transform 150ms ease;
				}
			}

			i {
				transform-origin: center;
				transform: rotate(-45deg);
				transition: transform 150ms ease;
			}
		}

		&__summary {
			max-width: 500px;
			margin-block-end: 1.5rem;
		}

		&__tags {
			display: flex;
			flex-flow: row;
			gap: 1rem;

			.tag {
				display: flex;
				background: var(--color-aqua);
				color: var(--color-snow-white);

				padding-block: 0.75rem;
				padding-inline: 0.75rem;
				border-radius: 0.25rem;

				@media (min-width: 1024px) {
					font-size: 1.125rem;
				}
			}
		}
	}
</style>
