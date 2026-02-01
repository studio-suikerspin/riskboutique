<script lang="ts">
	import type { Content } from '@prismicio/client'
	import type { SliceComponentProps } from '@prismicio/svelte'

	type Props = SliceComponentProps<Content.MarqueeTextSlice>

	const { slice }: Props = $props()
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="block-padding-bottom"
>
	<div data-css-marquee="" class="marquee-css">
  <div data-css-marquee-list="" class="marquee-css__list">
		{#each slice.primary.items as item}
		<div class="marquee-css__item">
      <div class="marquee-css__item-p h1">{item.marquee_text}</div>
    </div>
		{/each}
 
  </div>
	<div data-css-marquee-list="" class="marquee-css__list">
		{#each slice.primary.items as item}
		<div class="marquee-css__item">
      <div class="marquee-css__item-p h1">{item.marquee_text}</div>
    </div>
		{/each}  
  </div>
</div>
</section>

<style>
.marquee-css {
  width: 100%;
	height: 100%;
  display: flex;
  position: relative;
  /* overflow: hidden; */
}

.marquee-css__list {
  flex: none;
  align-items: center;
  display: flex;
  position: relative;
}

.marquee-css__item {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  flex: 0;
  align-items: center;
  padding-right: 1.5rem;
  display: flex;

	@media(min-width: 768px){
		padding-right: 2.5rem;
		grid-column-gap: 2.5rem;
  	grid-row-gap: 2.5rem;
	}
}

.marquee-css__item-p {
  white-space: nowrap;
	line-height: 1.3;

	background: url('/bg-gradient-licht.svg') lightgray 50% / cover no-repeat;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

/* CSS Keyframe Animation */
@keyframes translateX { 
	to {
    transform: translateX(-100%);
  }
}

[data-css-marquee-list] {
  animation: translateX 30s linear;
  animation-iteration-count: infinite;
  /* animation-play-state: paused; */
}
</style>
