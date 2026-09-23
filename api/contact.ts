import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, name, email, phone, message, agreeTerms } = req.body || {};

    if (!email || !phone) {
      return res.status(400).json({ error: 'Email and Phone are required' });
    }

    console.log('--- NEW LEAD RECEIVED ---');
    console.log({
      name: `${firstName} ${name}`.trim(),
      email,
      phone,
      message,
      agreeTerms,
      receivedAt: new Date().toISOString()
    });

    // In production on Vercel, this can be hooked up to Resend, SendGrid, Telegram or Webhook:
    // e.g. await sendEmail(...)

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been received.'
    });
  } catch (error: any) {
    console.error('Contact handler error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
