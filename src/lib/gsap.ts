import { browser } from '$app/environment'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { CustomEase } from 'gsap/CustomEase'
import { SplitText } from 'gsap/dist/SplitText'
import { InertiaPlugin } from 'gsap/InertiaPlugin'

if (browser) {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, CustomEase, SplitText, InertiaPlugin)
}

export { gsap, ScrollTrigger, ScrollSmoother, CustomEase, SplitText, IntertiaPlugin }
