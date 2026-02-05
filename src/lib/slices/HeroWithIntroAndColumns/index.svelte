<script lang="ts">
  import type { Content } from '@prismicio/client'
  import type { SliceComponentProps } from '@prismicio/svelte'
  import { PrismicImage } from '@prismicio/svelte'
  import { PrismicRichText } from '@prismicio/svelte'
  import { onMount } from 'svelte'
  import { gsap, ScrollTrigger } from '$lib/gsap'

  type Props = SliceComponentProps<Content.HeroWithIntroAndColumnsSlice>

  const { slice }: Props = $props()

  onMount(() => {
    // Check of het scherm groot genoeg is voor parallax effecten
    const isDesktop = window.matchMedia('(min-width: 992px)').matches

    if (isDesktop) {
      // Parallax effect voor de hero image
      gsap.to('.hero__image', {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: '.hero',
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })

      // Parallax effect voor de heading - langzamer dan de image
      gsap.to('.hero__heading', {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: '.hero',
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  })
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
  class="hero"
>
<div class="hero__inner">
  <div class="hero__image">
    <PrismicImage field={slice.primary.background_image} />
    <div class="overlay"></div>
  </div>
  <div class="container">
    <div class="hero__heading">
      <div class="hero__title">
        <h1 class="">
        <PrismicRichText field={slice.primary.title} />
        </h1>
        <div class="subtitle">
          <PrismicRichText field={slice.primary.subtitle} />
        </div>
      </div>
      <div class="hero__columns">
        {#each slice.primary.descriptions as item}
          <div class="hero__columns_item">
            <div class="title">
              <PrismicRichText field={item.section_title} />
            </div>
            <div class="general-content">
              <PrismicRichText field={item.section_body} />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
  
</section>

<style lang="scss">
  .hero{
    background: url('/gradient-licht-gedraaid.svg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    position: relative;
    padding-bottom: 2rem;

    @media(min-width: 992px){
      min-height: 110vh;
      padding-bottom: 0;
    }
    


    &__inner{
      position: relative;
      overflow: visible;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }

    &__image{
      width: 100%;
      height: 35vh;
      position: relative;
      will-change: transform;

      @media(min-width: 768px){
        height: 55vh;
      }

      :global img{
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      .overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.25);
        mix-blend-mode: multiply;
      }
    }

    &__heading{
      display: flex;
      flex-direction: column;
      will-change: transform;
      gap: 2.5rem;
    }

    &__title{
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media(min-width: 768px){
        gap: 1.5rem;
      }

      .subtitle{

        :global p{
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 90%; /* 36px */
          letter-spacing: -0.5px;
          color: rgba(11, 14, 19, 0.75);

          @media(min-width: 768px){
            font-size: 2.5rem;
          }
        }
      }
    }

    &__columns{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 1rem;

      @media(min-width: 768px){
        flex-direction: row;
        gap: 5rem;
      }

      &_item{
        flex: 1;        
      }
    }
  }

</style>

