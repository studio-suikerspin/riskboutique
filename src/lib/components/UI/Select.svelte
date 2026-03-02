<script lang="ts">
	let { options, placeholder, classes, name } = $props()

	let input: HTMLInputElement | null

	function buildCustomSelect(node) {
		const optionsWrap = node.querySelector('[data-custom-options]')

		options.forEach(({ label: option }) => {
			const button = `<button type="button" class="select-option" data-value="${option}"><span class="select-option__text">${option}</span></button>`
			optionsWrap.innerHTML += button
		})

		const selectOptions = document.querySelectorAll('.select-option')
		selectOptions.forEach((option) =>
			option.addEventListener('click', (e) => handleSelect(e))
		)
	}

	function toggleSelect(e) {
		const select = e.target.closest('.select')

		if (!select) return

		const currentStatus = select.dataset.selectToggleStatus

		select.setAttribute(
			'data-select-toggle-status',
			currentStatus === 'open' ? 'closed' : 'open'
		)
	}

	function handleSelect(e) {
		const selectWrap = e.target.closest('.select')

		if (!selectWrap) return

		input = selectWrap.querySelector('input')

		const selectedText = selectWrap.querySelector('[data-selected-text]')
		const selectedValue = e.target.innerText
		selectedText.innerText = selectedValue

		input.value = selectedValue
		selectWrap.setAttribute('data-select-status', 'selected')

		toggleSelect(e)
	}
</script>

<div
	class="select {classes}"
	data-select-toggle-status="closed"
	data-select-status="unselected"
	{@attach buildCustomSelect}
>
	<button
		class="select__trigger"
		type="button"
		onclick={(e) => toggleSelect(e)}
	>
		<span
			class="select__trigger-text"
			data-selected-text
		></span>
		<span class="select__trigger-placeholder">{placeholder}</span>
		<i class="select__trigger-icon icon-chevron"></i>
	</button>

	<div
		class="select__options"
		data-custom-options
	></div>

	<input {name} />
</div>

<style lang="scss">
	.select {
		position: relative;

		&__trigger {
			padding-inline: 1rem;
			border-radius: 0.25rem;
			width: 100%;
			height: 3rem;
			background: rgba(249, 249, 248, 0.2);

			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__trigger-placeholder {
			color: rgba(249, 249, 248, 0.7);
			font-weight: 400;
			font-size: 1rem;
			line-height: 99%;
		}

		&__trigger-text {
			display: none;
		}

		&__trigger-icon {
			rotate: 90deg;
		}

		&__options {
			pointer-events: none;
			opacity: 0;

			display: flex;
			flex-direction: column;
			background: rgb(58 61 64);
			border-radius: 0.25rem;
			width: 100%;

			transform: translateY(1rem);
			transition: all 150ms ease-out;

			position: absolute;
			top: calc(100% + 0.5rem);
			z-index: 2;
			box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);

			:global .select-option {
				display: flex;
				align-items: center;
				justify-content: flex-start;

				cursor: pointer;

				padding-inline: 1rem;
				padding-block: 0.75rem;

				&:hover {
					background: rgb(249 249 248 / 5%);
				}
			}
		}

		:global &[data-select-toggle-status='open'] {
			.select__options {
				opacity: 1;
				pointer-events: all;
				transform: translateY(0);

				transition: all 150ms ease-out;
			}

			.select__trigger-icon {
				rotate: 270deg;
			}
		}

		:global &[data-select-status='selected'] {
			.select__trigger-text {
				display: initial;
			}

			.select__trigger-placeholder {
				display: none;
			}
		}

		input {
			display: none;
		}
	}
</style>
