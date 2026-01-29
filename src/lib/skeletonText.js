import { browser } from '$app/environment'
import { gsap, ScrollTrigger, SplitText } from './gsap.js'

function debounce(fn, delay = 200) {
  let t
  return (...args) => {
    clearTimeout(t)
    t = setTimeout(() => fn(...args), delay)
  }
}


export function initSkeletonTextReveal() {
  if (!browser) return

  gsap.registerPlugin(ScrollTrigger, SplitText)

  let prevWidth = window.innerWidth
  let resizeHandler
  let ctx

  // --- CLEANUP ---
  function cleanup() {
    // Revert GSAP context (kills timelines + ScrollTriggers)
    if (ctx) ctx.revert()

    // Cleanup SplitText + overlays
    document.querySelectorAll('[data-load-skeleton]').forEach(target => {
      if (target.splitInstance) {
        target.splitInstance.revert()
        delete target.splitInstance
      }

      target.querySelectorAll('.skeleton-overlay').forEach(el => el.remove())
    })
  }

  // --- SPLIT TEXT ---
  function initSplit() {
    document.querySelectorAll('[data-load-skeleton]').forEach(target => {
      const splitInstance = new SplitText(target, {
        type: 'lines',
        linesClass: 'single-line'
      })

      target.splitInstance = splitInstance
      target.setAttribute('aria-label', target.textContent)

      splitInstance.lines.forEach(line => {
        line.setAttribute('aria-hidden', 'true')

        const wrapper = document.createElement('div')
        wrapper.classList.add('single-line-wrap')
        line.parentNode.insertBefore(wrapper, line)
        wrapper.appendChild(line)
      })
    })
  }

  // --- SKELETON ANIMATION ---
  function initSkeletonLoader() {
    document.querySelectorAll('[data-load-skeleton]').forEach(instance => {
      const lineWrappers = instance.querySelectorAll('.single-line-wrap')

      lineWrappers.forEach((wrapper, i) => {
        const overlay = document.createElement('div')
        overlay.classList.add('skeleton-overlay')
        wrapper.style.position = 'relative'
        wrapper.appendChild(overlay)

        const pulseColor = gsap.getProperty(instance, '--color-skeleton-pulse')
        const textEl = overlay.previousElementSibling

        gsap.timeline({
          scrollTrigger: {
            trigger: overlay,
            start: 'top 90%',
            once: true
          }
        })
        .to(overlay, {
          backgroundColor: pulseColor,
          duration: 0.3,
          ease: 'power1.inOut',
          repeat: 2,
          yoyo: true,
          delay: i * 0.05
        })
        .to(overlay, {
          opacity: 0,
          onComplete: () => overlay.remove()
        })
        .to(textEl, {
          autoAlpha: 1
        }, '<')
      })
    })
  }

  // --- INIT ALL ---
  function initTextEffects() {
    cleanup()
    initSplit()
    initSkeletonLoader()
  }

  // --- GSAP CONTEXT ---
  ctx = gsap.context(() => {
    document.fonts.ready.then(initTextEffects)
  })

  // --- RESIZE HANDLER ---
  resizeHandler = debounce(() => {
    const currentWidth = window.innerWidth
    if (currentWidth !== prevWidth) {
      prevWidth = currentWidth
      initTextEffects()
    }
  }, 250)

  window.addEventListener('resize', resizeHandler)

  // --- RETURN CLEANUP FOR SVELTE ---
  return () => {
    window.removeEventListener('resize', resizeHandler)
    cleanup()
  }
}
