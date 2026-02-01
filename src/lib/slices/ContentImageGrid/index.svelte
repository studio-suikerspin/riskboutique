<script lang="ts">
	import type { Content } from '@prismicio/client'
	import { PrismicRichText, PrismicImage, type SliceComponentProps } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.ContentImageGridSlice>

	const { slice }: Props = $props()
</script>

<section
	class="content-grid block-padding"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
     <div class="container">
          <div class="content-grid__grid">
               {#each slice.primary.items as item, index (index)}
                    {console.log(item)}
                    <div class="grid-item grid-item--{item.type}">
                         {#if item.type === 'text'}
                              <div class="grid-item__text general-content">
                                   <PrismicRichText field={item.text} />
                              </div>
                         {:else if item.type === 'image'}
                              <PrismicImage field={item.image} class="grid-item__image" />
                         {/if}
                    </div>
               {/each}
          </div>
     </div>
</section>

<style lang="scss">
.content-grid {
     &__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
          grid-template-rows: repeat(3, 1fr);
          column-gap: 4.5rem;
     }

     .grid-item {
          &--image {
               grid-row: span 2;
          }
     }
}
</style>
