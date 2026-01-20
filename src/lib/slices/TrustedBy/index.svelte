<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';

	type Props = SliceComponentProps<Content.TrustedBySlice>;

	const { slice }: Props = $props();

	function initLogoWallCycle() {
		if (!browser) return;
  const loopDelay = 1.5;   // Loop Duration
  const duration  = 0.9;   // Animation Duration

  document.querySelectorAll('[data-logo-wall-cycle-init]').forEach(root => {
    const list   = root.querySelector('[data-logo-wall-list]');
    const items  = Array.from(list.querySelectorAll('[data-logo-wall-item]'));

    const shuffleFront = root.getAttribute('data-logo-wall-shuffle') !== 'false';
    const originalTargets = items
      .map(item => item.querySelector('[data-logo-wall-target]'))
      .filter(Boolean);

    let visibleItems   = [];
    let visibleCount   = 0;
    let pool           = [];
    let pattern        = [];
    let patternIndex   = 0;
    let tl;

    function isVisible(el) {
      return window.getComputedStyle(el).display !== 'none';
    }

    function shuffleArray(arr) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    function setup() {
      if (tl) {
        tl.kill();
      }
      visibleItems = items.filter(isVisible);
      visibleCount = visibleItems.length;

      pattern = shuffleArray(
        Array.from({ length: visibleCount }, (_, i) => i)
      );
      patternIndex = 0;

      // remove all injected targets
      items.forEach(item => {
        item.querySelectorAll('[data-logo-wall-target]').forEach(old => old.remove());
      });

      pool = originalTargets.map(n => n.cloneNode(true));

      let front, rest;
      if (shuffleFront) {
        const shuffledAll = shuffleArray(pool);
        front = shuffledAll.slice(0, visibleCount);
        rest  = shuffleArray(shuffledAll.slice(visibleCount));
      } else {
        front = pool.slice(0, visibleCount);
        rest  = shuffleArray(pool.slice(visibleCount));
      }
      pool = front.concat(rest);

      for (let i = 0; i < visibleCount; i++) {
        const parent =
          visibleItems[i].querySelector('[data-logo-wall-target-parent]') ||
          visibleItems[i];
        parent.appendChild(pool.shift());
      }

      tl = gsap.timeline({ repeat: -1, repeatDelay: loopDelay });
      tl.call(swapNext);
      tl.play();
    }

    function swapNext() {
      const nowCount = items.filter(isVisible).length;
      if (nowCount !== visibleCount) {
        setup();
        return;
      }
      if (!pool.length) return;

      const idx = pattern[patternIndex % visibleCount];
      patternIndex++;

      const container = visibleItems[idx];
      const parent =
        container.querySelector('[data-logo-wall-target-parent]') ||
        container.querySelector('*:has(> [data-logo-wall-target])') ||
        container;
      const existing = parent.querySelectorAll('[data-logo-wall-target]');
      if (existing.length > 1) return;

      const current  = parent.querySelector('[data-logo-wall-target]');
      const incoming = pool.shift();

      gsap.set(incoming, { yPercent: 50, autoAlpha: 0 });
      parent.appendChild(incoming);

      if (current) {
        gsap.to(current, {
          yPercent: -50,
          autoAlpha: 0,
          duration,
          ease: "expo.inOut",
          onComplete: () => {
            current.remove();
            pool.push(current);
          }
        });
      }

      gsap.to(incoming, {
        yPercent: 0,
        autoAlpha: 1,
        duration,
        delay: 0.1,
        ease: "expo.inOut"
      });
    }

    setup();

    ScrollTrigger.create({
      trigger: root,
      start: 'top bottom',
      end: 'bottom top',
      onEnter:     () => tl.play(),
      onLeave:     () => tl.pause(),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => tl.pause()
    });

    document.addEventListener('visibilitychange', () =>
      document.hidden ? tl.pause() : tl.play()
    );
  });
}

// Initialize Logo Wall Cycle
onMount(() => {
	initLogoWallCycle();
});
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="block-padding">
	<div data-logo-wall-shuffle="false" data-logo-wall-cycle-init="" class="logo-wall">
  <div class="logo-wall__collection">
    <div data-logo-wall-list="" class="logo-wall__list">
			{#each slice.primary.logos as item}
				 <div data-logo-wall-item="" class="logo-wall__item {item.with_background ? 'logo-wall__item--with-background' : ''}">
					<div data-logo-wall-target-parent="" class="logo-wall__logo">
						<div class="logo-wall__logo-before"></div>
						<div data-logo-wall-target="" class="logo-wall__logo-target">
							<PrismicImage field={item.logo_image} />
						</div>
					</div>
				</div>
			{/each}
    </div>
  </div>
</div>
</section>

<style>
	.logo-wall {
  display: flex;
  justify-content: center;
  width: 100%;
	padding-inline: 12px;
}

@media(min-width: 768px) {
	.logo-wall {
		padding-inline: 20px;
	}
}

.logo-wall__collection {
  width: 100%;
}

.logo-wall__list {
  display: flex;
  flex-flow: wrap;
	gap: 12px;
}

.logo-wall__item {
  width: calc(25% - 9px);
  position: relative;
	border-radius: 4px;
	border: 1px solid var(--color-clay-green, #B2C1BD);
}

.logo-wall__item--with-background {
	background: url('/bg-gradient-licht.svg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}	

[data-logo-wall-list] [data-logo-wall-item]:nth-child(n+9) {
  display: none;
}

.logo-wall__logo {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.logo-wall__logo-before {
  padding-top: 66.66%;
}

.logo-wall__logo-target {
  justify-content: center;
  align-items: center;
  width: 66.66%;
  height: 40%;
  display: flex;
  position: absolute;
}

.logo-wall__logo-img {
  width: 100%;
  height: 100%;
  max-height: 100%;
}

@media screen and (max-width: 991px) {
  .logo-wall__item {
    width: calc(50% - 6px);
  }

  [data-logo-wall-list] [data-logo-wall-item]:nth-child(n+5) {
    display: none;
  }
}
</style>
