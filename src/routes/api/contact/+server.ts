import { json } from '@sveltejs/kit'
import { Resend } from 'resend'
import { RESEND_API_KEY, RESEND_TEMPLATE_ID } from '$env/static/private'
import { createClient } from '$lib/prismicio.js'

const resend = new Resend(RESEND_API_KEY)

export async function POST({ request, fetch }) {
	const { name, email, phone, message } = await request.json()

	if (!name || !email || !phone || !message) {
		return json(
			{ success: false, error: 'Missing required fields' },
			{ status: 400 }
		)
	}

	const client = createClient({ fetch })
	const siteSettings = await client.getSingle('site_settings')
	const mailTo = siteSettings.data.contact_form_mails.map((item) =>
		item.email?.toString()
	).filter((item) => item !== undefined)

	try {
		const { data, error } = await resend.emails.send({
			from: 'Risk Boutique <riskboutique@suikerspin.studio>',
			to: mailTo.length ? [...mailTo] : ['info@suikerspin.studio'],
			template: {
				id: RESEND_TEMPLATE_ID,
				variables: { name, email, phone, message }
			}
		})

		if (error) {
			console.log(error)
			return json({ success: false, error }, { status: 500 })
		}

		return json({ success: true, data })
	} catch (error) {
		return json({ success: false, error }, { status: 500 })
	}
}
