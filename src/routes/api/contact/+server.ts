import { json } from '@sveltejs/kit'
import { Resend } from 'resend'
import { RESEND_API_KEY, RESEND_TEMPLATE_ID } from '$env/static/private'

const resend = new Resend(RESEND_API_KEY)

export async function POST({ request }) {
	const { name, email, phone, message } = await request.json()

    if (! name || ! email || ! phone || ! message) {
        return json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Risk Boutique <riskboutique@suikerspin.studio>',
            to: ['robin@suikerspin.studio'],
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
