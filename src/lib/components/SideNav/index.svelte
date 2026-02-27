<script>
	import { onMount } from 'svelte'
	import { gsap, CustomEase } from '$lib/gsap'

	import MenuLink from './MenuLink.svelte'
	import MenuLinkWithSubs from './MenuLinkWithSubs.svelte'
	import { PrismicLink } from '@prismicio/svelte'
	import { onNavigate } from '$app/navigation'

	let { menuItems, socials } = $props()

	function initSideNavWipeEffect() {
		let navWrap = document.querySelector('[data-sidenav-wrap]')
		let state = navWrap?.getAttribute('data-nav-state')
		let overlay = navWrap?.querySelector('[data-sidenav-overlay]')
		let menu = navWrap?.querySelector('[data-sidenav-menu]')
		let bgPanels = navWrap?.querySelectorAll('[data-sidenav-panel]')
		let menuToggles = document.querySelectorAll('[data-sidenav-toggle]')
		let menuLinks = navWrap?.querySelectorAll('[data-sidenav-link]')
		let fadeTargets = navWrap?.querySelectorAll('[data-sidenav-fade]')
		let menuButton = document.querySelector('[data-sidenav-button]')
		let menuHeader = document.querySelector('[data-sidenav-header]')
		let menuButtonIcon = menuButton?.querySelector('[data-sidenav-icon]')

		const lockBodyScroll = (isLocked) => {
			if (!document?.body) return
			document.body.style.overflow = isLocked ? 'hidden' : ''
			document.body.style.touchAction = isLocked ? 'none' : ''
		}

		let tl = gsap.timeline()

		const openNav = () => {
			navWrap.setAttribute('data-nav-state', 'open')
			lockBodyScroll(true)

			tl.clear()
				.set(navWrap, { display: 'block' })
				.set(menu, { xPercent: 0 }, '<')
				.fromTo(menuButtonIcon, { rotate: 90 }, { rotate: 0 }, '<')
				.fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, '<')
				.fromTo(
					bgPanels,
					{ xPercent: 101 },
					{ xPercent: 0, stagger: 0.12, duration: 0.575 },
					'<'
				)
				.fromTo(
					menuHeader,
					{ autoAlpha: 0 },
					{ autoAlpha: 1 },
					'-=0.25'
				)
				.fromTo(
					menuLinks,
					{ yPercent: 210, rotate: 10 },
					{ yPercent: 0, rotate: 0, stagger: 0.05 },
					'<+=0.10'
				)
				.fromTo(
					fadeTargets,
					{ autoAlpha: 0, yPercent: 50 },
					{ autoAlpha: 1, yPercent: 0, stagger: 0.04 },
					'<+=0.2'
				)
				.set(menuButtonIcon, { clearProps: 'transform' })

			navWrap.style.pointerEvents = 'all'
		}

		const closeNavBase = () => {
			navWrap.setAttribute('data-nav-state', 'closed')
			lockBodyScroll(false)

			tl.clear()
				.to(overlay, { autoAlpha: 0 })
				.to(menu, { xPercent: 120 }, '<')
				// .to(menuButtonTexts, { yPercent: 0 }, '<')
				.to(menuButtonIcon, { rotate: 0 }, '<')
				.to(menuHeader, { autoAlpha: 0 }, '<')
				.set(menuButtonIcon, { clearProps: 'transform' })
				.set(navWrap, { display: 'none' })
		}

		const closeNav = () => {
			const openSubmenus = navWrap?.querySelectorAll(
				'[data-submenu-state="open"]'
			)

			if (openSubmenus?.length) {
				openSubmenus.forEach((submenu) => {
					const label = submenu.getAttribute('data-submenu')
					if (label) closeSubmenu(label)
				})
			}

			closeNavBase()
		}

		// Toggle menu open / close depending on its current state
		menuToggles.forEach((toggle) => {
			toggle.addEventListener('click', () => {
				toggle.style.pointerEvents = 'none'

				state = navWrap.getAttribute('data-nav-state')
				if (state === 'open') {
					closeNav()
				} else {
					openNav()
				}

				toggle.style.pointerEvents = 'auto'
			})
		})

		// If menu is open, you can close it using the "escape" key
		document.addEventListener('keydown', (e) => {
			if (
				e.key === 'Escape' &&
				navWrap.getAttribute('data-nav-state') === 'open'
			) {
				closeNav()
			}
		})
	}

	const openSubmenu = (submenuLabel) => {
		const submenu = document.querySelector(
			`[data-submenu="${submenuLabel}"]`
		)

		if (!submenu) return

		const menuItems = submenu.querySelectorAll('[data-submenu-item]')

		const tl = gsap.timeline()

		submenu.style.pointerEvents = 'all'

		tl.clear()
			.fromTo(
				submenu,
				{ x: '100%' },
				{ x: '0%', stagger: 0.04 },
				'<+=0.2'
			)
			.fromTo(
				menuItems,
				{ yPercent: 210, rotate: 10 },
				{ yPercent: 0, rotate: 0, stagger: 0.05 },
				'<+=0.35'
			)

		submenu.setAttribute('data-submenu-state', 'open')
	}

	const closeSubmenu = (submenuLabel) => {
		const submenu = document.querySelector(
			`[data-submenu="${submenuLabel}"]`
		)

		if (!submenu) return

		const tl = gsap.timeline()
		tl.clear().to(submenu, { x: '100%' }, '<+=0.2')

		submenu.style.pointerEvents = 'none'

		submenu.setAttribute('data-submenu-state', 'closed')
	}

	function setHeightToViewportHeight(node) {
		const isDesktop = window.matchMedia('(min-width: 992px)').matches

		if (isDesktop) return

		if (window.visualViewport) {
			node.setAttribute(
				'style',
				`height: ${window.visualViewport.height}px`
			)
		}
	}

	onMount(() => {
		CustomEase.create('main', '0.65, 0.01, 0.05, 0.99')

		gsap.defaults({
			ease: 'main',
			duration: 0.7
		})

		initSideNavWipeEffect()
	})

	onNavigate(() => {
		const nav = document.querySelector('[data-nav-state]')
		const { navState } = nav.dataset

		if (navState === 'closed') return

		const openSubmenus = document.querySelectorAll(
			'[data-submenu-state="open"]'
		)
		openSubmenus.forEach((submenu) => {
			const label = submenu.getAttribute('data-submenu')
			setTimeout(() => closeSubmenu(label), 150)
		})

		const toggle = document.querySelector('[data-sidenav-button]')
		toggle?.dispatchEvent(new Event('click'))
	})
</script>

<div class="sidenav">
	<div
		data-sidenav-wrap=""
		data-nav-state="closed"
		class="sidenav__nav"
		{@attach setHeightToViewportHeight}
	>
		<div
			data-sidenav-overlay=""
			data-sidenav-toggle=""
			class="sidenav__overlay"
		></div>
		<nav
			data-sidenav-menu=""
			class="sidenav__menu"
		>
			<div class="sidenav__menu-bg">
				<div
					data-sidenav-panel=""
					class="sidenav__menu-bg-panel is--first"
				></div>
				<div
					data-sidenav-panel=""
					class="sidenav__menu-bg-panel is--second"
				></div>
				<div
					data-sidenav-panel=""
					class="sidenav__menu-bg-panel"
				></div>
			</div>
			<div class="sidenav__menu-inner">
				<header
					class="sidenav__header"
					data-sidenav-header=""
				>
					<button
						role="button"
						data-sidenav-toggle=""
						data-sidenav-button=""
						class="sidenav__button"
					>
						<div class="sidenav__button-text">
							<p
								data-sidenav-label=""
								class="sidenav__button-label"
							>
								close
							</p>
						</div>
						<div
							data-sidenav-icon=""
							class="sidenav__button-icon"
						>
							<i class="icon-close sidenav__button-icon-svg"></i>
						</div>
					</button>
				</header>

				<ul class="sidenav__menu-list">
					{#each menuItems as menuItem, index (index)}
						<li class="sidenav__menu-list-item">
							{#if menuItem.has_submenu}
								<MenuLinkWithSubs
									{menuItem}
									{openSubmenu}
								/>
							{:else}
								<MenuLink {menuItem} />
							{/if}
						</li>
					{/each}
				</ul>

				<div class="sidenav__menu-details">
					{#if socials.data.socials.length}
						<p
							data-sidenav-fade=""
							class="sidenav__button-label"
						>
							Socials
						</p>
						<div class="sidenav__menu-socials">
							{#each socials.data.socials as { social_link }, index (index)}
								<PrismicLink
									data-sidenav-fade=""
									field={social_link}
									class="sidenav__button-label social-icon"
								>
									<i class="icon-linkedin"></i>
								</PrismicLink>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</nav>

		{#each menuItems as menuItem, index (index)}
			{#if menuItem.has_submenu}
				<nav
					data-submenu={menuItem.label}
					data-submenu-state="closed"
					class="submenu"
				>
					<div class="submenu__inner">
						<header class="submenu__header">
							<button
								role="button"
								data-sidenav-toggle=""
								data-sidenav-button=""
								class="sidenav__button mobile"
							>
								<div class="sidenav__button-text">
									<p
										data-sidenav-label=""
										class="sidenav__button-label"
									>
										close
									</p>
								</div>
								<div
									data-sidenav-icon=""
									class="sidenav__button-icon"
								>
									<i
										class="icon-close sidenav__button-icon-svg"
									></i>
								</div>
							</button>
							<button
								data-submenu-toggle=""
								class="submenu__button"
								onclick={() => closeSubmenu(menuItem.label)}
							>
								<p class="label">back</p>
								<i class="icon icon-arrow-right"></i>
							</button>
						</header>

						<ul class="submenu__list">
							<li class="submenu__list-item submenu__label">
								<div class="submenu-item">
									<div
										class="h4"
										data-submenu-item
									>
										{menuItem.label}
									</div>
								</div>
							</li>
							{#each menuItem.submenu.data.submenu_item as submenuItem, index (index)}
								<li class="submenu__list-item">
									<PrismicLink
										field={submenuItem}
										class={['submenu-item']}
									>
										<div
											class="submenu-item__wrap"
											data-submenu-item
										>
											<p class="submenu-item__text">
												{submenuItem.text}
											</p>
										</div>
									</PrismicLink>
								</li>
							{/each}
						</ul>
					</div>
				</nav>
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
	.submenu {
		position: absolute;
		top: 0;
		right: 0;
		pointer-events: none;
		transform: translateX(100%);
		height: 100%;

		&__inner {
			width: 100vw;
			height: 100%;

			background: var(--color-snow-white);

			inset: 0%;

			display: flex;
			flex-direction: column;
			justify-content: center;

			@media (min-width: 768px) {
				width: 35em;
				border-top-left-radius: 1.25em;
				border-bottom-left-radius: 1.25em;
			}
		}

		&__header {
			z-index: 10;
			justify-content: space-between;
			align-items: center;
			display: flex;
			position: fixed;
			top: 1.5rem;
			left: 1.5rem;
			right: 1.5rem;

			@media (min-width: 768px) {
				justify-content: flex-end;
			}
		}

		&__button {
			display: flex;
			align-items: center;
			gap: 0.625rem;
			cursor: pointer;
			margin: -1em;
			padding: 1em;

			color: var(--color-dark-mode);

			& .label {
				font-size: 1.125rem;
			}

			& .icon {
				font-size: 1.5rem;
			}
		}

		&__list {
			display: flex;
			flex-direction: column;
		}

		&__label {
			padding-block: 0.5rem;
			color: var(--color-dark-mode);

			line-height: 1.4;
		}

		:global .submenu-item {
			display: flex;
			padding-block: 0.125rem;
			padding-inline: 1.5rem;
			color: var(--color-dark-mode);
			overflow: hidden;
			height: fit-content;

			&__wrap {
				display: flex;
				align-items: flex-start;
				gap: 0.5rem;
				padding-block: 0.5rem;
			}

			&__text {
				font-size: 1.125rem;
				transition: opacity 0.3s ease-in-out;

				&:hover {
					opacity: 0.75;
					transition: opacity 0.3s ease-in-out;
				}

				@media (min-width: 768px) {
					font-size: 1.5rem;
				}
			}

			&__eyebrow {
				font-size: 1rem;
				color: var(--color-aqua);
			}
		}
	}

	.sidenav {
		position: fixed;
		z-index: calc(var(--z-header) + 1);
		pointer-events: none;
	}

	.sidenav__header {
		z-index: 10;
		justify-content: flex-end;
		align-items: center;
		display: flex;
		position: fixed;
		top: 1.5rem;
		left: 1.5rem;
		right: 1.5rem;
	}

	.sidenav__button {
		z-index: 10;
		grid-column-gap: 0.625em;
		grid-row-gap: 0.625em;
		background-color: transparent;
		justify-content: flex-end;
		align-items: center;
		margin: -1em;
		padding: 1em;
		display: flex;
		border: none;
		cursor: pointer;
	}

	.sidenav__button-text {
		flex-flow: column;
		justify-content: flex-start;
		align-items: flex-end;
		height: fit-content;
		font-size: 1.125rem;
		display: flex;
		overflow: hidden;
	}

	.sidenav__button-icon {
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		transition: transform 0.4s cubic-bezier(0.65, 0.05, 0, 1);
		display: flex;
	}

	.sidenav__button-icon-svg {
		width: 100%;
	}

	.sidenav__button-label {
		color: var(--color-dark-mode);
		margin-top: 0;
		margin-bottom: 0;
		font-size: 1.125rem;
		line-height: 1.4;

		@media (min-width: 768px) {
			font-size: 1.125rem;
		}
	}

	.sidenav__nav {
		z-index: 9;
		width: 100%;
		height: 100vh;
		margin-left: auto;
		margin-right: auto;
		display: none;
		position: fixed;
		inset: 0%;
	}

	.sidenav__overlay {
		z-index: 0;
		cursor: pointer;
		background-color: #13131366;
		width: 100%;
		height: 100%;
		position: absolute;
		inset: 0%;
	}

	.sidenav__menu {
		grid-column-gap: 5em;
		grid-row-gap: 5em;
		flex-flow: column;
		justify-content: space-between;
		align-items: flex-start;
		width: 35em;
		height: 100%;
		margin-left: auto;
		padding-top: 6em;
		padding-bottom: 2em;
		position: relative;
		overflow: auto;
	}

	.sidenav__menu-bg {
		z-index: 0;
		position: absolute;
		inset: 0%;
	}

	.sidenav__menu-bg-panel {
		z-index: 0;
		background-color: var(--color-snow-white);
		border-top-left-radius: 1.25em;
		border-bottom-left-radius: 1.25em;
		position: absolute;
		inset: 0%;
	}

	.sidenav__menu-bg-panel.is--first {
		background-color: var(--color-aqua);
	}

	.sidenav__menu-bg-panel.is--second {
		background-color: var(--color-dark-mode);
	}

	.sidenav__menu-inner {
		z-index: 1;
		grid-column-gap: 5em;
		grid-row-gap: 5em;
		flex-flow: column;
		justify-content: space-between;
		align-items: flex-start;
		height: 100%;
		display: flex;
		position: relative;
		overflow: auto;
	}

	.sidenav__menu-list {
		flex-flow: column;
		width: 100%;
		margin-block: auto;
		padding-left: 0;
		list-style: none;
		display: flex;
		gap: 0.5rem;

		@media (min-width: 768px) {
			gap: unset;
		}
	}

	.sidenav__menu-list-item {
		margin-top: 0;
		margin-bottom: 0;
		position: relative;
		overflow: hidden;

		@media (min-width: 768px) {
			height: 4rem;
		}
	}

	.sidenav :global .link-item {
		display: flex;
		align-items: center;
		padding-inline: 1.5rem;
		// transition: opacity 0.3s ease-in-out;

		&__heading {
			transition: opacity 0.3s ease-in-out;
		}

		&__heading:hover {
			opacity: 0.75;
			transition: opacity 0.3s ease-in-out;
		}

		width: 100%;
	}

	.sidenav__menu-details {
		grid-column-gap: 1.25em;
		grid-row-gap: 1.25em;
		flex-flow: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding-inline: 1.5rem;
		display: flex;

		.sidenav__button-label {
			font-size: 1rem;

			@media (min-width: 768px) {
				font-size: 1.125rem;
			}
		}
	}

	.sidenav__menu-socials {
		grid-column-gap: 1.5em;
		grid-row-gap: 1.5em;
		flex-flow: row;
		display: flex;

		a {
			transition: opacity 0.3s ease-in-out;
		}

		a:hover {
			opacity: 0.75;
			transition: opacity 0.3s ease-in-out;
		}

		:global .social-icon {
			display: flex;
			align-items: center;
			justify-content: center;

			background: var(--color-aqua);
			color: var(--color-snow-white);
			width: 36px;
			height: 36px;
			border-radius: 50%;
		}
	}

	.noscript {
		pointer-events: none;
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
	}

	@media screen and (max-width: 767px) {
		.sidenav__menu-socials {
			grid-column-gap: 1em;
			grid-row-gap: 1em;
		}

		.sidenav__menu-bg-panel {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		.sidenav__menu {
			width: 100%;
		}

		.sidenav__menu-link-heading {
			font-size: 4em;
		}
	}

	.sidenav__menu-inner .sidenav__header .sidenav__button-icon {
		transition: 0.3s ease all;
	}

	.sidenav__menu-inner
		.sidenav__header
		.sidenav__button:hover
		.sidenav__button-icon {
		transform: rotate(90deg);
	}

	.sidenav__button.mobile {
		display: flex;

		@media (min-width: 768px) {
			display: none;
		}
	}
</style>
