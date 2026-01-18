import { browser } from '$app/environment';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { CustomEase } from 'gsap/CustomEase';

if (browser) {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, CustomEase);
}

export { gsap, ScrollTrigger, ScrollSmoother, CustomEase };
