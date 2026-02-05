<script>
	let { children, variant = 'primary' } = $props()
</script>

<div class="label label--{variant}">
	{@render children()}
</div>

<style lang="scss">
	.label {
		display: flex;
		padding: 0.75rem 1.5rem;
		justify-content: center;
		align-items: center;
		gap: 0.625rem;

		width: fit-content;

		border-radius: 8px 0;

		font-size: 1.125rem;
		font-weight: 600;

		&--primary {
			color: var(--color-snow-white);

			background: url('/bg-gradient-donker.svg');
			background-repeat: no-repeat;
			background-position: top left;
			background-size: cover;
			background-color: var(--color-aqua);
		}

		&--white {
			background: unset;
			background-color: var(--color-snow-white);
			color: var(--color-aqua);
		}
	}
</style>
