<script>
    let { children } = $props();
</script>

<div class="label">
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
        color: var(--color-snow-white);

        background: url('bg-gradient-donker.svg') lightgray 50% / cover top-left no-repeat;
        background-color: var(--color-aqua);
    }
</style>
