<script>
	import { gsap } from '$lib/gsap';
	import { onMount } from 'svelte';

	function initWelcomingWordsLoader() {
		const loadingContainer = document.querySelector('[data-loading-container]');
		if (!loadingContainer) return; // Stop animation when no [data-loading-words] is found

		const loadingWords = loadingContainer.querySelector('[data-loading-words]');
		const wordsTarget = loadingWords.querySelector('[data-loading-words-target]');
		const words = loadingWords
			.getAttribute('data-loading-words')
			.split(',')
			.map((w) => w.trim());

		const tl = gsap.timeline();

		tl.set(loadingWords, {
			yPercent: 50
		});

		tl.to(loadingWords, {
			opacity: 1,
			yPercent: 0,
			duration: 1,
			ease: 'Expo.easeInOut'
		});

		words.forEach((word) => {
			tl.call(
				() => {
					wordsTarget.textContent = word;
				},
				null,
				'+=0.15'
			);
		});

		tl.to(loadingWords, {
			opacity: 0,
			yPercent: -75,
			duration: 0.8,
			ease: 'Expo.easeIn'
		});

		tl.to(
			loadingContainer,
			{
				autoAlpha: 0,
				duration: 0.6,
				ease: 'Power1.easeInOut'
			},
			'+ -0.2'
		);
	}

	onMount(() => initWelcomingWordsLoader());
</script>

<div data-loading-container="" class="loading-container">
	<div class="loading-screen">
		<div
			data-loading-words="Hello, Bonjour, स्वागत हे, Ciao, Olá, おい, Hallå, Guten tag, Hallo"
			class="loading-words"
		>
			<div class="loading-words__dot"></div>
			<p data-loading-words-target="" class="loading-words__word">Hello</p>
		</div>
	</div>
</div>

<style>
	.loading-container {
		z-index: calc(var(--z-header) + 1);
		pointer-events: none;
		position: fixed;
		inset: 0;
		overflow: hidden;
	}

	.loading-screen {
		pointer-events: auto;
		color: #fff;
		background-color: #000;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
	}

	.loading-words {
		grid-column-gap: 2em;
		grid-row-gap: 2em;
		align-items: center;
		display: flex;
		opacity: 0;
	}

	.loading-words__dot {
		background-color: #fff;
		border-radius: 50%;
		width: 0.75em;
		height: 0.75em;
	}

	.loading-words__word {
		font-size: 4.5em;
		font-weight: 500;
		line-height: 1;
		margin: 0;
	}

	@media screen and (max-width: 767px) {
		.loading-words {
			font-size: 2.75vw;
		}
	}
</style>
