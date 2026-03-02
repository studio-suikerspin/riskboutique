<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Label from '$lib/components/UI/Label.svelte'
	import Select from '$lib/components/UI/Select.svelte'
	import type { Content } from '@prismicio/client'
	import {
		PrismicRichText,
		type SliceComponentProps
	} from '@prismicio/svelte'
	import { Toaster, toast } from 'svelte-sonner'

	type Props = SliceComponentProps<Content.ContactBlockSlice>

	const { slice }: Props = $props()

	let loading = $state(false)

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault()
		const form = event.target as HTMLFormElement
		const formData = new FormData(form)

		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			phone: formData.get('phone'),
			message: formData.get('message'),
			subject: formData.get('subject')
		}

		loading = true

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			})

			if (!response.ok) {
				throw new Error('Failed to submit form')
			}

			toast.success('Message sent successfully!')
			form.reset()

			gtag('generate_lead', {
				currency: 'EUR',
				value: 0
			})
		} catch (error) {
			console.error(error)
			toast.error('Something went wrong. Please try again.')
		} finally {
			loading = false
		}
	}

	const paddingClass = $derived(() => {
		switch (slice.primary.section_padding) {
			case 'top':
				return 'block-padding-top'
			case 'bottom':
				return 'block-padding-bottom'
			case 'both':
				return 'block-padding'
			case 'none':
				return ''
			default:
				return ''
		}
	})
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="contact-block {paddingClass()}"
>
	<Toaster />
	<div class="contact-block__container container">
		<div class="contact-block__inner">
			<div class="content-wrap">
				<div class="content-wrap__group content-wrap__group-title">
					<Label>
						{slice.primary.label_text}
					</Label>

					<h1 class="h3 contact-title">
						{slice.primary.heading}
					</h1>

					<div class="contact-subtitle">
						<PrismicRichText field={slice.primary.subtitle} />
					</div>
				</div>

				<div class="content-wrap__group">
					<h4>Get in touch</h4>
					<div class="contact-group">
						<ul class="contact-methods">
							{#each slice.primary.contact_methods as item, index (index)}
								<li class="contact-methods__item">
									<strong>{item.label}:</strong>
									<PrismicRichText field={item.content} />
								</li>
							{/each}
						</ul>

						{#if slice.primary.phone_whatsapp.length}
							<div class="phone-contact">
								<div class="phone-contact__label">
									{slice.primary.phone_whatsapp[0]?.label}
								</div>
								<div class="phone-contact__number">
									{slice.primary.phone_whatsapp[0]?.phone}
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>

			<div class="contact-block__form-wrap">
				<div class="form-header">
					<h3 class="form-header__title h3">
						{slice.primary.form_heading}
					</h3>
					<div class="form-header__description">
						<PrismicRichText
							field={slice.primary.form_description}
						/>
					</div>
				</div>
				<form
					onsubmit={handleSubmit}
					class="contact-form"
				>
					<div class="contact-form__group">
						<label
							for="name"
							class="contact-form__label">Name</label
						>
						<input
							type="text"
							id="name"
							name="name"
							class="contact-form__input"
							placeholder="Your name"
							required
						/>
					</div>
					<div class="contact-form__group">
						<label
							for="email"
							class="contact-form__label">Email address</label
						>
						<input
							type="email"
							id="email"
							name="email"
							class="contact-form__input"
							placeholder="Your email"
							required
						/>
					</div>
					<div class="contact-form__group">
						<label
							for="phone"
							class="contact-form__label">Phone</label
						>
						<input
							type="tel"
							id="phone"
							name="phone"
							class="contact-form__input"
							placeholder="Your phone number"
							required
						/>
					</div>
					<div class="contact-form__group">
						<label
							for="subject"
							class="contact-form__label">Subject</label
						>
						<Select
							name="subject"
							classes="contact-form__input contact-form__select"
							placeholder="Pick a subject..."
						>
							{#each slice.primary.subject_options as { label }, index (index)}
								<option value={label}>{label}</option>
							{/each}
						</Select>
					</div>
					<div class="contact-form__group">
						<label
							for="message"
							class="contact-form__label">Message</label
						>
						<textarea
							id="message"
							name="message"
							class="contact-form__textarea"
							placeholder="Your message"
							required
						></textarea>
					</div>

					<div class="contact-form__button-wrap">
						<Button
							className="contact-form__button"
							variant="white"
							text={slice.primary.form_button_text || 'Submit'}
							icon="icon-arrow-right"
							type="submit"
							{loading}
						/>

						<div class="contact-form__footer-note">
							<PrismicRichText
								field={slice.primary.form_footer_note}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.contact-block {
		padding-top: 8rem;

		&__inner {
			display: flex;
			flex-flow: column;
			gap: 2.5rem;

			@media (min-width: 1024px) {
				gap: 5rem;
				flex-flow: row;
			}
		}

		.content-wrap {
			flex: 1;
			display: flex;
			flex-flow: column;
			gap: 2.5rem;

			@media (min-width: 1024px) {
				justify-content: space-between;
			}

			&__group {
				display: flex;
				flex-flow: column;
				gap: 1.5rem;

				&-title {
					@media (min-width: 568px) {
						max-width: 650px;
					}
				}
			}
		}

		.contact-subtitle {
			font-size: 1rem;
			font-weight: 500;
			line-height: 1.5;
			color: var(--color-dark-mode);
		}

		.contact-group {
			display: flex;
			flex-flow: column;
			gap: 1.5rem;

			font-weight: 500;

			@media (min-width: 1400px) {
				flex-flow: row;
				justify-content: space-between;
			}
		}

		.contact-methods {
			display: flex;
			flex-flow: column;
			gap: 1rem;

			&__item {
				display: flex;
				gap: 0.5rem;
				font-size: 1rem;

				strong {
					font-weight: 600;
				}
			}
		}

		&__form-wrap {
			flex: 1;
			padding-block: 2.5rem;
			padding-inline: 1.5rem;

			border-radius: 0.5rem;

			background: var(--color-dark-mode);
			color: var(--color-snow-white);

			display: flex;
			flex-flow: column;
			gap: 2.5rem;

			@media (min-width: 1024px) {
				padding-inline: 2.5rem;
			}

			.form-header {
				display: flex;
				flex-flow: column;
				gap: 1.5rem;
			}

			.contact-form {
				display: flex;
				flex-flow: column;
				gap: 1.5rem;

				&__group {
					display: flex;
					flex-flow: column;
					gap: 0.5rem;
				}

				&__label {
					font-size: 1.125rem;
					font-weight: 400;
				}

				&__input {
					padding-inline: 1rem;
					border-radius: 0.25rem;

					width: 100%;
					height: 3rem;

					background: rgba(249, 249, 248, 0.2);

					&:not(select) {
						padding-block: 1rem;
					}

					&::placeholder {
						color: rgba(249, 249, 248, 0.7);
						font-weight: 400;
						font-size: 1rem;
						line-height: 99%;
					}
				}

				&__select-wrap {
					position: relative;

					i {
						position: absolute;
						top: 50%;
						right: 0.75rem;
						translate: 0% -50%;
						rotate: 90deg;
					}
				}

				&__select {
					appearance: none;
					--webkit-appearance: none;
				}

				&__textarea {
					padding: 1rem;
					border-radius: 0.25rem;
					background: rgba(249, 249, 248, 0.2);
					resize: none;
					font-size: 1rem;

					&::placeholder {
						color: rgba(249, 249, 248, 0.7);
						font-weight: 400;
						font-size: 1rem;
						line-height: 99%;
						font-size: 16px;
					}
				}

				&__button-wrap {
					display: flex;
					flex-flow: column;
					gap: 1rem;
				}

				:global &__button {
					width: 100%;
				}

				&__footer-note {
					font-size: 1.125rem;
				}
			}
		}
	}
</style>
