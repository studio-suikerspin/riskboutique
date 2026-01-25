<script>
	import { PrismicLink } from "@prismicio/svelte";
	
	export let field;
  export let border;
</script>

<div class="connect_with_us_cta {border === 'dark' ? 'dark-border' : 'light-border'}">
  <h5>
    <PrismicLink field={field} />
  </h5>
  <i class="icon-arrow-right"></i>
</div>

<style>
  .connect_with_us_cta {
    display: flex;
    width: fit-content;
    gap: 0.75rem;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-snow-white);
  }

  .connect_with_us_cta.dark-border {
    border-color: var(--color-dark-mode);
  }

  .connect_with_us_cta.light-border {
    border-color: var(--color-snow-white);
  }

  .connect_with_us_cta h5{
    display: flex;
    align-items: center;
  }

  .connect_with_us_cta i{
    font-size: 32px;
    rotate: -50deg;
    transition: transform 0.3s ease-in-out;
  }

  @media(min-width: 768px) {
    .connect_with_us_cta i{
       font-size: 24px;
    }
  }

  .connect_with_us_cta:hover i{
    transform: translateX(5px);
  }
</style>