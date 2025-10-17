import type { FAQItem } from './types';

export const faqs: FAQItem[] = [
	{
		question: 'How much does it cost to enter?',
		answer:
			'It’s $10 per racer when you register online ahead of race day. If you miss pre-registration it jumps to $50 at the Admin Tent on the morning, subject to available slots.',
	},
	{
		question: 'What safety gear is required?',
		answer:
			'Every driver must wear a full-face helmet, closed-in shoes, gloves and elbow pads. Scrutineering will check steering, braking and bodywork. Any exposed edges must be padded.',
	},
	{
		question: 'Can I race if I don’t have a team?',
		answer:
			'Absolutely. Independent racers are welcome—just make sure you have at least one adult support crew member on hand for staging and recovery.',
	},
	{
		question: 'Is the event free for spectators?',
		answer:
			'Yes! Bring the whānau. Vintage Weekend vibes include food trucks, coffee carts, DJs and commentary all day. Follow the signage from Taupo Quay for the best viewing berms.',
	},
	{
		question: 'How do I pay and submit my form?',
		answer:
			'Complete the signup form on this site. Once you submit, you’re redirected to a secure Stripe Payment Link to confirm the $10 entry. Your form details feed straight into our Google Sheets roster.',
	},
];

