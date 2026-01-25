<script>
  import { PrismicLink } from '@prismicio/svelte'

  // Props for dynamic button behavior
  export let field = null // Prismic link field
  export let text = 'Button' // Button text
  export let icon = null // Icon class name
  export let variant = 'dark' // donker of lichte variant
  export let disabled = false // Disabled state
  export let href = null // Direct href link (alternative to Prismic field)
  export let type = 'button' // Button type for form buttons
  export let onClick = null // Click handler function
  export let className = '' // Additional CSS classes



  // Compute button classes
  $: buttonClasses = [
    'btn',
    `btn--${variant}`,
    disabled && 'btn--disabled',
    className
  ].filter(Boolean).join(' ')

  // Handle click events
  function handleClick(event) {
    if (disabled) {
      event.preventDefault()
      return
    }
    if (onClick) {
      onClick(event)
    }
  }
</script>

{#if field}
  <PrismicLink
    {field}
    class={buttonClasses}
    {disabled}
    on:click={handleClick}
  >
    {#if icon}
      <i class="btn__icon btn__icon--rotate {icon}"></i>
    {/if}
    <span class="btn__text">
      {text}
    </span>
  </PrismicLink>
{:else if href}
  <a
    {href}
    class={buttonClasses}
    on:click={handleClick}
  >
    {#if icon}
      <i class="btn__icon btn__icon--rotate {icon}"></i>
    {/if}
    <span class="btn__text">
      {text}
    </span>
  </a>
{:else}
  <button
    {type}
    class={buttonClasses}
    {disabled}
    on:click={handleClick}
  >
    {#if icon}
      <i class="btn__icon btn__icon--rotate {icon}"></i>
    {/if}
    <span class="btn__text">
      {text}
    </span>
  </button>
{/if}

<style>
.btn {
	background: var(--color-aqua);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.65rem;
	width: fit-content;

	padding-inline: 0.75rem 1rem;
	padding-block: 0.75rem;

	color: var(--color-snow-white);
	border-radius: 0.5rem;
	border: 0.03125rem solid var(--color-snow-white);

	font-weight: 500;

	/* Button variants */
	&.btn--dark {
		background: var(--color-dark-mode);
		color: var(--color-snow-white);
		border-color: var(--color-snow-white);
	}

	&.btn--white {
		background: var(--color-snow-white);
		color: var(--color-dark-mode);
		border-color: var(--color-snow-white);
	}

	/* Children */
	.btn__text {
		text-wrap: nowrap;
	}

	.btn__icon {
		font-size: 1rem;
		transition: transform 0.3s ease-in-out;

		&.icon-arrow-right {
			rotate: -45deg;
		}
	}

	/* Hover effects - gebruik :global() voor PrismicLink compatibility */
	&:hover:not(.btn--disabled) .btn__icon--rotate,
	:global(&:hover:not(.btn--disabled)) .btn__icon--rotate {
		transform: translateX(5px);
	}
}

/* Extra fallback voor PrismicLink */
:global(.btn:hover:not(.btn--disabled) .btn__icon--rotate) {
	transform: translateX(5px);
}

:global .btn__icon {
  transition: transform 0.3s ease-in-out;
}
</style>