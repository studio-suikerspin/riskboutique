<script lang="ts">
import { PrismicRichText, PrismicLink } from "@prismicio/svelte"
import AvatarWithContactInfo from "./AvatarWithContactInfo.svelte"
import type { RichTextField } from "@prismicio/client"
import { initContentRevealScroll } from '$lib/revealContent.js'
import { onMount } from "svelte"
import Button from "$lib/components/Button.svelte"



  export let title: string;
  export let description: RichTextField | null = null;

  onMount(() => {
    initContentRevealScroll()
  })

  let buttonText= 'Request proposal'
</script>

<div class="section-heading" data-reveal-group>
  <div class="section-heading__title-wrap">
    <div class="title h1">{title}</div>
    {#if description}
      <div class="section-heading__description general-content">
        <PrismicRichText field={description} />
      </div>
    {/if}
  </div>
  <div class="section-heading__cta">
    <AvatarWithContactInfo />
    <Button 
      href="#" 
      text="Request proposal" 
      variant="dark"
      icon="icon-arrow-right"
    />
  </div>
</div>

<style lang="scss">
  .section-heading{
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 2rem;

    &__title-wrap {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }

    &__description {
      max-width: 655px;
    }

    &__cta {
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 1.25rem;
      display: none;

      :global .btn {
        width: 100%;
      }

      @media(min-width: 768px){
        display: flex;
      }
    }
  }
</style>