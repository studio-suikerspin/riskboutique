import { browser } from '$app/environment';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { CustomEase } from 'gsap/CustomEase';
import { SplitText } from 'gsap/SplitText';

if (browser) {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, CustomEase, SplitText);
}

export { gsap, ScrollTrigger, ScrollSmoother, CustomEase, SplitText };
