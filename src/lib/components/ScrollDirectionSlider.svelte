<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { gsap } from '$lib/gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { PrismicImage } from '@prismicio/svelte';

  // Props
  let { images = [] } = $props();

  function initMarqueeScrollDirection() {
    if (!browser) return;
    
    document.querySelectorAll('[data-marquee-scroll-direction-target]').forEach((marquee) => {
    // Query marquee elements
    const marqueeContent = marquee.querySelector('[data-marquee-collection-target]');
    const marqueeScroll = marquee.querySelector('[data-marquee-scroll-target]');
    if (!marqueeContent || !marqueeScroll) return;

    // Get data attributes
    const { marqueeSpeed: speed, marqueeDirection: direction, marqueeDuplicate: duplicate, marqueeScrollSpeed: scrollSpeed } = marquee.dataset;

    // Convert data attributes to usable types
    const marqueeSpeedAttr = parseFloat(speed);
    const marqueeDirectionAttr = direction === 'right' ? 1 : -1; // 1 for right, -1 for left
    const duplicateAmount = parseInt(duplicate || 0);
    const scrollSpeedAttr = parseFloat(scrollSpeed);
    const speedMultiplier = window.innerWidth < 479 ? 0.25 : window.innerWidth < 991 ? 0.5 : 1;

    let marqueeSpeed = marqueeSpeedAttr * (marqueeContent.offsetWidth / window.innerWidth) * speedMultiplier;

    // Precompute styles for the scroll container
    marqueeScroll.style.marginLeft = `${scrollSpeedAttr * -1}%`;
    marqueeScroll.style.width = `${(scrollSpeedAttr * 2) + 100}%`;

    // Duplicate marquee content
    if (duplicateAmount > 0) {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < duplicateAmount; i++) {
        fragment.appendChild(marqueeContent.cloneNode(true));
      }
      marqueeScroll.appendChild(fragment);
    }

    // GSAP animation for marquee content
    const marqueeItems = marquee.querySelectorAll('[data-marquee-collection-target]');
    const animation = gsap.to(marqueeItems, {
      xPercent: -100, // Move completely out of view
      repeat: -1,
      duration: marqueeSpeed,
      ease: 'linear'
    }).totalProgress(0.5);

    // Initialize marquee in the correct direction
    gsap.set(marqueeItems, { xPercent: marqueeDirectionAttr === 1 ? 100 : -100 });
    animation.timeScale(marqueeDirectionAttr); // Set correct direction
    animation.play(); // Start animation immediately

    // Set initial marquee status
    marquee.setAttribute('data-marquee-status', 'normal');

    // ScrollTrigger logic for direction inversion
    ScrollTrigger.create({
      trigger: marquee,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const isInverted = self.direction === 1; // Scrolling down
        const currentDirection = isInverted ? -marqueeDirectionAttr : marqueeDirectionAttr;

        // Update animation direction and marquee status
        animation.timeScale(currentDirection);
        marquee.setAttribute('data-marquee-status', isInverted ? 'normal' : 'inverted');
      }
    });

    // Extra speed effect on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: marquee,
        start: '0% 100%',
        end: '100% 0%',
        scrub: 0
      }
    });

    const scrollStart = marqueeDirectionAttr === -1 ? scrollSpeedAttr : -scrollSpeedAttr;
    const scrollEnd = -scrollStart;

    tl.fromTo(marqueeScroll, { x: `${scrollStart}vw` }, { x: `${scrollEnd}vw`, ease: 'none' });
  });
}

// Initialize Marquee with Scroll Direction
onMount(() => {
  if (browser) {
    initMarqueeScrollDirection();
  }
});
</script>

<section class="section-resource">
  <!-- Based on item width -->
  <div data-marquee-duplicate="2" data-marquee-scroll-direction-target="" data-marquee-direction="right" data-marquee-status="normal" data-marquee-speed="60" data-marquee-scroll-speed="10" class="marquee-advanced">
    <div data-marquee-scroll-target="" class="marquee-advanced__scroll">
      <div data-marquee-collection-target="" class="marquee-advanced__collection">
        {#each images as item, index (index)}
        <div class="marquee-advanced__item-width border-radius">
          <PrismicImage field={item.image} />
        </div>  
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
.marquee-advanced {
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.marquee-advanced__scroll {
  will-change: transform;
  width: 100%;
  display: flex;
  position: relative;
}

.marquee-advanced__collection {
  will-change: transform;
  display: flex;
  position: relative;
  gap: 8px;
  margin-right: 8px;
}

.marquee-advanced__item-width {
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 120px;
  display: flex;
}

@media(min-width: 768px){
  .marquee-advanced__item-width {
    width: 340px;
    height: 210px;
  }
}

.marquee-advanced__item-width :global img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}


/* Optional: Rotating arrow left/right based on Scroll Direction */

.marquee__advanced__arrow-svg,
[data-marquee-direction="right"][data-marquee-status="inverted"] .marquee__advanced__arrow-svg {
  transition: 0.5s cubic-bezier(0.625, 0.05, 0, 1);
  transform: rotate(-180deg);
}

[data-marquee-status="inverted"] .marquee__advanced__arrow-svg,
[data-marquee-direction="right"][data-marquee-status="normal"] .marquee__advanced__arrow-svg {
  transform: rotate(-359.999deg);
}
</style>