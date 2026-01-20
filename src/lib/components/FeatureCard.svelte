<script lang="ts">
	import type { RichTextField } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import SvgShapes from './SvgShapes.svelte';

	type Props = {
		title: string;
		description: RichTextField;
    background?: string;
    text_color?: string;
    number?: string;
    shape?: string;
	};

	const { title, description, background, text_color, number, shape }: Props = $props();
</script>



<div class="feature-card border-radius" style="background: {background}; color: {text_color}">
  <div class="feature-card__text">
    <h4 class="feature-cards__card-title">
      {title}
    </h4>
    <div class="feature-card__description subtitle">
      <PrismicRichText field={description} />
    </div>
  </div>
  <div class="feature-card__shape">
    <SvgShapes shape={shape} />
  </div>
  <div class="feature-card__number">
    {number}
  </div>
</div>



<style lang="scss">
.feature-card{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem;
  min-height: 700px;
  height: 100%;

  &__text{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__shape{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__number{
    font-size: 1.5rem;
    line-height: 85%;

    @media(min-width: 768px){
      font-size: 2.5rem;
    }
  }
}

.feature-card__shape{
  padding: 2.5rem ;
}

.feature-card__shape :global svg{
  // max-width: 280px;
  height: auto;
  max-width: 100%;
}
</style>
