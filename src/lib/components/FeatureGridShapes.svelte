<script lang="ts">

	type Props = {
		shape: string
	}

	const { shape }: Props = $props()
</script>

<style>
	.svg-animate-stacking-squares rect {
		animation: floatStack 3s ease-in-out infinite;
	}
	.svg-animate-stacking-squares rect:nth-child(1) { animation-delay: 0s; }
	.svg-animate-stacking-squares rect:nth-child(2) { animation-delay: 0.15s; }
	.svg-animate-stacking-squares rect:nth-child(3) { animation-delay: 0.3s; }
	.svg-animate-stacking-squares rect:nth-child(4) { animation-delay: 0.45s; }
	.svg-animate-stacking-squares rect:nth-child(5) { animation-delay: 0.6s; }

	@keyframes floatStack {
		0%, 100% { opacity: 0.7; }
		50% { opacity: 1; }
	}

	.svg-animate-union {
		animation: pulseUnion 3.5s ease-in-out infinite;
	}

	@keyframes pulseUnion {
		0%, 100% { 
			opacity: 0.75; 
			filter: blur(0px);
		}
		50% { 
			opacity: 1; 
			filter: blur(0.3px);
		}
	}

	.svg-animate-circles path {
		animation: ripple 3.5s ease-in-out infinite;
	}
	.svg-animate-circles path:nth-child(1) { animation-delay: 0s; }
	.svg-animate-circles path:nth-child(2) { animation-delay: 0.08s; }
	.svg-animate-circles path:nth-child(3) { animation-delay: 0.16s; }
	.svg-animate-circles path:nth-child(4) { animation-delay: 0.24s; }
	.svg-animate-circles path:nth-child(5) { animation-delay: 0.32s; }
	.svg-animate-circles path:nth-child(6) { animation-delay: 0.4s; }
	.svg-animate-circles path:nth-child(7) { animation-delay: 0.48s; }
	.svg-animate-circles path:nth-child(8) { animation-delay: 0.56s; }
	.svg-animate-circles path:nth-child(9) { animation-delay: 0.64s; }
	.svg-animate-circles path:nth-child(10) { animation-delay: 0.72s; }
	.svg-animate-circles path:nth-child(11) { animation-delay: 0.8s; }
	.svg-animate-circles path:nth-child(12) { animation-delay: 0.88s; }
	.svg-animate-circles path:nth-child(13) { animation-delay: 0.96s; }
	.svg-animate-circles path:nth-child(14) { animation-delay: 1.04s; }
	.svg-animate-circles path:nth-child(15) { animation-delay: 1.12s; }

	@keyframes ripple {
		0%, 100% { 
			opacity: 0.3; 
			stroke-width: 0.4; 
		}
		50% { 
			opacity: 1; 
			stroke-width: 0.9; 
		}
	}

	.svg-animate-open-squares {
		animation: rotate3d 6s ease-in-out infinite;
	}

	.svg-animate-open-squares path {
		animation: pathPulse 2.5s ease-in-out infinite;
	}
	.svg-animate-open-squares path:nth-child(1) { animation-delay: 0s; }
	.svg-animate-open-squares path:nth-child(2) { animation-delay: 0.1s; }
	.svg-animate-open-squares path:nth-child(3) { animation-delay: 0.2s; }
	.svg-animate-open-squares path:nth-child(4) { animation-delay: 0.3s; }
	.svg-animate-open-squares path:nth-child(5) { animation-delay: 0.4s; }
	.svg-animate-open-squares path:nth-child(6) { animation-delay: 0.5s; }

	@keyframes rotate3d {
		0%, 100% { 
			filter: brightness(1);
		}
		50% { 
			filter: brightness(1.15);
		}
	}

	@keyframes pathPulse {
		0%, 100% { opacity: 0.7; }
		50% { opacity: 1; }
	}
</style>

{#if shape === 'StackingSquares'}
	<svg class="svg-animate-stacking-squares" xmlns="http://www.w3.org/2000/svg" width="70" height="72" viewBox="0 0 70 72" fill="none">
<rect width="40" height="40" transform="matrix(0.866025 0.5 -0.866025 0.5 34.6411 32)" fill="url(#paint0_linear_318_183)"/>
<rect width="40" height="40" transform="matrix(0.866025 0.5 -0.866025 0.5 34.6411 24)" fill="url(#paint1_linear_318_183)"/>
<rect width="40" height="40" transform="matrix(0.866025 0.5 -0.866025 0.5 34.6411 16)" fill="url(#paint2_linear_318_183)"/>
<rect width="40" height="40" transform="matrix(0.866025 0.5 -0.866025 0.5 34.6411 8)" fill="url(#paint3_linear_318_183)"/>
<rect width="40" height="40" transform="matrix(0.866025 0.5 -0.866025 0.5 34.6411 0)" fill="url(#paint4_linear_318_183)"/>
<defs>
<linearGradient id="paint0_linear_318_183" x1="44.7073" y1="44.2927" x2="8.70727" y2="44.2927" gradientUnits="userSpaceOnUse">
<stop stop-color="#F7F7F7" stop-opacity="0.85"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint1_linear_318_183" x1="44.2073" y1="43.7927" x2="2.57054" y2="45.4557" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint2_linear_318_183" x1="43.2073" y1="42.7927" x2="2.57041" y2="44.4541" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint3_linear_318_183" x1="44.1299" y1="44.8701" x2="1.41849" y2="45.4397" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint4_linear_318_183" x1="40.2073" y1="39.7927" x2="-0.0041671" y2="40.3619" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
</defs>
	</svg>

	{:else if shape === 'UnionShape'}
	<svg class="svg-animate-union" xmlns="http://www.w3.org/2000/svg" width="64" height="49" viewBox="0 0 64 49" fill="none">
<path d="M16 17V16C16 7.16344 23.1634 0 32 0C40.8366 0 48 7.16344 48 16V17C56.8366 17 64 24.1634 64 33C64 41.8366 56.8366 49 48 49H16C7.16344 49 0 41.8366 0 33C0 24.1634 7.16344 17 16 17Z" fill="url(#paint0_linear_318_192)"/>
<defs>
<linearGradient id="paint0_linear_318_192" x1="25" y1="3.10192e-07" x2="38" y2="51.5" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
</defs>
	</svg>

	{:else if shape === 'StackingCircles'}
	<svg class="svg-animate-circles" xmlns="http://www.w3.org/2000/svg" width="72" height="64" viewBox="0 0 72 64" fill="none">
<path d="M36 0.25C45.9107 0.25 54.8706 2.25952 61.3438 5.49609C67.8319 8.74016 71.75 13.1751 71.75 18C71.75 22.8249 67.8319 27.2598 61.3438 30.5039C54.8706 33.7405 45.9107 35.75 36 35.75C26.0893 35.75 17.1294 33.7405 10.6562 30.5039C4.16811 27.2598 0.25 22.8249 0.25 18C0.25 13.1751 4.16811 8.74016 10.6562 5.49609C17.1294 2.25952 26.0893 0.25 36 0.25Z" stroke="url(#paint0_linear_318_196)" stroke-width="0.5"/>
<path d="M36 2.25C45.9107 2.25 54.8706 4.25952 61.3438 7.49609C67.8319 10.7402 71.75 15.1751 71.75 20C71.75 24.8249 67.8319 29.2598 61.3438 32.5039C54.8706 35.7405 45.9107 37.75 36 37.75C26.0893 37.75 17.1294 35.7405 10.6562 32.5039C4.16811 29.2598 0.25 24.8249 0.25 20C0.25 15.1751 4.16811 10.7402 10.6562 7.49609C17.1294 4.25952 26.0893 2.25 36 2.25Z" stroke="url(#paint1_linear_318_196)" stroke-width="0.5"/>
<path d="M36 4.25C45.9107 4.25 54.8706 6.25952 61.3438 9.49609C67.8319 12.7402 71.75 17.1751 71.75 22C71.75 26.8249 67.8319 31.2598 61.3438 34.5039C54.8706 37.7405 45.9107 39.75 36 39.75C26.0893 39.75 17.1294 37.7405 10.6562 34.5039C4.16811 31.2598 0.25 26.8249 0.25 22C0.25 17.1751 4.16811 12.7402 10.6562 9.49609C17.1294 6.25952 26.0893 4.25 36 4.25Z" stroke="url(#paint2_linear_318_196)" stroke-width="0.5"/>
<path d="M36 6.25C45.9107 6.25 54.8706 8.25952 61.3438 11.4961C67.8319 14.7402 71.75 19.1751 71.75 24C71.75 28.8249 67.8319 33.2598 61.3438 36.5039C54.8706 39.7405 45.9107 41.75 36 41.75C26.0893 41.75 17.1294 39.7405 10.6562 36.5039C4.16811 33.2598 0.25 28.8249 0.25 24C0.25 19.1751 4.16811 14.7402 10.6562 11.4961C17.1294 8.25952 26.0893 6.25 36 6.25Z" stroke="url(#paint3_linear_318_196)" stroke-width="0.5"/>
<path d="M36 8.25C45.9107 8.25 54.8706 10.2595 61.3438 13.4961C67.8319 16.7402 71.75 21.1751 71.75 26C71.75 30.8249 67.8319 35.2598 61.3438 38.5039C54.8706 41.7405 45.9107 43.75 36 43.75C26.0893 43.75 17.1294 41.7405 10.6562 38.5039C4.16811 35.2598 0.25 30.8249 0.25 26C0.25 21.1751 4.16811 16.7402 10.6562 13.4961C17.1294 10.2595 26.0893 8.25 36 8.25Z" stroke="url(#paint4_linear_318_196)" stroke-width="0.5"/>
<path d="M36 10.25C45.9107 10.25 54.8706 12.2595 61.3438 15.4961C67.8319 18.7402 71.75 23.1751 71.75 28C71.75 32.8249 67.8319 37.2598 61.3438 40.5039C54.8706 43.7405 45.9107 45.75 36 45.75C26.0893 45.75 17.1294 43.7405 10.6562 40.5039C4.16811 37.2598 0.25 32.8249 0.25 28C0.25 23.1751 4.16811 18.7402 10.6562 15.4961C17.1294 12.2595 26.0893 10.25 36 10.25Z" stroke="url(#paint5_linear_318_196)" stroke-width="0.5"/>
<path d="M36 12.25C45.9107 12.25 54.8706 14.2595 61.3438 17.4961C67.8319 20.7402 71.75 25.1751 71.75 30C71.75 34.8249 67.8319 39.2598 61.3438 42.5039C54.8706 45.7405 45.9107 47.75 36 47.75C26.0893 47.75 17.1294 45.7405 10.6562 42.5039C4.16811 39.2598 0.25 34.8249 0.25 30C0.25 25.1751 4.16811 20.7402 10.6562 17.4961C17.1294 14.2595 26.0893 12.25 36 12.25Z" stroke="url(#paint6_linear_318_196)" stroke-width="0.5"/>
<path d="M36 14.25C45.9107 14.25 54.8706 16.2595 61.3438 19.4961C67.8319 22.7402 71.75 27.1751 71.75 32C71.75 36.8249 67.8319 41.2598 61.3438 44.5039C54.8706 47.7405 45.9107 49.75 36 49.75C26.0893 49.75 17.1294 47.7405 10.6562 44.5039C4.16811 41.2598 0.25 36.8249 0.25 32C0.25 27.1751 4.16811 22.7402 10.6562 19.4961C17.1294 16.2595 26.0893 14.25 36 14.25Z" stroke="url(#paint7_linear_318_196)" stroke-width="0.5"/>
<path d="M36 16.25C45.9107 16.25 54.8706 18.2595 61.3438 21.4961C67.8319 24.7402 71.75 29.1751 71.75 34C71.75 38.8249 67.8319 43.2598 61.3438 46.5039C54.8706 49.7405 45.9107 51.75 36 51.75C26.0893 51.75 17.1294 49.7405 10.6562 46.5039C4.16811 43.2598 0.25 38.8249 0.25 34C0.25 29.1751 4.16811 24.7402 10.6562 21.4961C17.1294 18.2595 26.0893 16.25 36 16.25Z" stroke="url(#paint8_linear_318_196)" stroke-width="0.5"/>
<path d="M36 18.25C45.9107 18.25 54.8706 20.2595 61.3438 23.4961C67.8319 26.7402 71.75 31.1751 71.75 36C71.75 40.8249 67.8319 45.2598 61.3438 48.5039C54.8706 51.7405 45.9107 53.75 36 53.75C26.0893 53.75 17.1294 51.7405 10.6562 48.5039C4.16811 45.2598 0.25 40.8249 0.25 36C0.25 31.1751 4.16811 26.7402 10.6562 23.4961C17.1294 20.2595 26.0893 18.25 36 18.25Z" stroke="url(#paint9_linear_318_196)" stroke-width="0.5"/>
<path d="M36 20.25C45.9107 20.25 54.8706 22.2595 61.3438 25.4961C67.8319 28.7402 71.75 33.1751 71.75 38C71.75 42.8249 67.8319 47.2598 61.3438 50.5039C54.8706 53.7405 45.9107 55.75 36 55.75C26.0893 55.75 17.1294 53.7405 10.6562 50.5039C4.16811 47.2598 0.25 42.8249 0.25 38C0.25 33.1751 4.16811 28.7402 10.6562 25.4961C17.1294 22.2595 26.0893 20.25 36 20.25Z" stroke="url(#paint10_linear_318_196)" stroke-width="0.5"/>
<path d="M36 22.25C45.9107 22.25 54.8706 24.2595 61.3438 27.4961C67.8319 30.7402 71.75 35.1751 71.75 40C71.75 44.8249 67.8319 49.2598 61.3438 52.5039C54.8706 55.7405 45.9107 57.75 36 57.75C26.0893 57.75 17.1294 55.7405 10.6562 52.5039C4.16811 49.2598 0.25 44.8249 0.25 40C0.25 35.1751 4.16811 30.7402 10.6562 27.4961C17.1294 24.2595 26.0893 22.25 36 22.25Z" stroke="url(#paint11_linear_318_196)" stroke-width="0.5"/>
<path d="M36 24.25C45.9107 24.25 54.8706 26.2595 61.3438 29.4961C67.8319 32.7402 71.75 37.1751 71.75 42C71.75 46.8249 67.8319 51.2598 61.3438 54.5039C54.8706 57.7405 45.9107 59.75 36 59.75C26.0893 59.75 17.1294 57.7405 10.6562 54.5039C4.16811 51.2598 0.25 46.8249 0.25 42C0.25 37.1751 4.16811 32.7402 10.6562 29.4961C17.1294 26.2595 26.0893 24.25 36 24.25Z" stroke="url(#paint12_linear_318_196)" stroke-width="0.5"/>
<path d="M36 26.25C45.9107 26.25 54.8706 28.2595 61.3438 31.4961C67.8319 34.7402 71.75 39.1751 71.75 44C71.75 48.8249 67.8319 53.2598 61.3438 56.5039C54.8706 59.7405 45.9107 61.75 36 61.75C26.0893 61.75 17.1294 59.7405 10.6562 56.5039C4.16811 53.2598 0.25 48.8249 0.25 44C0.25 39.1751 4.16811 34.7402 10.6562 31.4961C17.1294 28.2595 26.0893 26.25 36 26.25Z" stroke="url(#paint13_linear_318_196)" stroke-width="0.5"/>
<path d="M36 28.25C45.9107 28.25 54.8706 30.2595 61.3438 33.4961C67.8319 36.7402 71.75 41.1751 71.75 46C71.75 50.8249 67.8319 55.2598 61.3438 58.5039C54.8706 61.7405 45.9107 63.75 36 63.75C26.0893 63.75 17.1294 61.7405 10.6562 58.5039C4.16811 55.2598 0.25 50.8249 0.25 46C0.25 41.1751 4.16811 36.7402 10.6562 33.4961C17.1294 30.2595 26.0893 28.25 36 28.25Z" stroke="url(#paint14_linear_318_196)" stroke-width="0.5"/>
<defs>
<linearGradient id="paint0_linear_318_196" x1="36" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint1_linear_318_196" x1="36" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint2_linear_318_196" x1="36" y1="4" x2="36" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint3_linear_318_196" x1="36" y1="6" x2="36" y2="42" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint4_linear_318_196" x1="36" y1="8" x2="36" y2="44" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint5_linear_318_196" x1="36" y1="10" x2="36" y2="46" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint6_linear_318_196" x1="36" y1="12" x2="36" y2="48" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint7_linear_318_196" x1="36" y1="14" x2="36" y2="50" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint8_linear_318_196" x1="36" y1="16" x2="36" y2="52" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint9_linear_318_196" x1="36" y1="18" x2="36" y2="54" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint10_linear_318_196" x1="36" y1="20" x2="36" y2="56" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint11_linear_318_196" x1="36" y1="22" x2="36" y2="58" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint12_linear_318_196" x1="36" y1="24" x2="36" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint13_linear_318_196" x1="36" y1="26" x2="36" y2="62" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint14_linear_318_196" x1="36" y1="28" x2="36" y2="64" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
</defs>
</svg>
	{:else if shape === 'StackingOpenSquares'}
<svg class="svg-animate-open-squares" xmlns="http://www.w3.org/2000/svg" width="74" height="84" viewBox="0 0 74 84" fill="none">
<path d="M0 61.667L37 40.2459L37 0.000326157L-8.86631e-07 21.4214L0 61.667Z" fill="url(#paint0_linear_318_215)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37 36.3512L37 37.6494L-5.7202e-08 59.0705L-8.5803e-08 57.7723L37 36.3512ZM37 35.053L-1.14404e-07 56.474L-1.43005e-07 55.1758L37 33.7547L37 35.053ZM-2.00207e-07 52.5793L-1.71606e-07 53.8775L37 32.4565L37 31.1582L-2.00207e-07 52.5793ZM-2.28808e-07 51.281L-2.57409e-07 49.9828L37 28.5617L37 29.86L-2.28808e-07 51.281ZM-3.14611e-07 47.3863L-2.8601e-07 48.6845L37 27.2635L37 25.9652L-3.14611e-07 47.3863ZM-3.43212e-07 46.088L-3.71813e-07 44.7898L37 23.3687L37 24.667L-3.43212e-07 46.088ZM-4.29015e-07 42.1933L-4.00414e-07 43.4916L37 22.0705L37 20.7723L-4.29015e-07 42.1933ZM-4.57616e-07 40.8951L-4.86217e-07 39.5968L37 18.1758L37 19.474L-4.57616e-07 40.8951ZM-5.43419e-07 37.0003L-5.14818e-07 38.2986L37 16.8775L37 15.5793L-5.43419e-07 37.0003ZM-5.7202e-07 35.7021L-6.00621e-07 34.4038L37 12.9828L37 14.281L-5.7202e-07 35.7021ZM-6.57823e-07 31.8073L-6.29222e-07 33.1056L37 11.6845L37 10.3863L-6.57823e-07 31.8073ZM-6.86424e-07 30.5091L-7.15025e-07 29.2108L37 7.7898L37 9.08805L-6.86424e-07 30.5091ZM-7.72227e-07 26.6144L-7.43626e-07 27.9126L37 6.49155L37 5.19331L-7.72227e-07 26.6144ZM-8.00828e-07 25.3161L-8.29429e-07 24.0179L37 2.59682L37 3.89506L-8.00828e-07 25.3161ZM-8.86631e-07 21.4214L-8.5803e-07 22.7196L37 1.29857L37 0.000326157L-8.86631e-07 21.4214ZM37 40.2459L37 38.9477L-2.8601e-08 60.3687L0 61.667L37 40.2459Z" fill="url(#paint1_linear_318_215)"/>
<path d="M37 40.2461L74 61.6671L74 21.4215L37 0.000492096L37 40.2461Z" fill="url(#paint2_linear_318_215)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M74 57.7724L74 59.0706L37 37.6496L37 36.3514L74 57.7724ZM74 56.4742L37 35.0531L37 33.7549L74 55.1759L74 56.4742ZM37 31.1584L37 32.4566L74 53.8777L74 52.5794L37 31.1584ZM37 29.8601L37 28.5619L74 49.9829L74 51.2812L37 29.8601ZM37 25.9654L37 27.2636L74 48.6847L74 47.3864L37 25.9654ZM37 24.6672L37 23.3689L74 44.7899L74 46.0882L37 24.6672ZM37 20.7724L37 22.0707L74 43.4917L74 42.1935L37 20.7724ZM37 19.4742L37 18.1759L74 39.597L74 40.8952L37 19.4742ZM37 15.5794L37 16.8777L74 38.2987L74 37.0005L37 15.5794ZM37 14.2812L37 12.9829L74 34.404L74 35.7022L37 14.2812ZM37 10.3865L37 11.6847L74 33.1057L74 31.8075L37 10.3865ZM37 9.08821L37 7.78996L74 29.211L74 30.5092L37 9.08821ZM37 5.19347L37 6.49172L74 27.9128L74 26.6145L37 5.19347ZM37 3.89523L37 2.59698L74 24.018L74 25.3163L37 3.89523ZM37 0.000492112L37 1.29874L74 22.7198L74 21.4215L37 0.000492112ZM74 61.6671L74 60.3689L37 38.9479L37 40.2461L74 61.6671Z" fill="url(#paint3_linear_318_215)"/>
<path d="M0 21.4219L37 42.8429L37 83.0885L-8.86631e-07 61.6675L0 21.4219Z" fill="url(#paint4_linear_318_215)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37 46.7377L37 45.4394L-5.7202e-08 24.0184L-8.5803e-08 25.3166L37 46.7377ZM37 48.0359L-1.14404e-07 26.6149L-1.43005e-07 27.9131L37 49.3342L37 48.0359ZM-2.00207e-07 30.5096L-1.71606e-07 29.2113L37 50.6324L37 51.9306L-2.00207e-07 30.5096ZM-2.28808e-07 31.8078L-2.57409e-07 33.1061L37 54.5271L37 53.2289L-2.28808e-07 31.8078ZM-3.14611e-07 35.7026L-2.8601e-07 34.4043L37 55.8254L37 57.1236L-3.14611e-07 35.7026ZM-3.43212e-07 37.0008L-3.71813e-07 38.2991L37 59.7201L37 58.4219L-3.43212e-07 37.0008ZM-4.29015e-07 40.8956L-4.00414e-07 39.5973L37 61.0184L37 62.3166L-4.29015e-07 40.8956ZM-4.57616e-07 42.1938L-4.86217e-07 43.4921L37 64.9131L37 63.6149L-4.57616e-07 42.1938ZM-5.43419e-07 46.0885L-5.14818e-07 44.7903L37 66.2113L37 67.5096L-5.43419e-07 46.0885ZM-5.7202e-07 47.3868L-6.00621e-07 48.685L37 70.1061L37 68.8078L-5.7202e-07 47.3868ZM-6.57823e-07 51.2815L-6.29222e-07 49.9833L37 71.4043L37 72.7026L-6.57823e-07 51.2815ZM-6.86424e-07 52.5798L-7.15025e-07 53.878L37 75.2991L37 74.0008L-6.86424e-07 52.5798ZM-7.72227e-07 56.4745L-7.43626e-07 55.1763L37 76.5973L37 77.8956L-7.72227e-07 56.4745ZM-8.00828e-07 57.7728L-8.29429e-07 59.071L37 80.4921L37 79.1938L-8.00828e-07 57.7728ZM-8.86631e-07 61.6675L-8.5803e-07 60.3692L37 81.7903L37 83.0885L-8.86631e-07 61.6675ZM37 42.8429L37 44.1412L-2.8601e-08 22.7201L0 21.4219L37 42.8429Z" fill="url(#paint5_linear_318_215)"/>
<path d="M37 42.8428L74 21.4217L74 61.6674L37 83.0884L37 42.8428Z" fill="url(#paint6_linear_318_215)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M74 25.3165L74 24.0182L37 45.4393L37 46.7375L74 25.3165ZM74 26.6147L37 48.0357L37 49.334L74 27.913L74 26.6147ZM37 51.9305L37 50.6322L74 29.2112L74 30.5095L37 51.9305ZM37 53.2287L37 54.527L74 33.1059L74 31.8077L37 53.2287ZM37 57.1235L37 55.8252L74 34.4042L74 35.7024L37 57.1235ZM37 58.4217L37 59.72L74 38.2989L74 37.0007L37 58.4217ZM37 62.3164L37 61.0182L74 39.5972L74 40.8954L37 62.3164ZM37 63.6147L37 64.9129L74 43.4919L74 42.1937L37 63.6147ZM37 67.5094L37 66.2112L74 44.7902L74 46.0884L37 67.5094ZM37 68.8077L37 70.1059L74 48.6849L74 47.3866L37 68.8077ZM37 72.7024L37 71.4042L74 49.9831L74 51.2814L37 72.7024ZM37 74.0007L37 75.2989L74 53.8779L74 52.5796L37 74.0007ZM37 77.8954L37 76.5971L74 55.1761L74 56.4744L37 77.8954ZM37 79.1936L37 80.4919L74 59.0709L74 57.7726L37 79.1936ZM37 83.0884L37 81.7901L74 60.3691L74 61.6674L37 83.0884ZM74 21.4217L74 22.72L37 44.141L37 42.8428L74 21.4217Z" fill="url(#paint7_linear_318_215)"/>
<defs>
<linearGradient id="paint0_linear_318_215" x1="18.5" y1="50.986" x2="1.04755" y2="20.7575" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint1_linear_318_215" x1="30.8333" y1="49.6582" x2="-2.88796" y2="16.5483" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#181818" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_318_215" x1="40.2456" y1="42.1934" x2="60.4052" y2="16.8326" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint3_linear_318_215" x1="37.6491" y1="43.1671" x2="70.2535" y2="18.1755" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#181818" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_318_215" x1="8.5" y1="25.501" x2="-4.02323" y2="75.7707" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint5_linear_318_215" x1="9" y1="27.501" x2="-3.32012" y2="65.2945" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint6_linear_318_215" x1="43" y1="42.0007" x2="73.2673" y2="48.5259" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
<linearGradient id="paint7_linear_318_215" x1="41" y1="43.5007" x2="81.7248" y2="46.4882" gradientUnits="userSpaceOnUse">
<stop stop-color="#0E4F63"/>
<stop offset="1" stop-color="#0E4F63"/>
</linearGradient>
</defs>
</svg>
{/if}