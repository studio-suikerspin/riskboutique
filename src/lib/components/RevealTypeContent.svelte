<!-- Usage -->
<!-- <RevealTypeContent text={slice.primary.content} />-->

<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { gsap } from '$lib/gsap';
	import { SplitText } from 'gsap/SplitText';

	type Props = {
		text: string;
	};

	const { text }: Props = $props();

	function revealType() {
		const container = document.querySelector('.section-reveal-type');
		const textToSplit = document.querySelector('.reveal-type-content');

		let split = SplitText.create(textToSplit, { type: 'words' });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: `top top+=${300}`, // Start when the top of the elment hits the top of the container + 100px
				end: `center top`, // End when the center of the element hits the top of the container
				scrub: true,
				markers: true
			}
		});

		tl.from(split.words, {
			color: 'rgba(0, 0, 0, 0.08)',
			stagger: 0.1
		});
	}

	onMount(() => {
		if (browser) {
			revealType();
		}
	});
</script>

<h3 class="reveal-type-content">{text}</h3>
