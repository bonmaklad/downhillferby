import type { EventInfo } from './types';

export const eventInfo: EventInfo = {
	name: 'PlumberDan Soap Box Derby 2026',
	tagline: 'Build bold. Race hard. Rule Drews Ave Hill.',
	date: 'Monday 20 January 2026',
	time: 'Racing from 9:00 AM',
	location: 'Drews Ave Hill',
	address: 'Drews Avenue, Whanganui, New Zealand',
	description:
		'Fuel your gravity racer, round up your pit crew, and be part of Vintage Weekend’s loudest spectacle. The PlumberDan Soap Box Derby is back with tighter turns, new categories, and bigger prizes.',
	countdownAnchor: '2026-01-20T09:00:00+13:00',
	signupUrlPlaceholder: 'https://buy.stripe.com/your-live-payment-link',
	schedule: [
		{ label: 'Pit Area Opens', time: '7:30 AM', description: 'Pukenamu Queens Park pit area access for teams.' },
		{ label: 'Registration & Scrutineering', time: '7:45 AM', description: 'Check in, kart inspection & driver weigh-in.' },
		{ label: 'Staff & Volunteer Briefing', time: '8:00 AM', description: 'Admin tent briefing for all crew.' },
		{
			label: 'Competitor Briefing',
			time: '8:45 AM',
			description: 'Mandatory driver safety briefing and final run order.',
		},
		{ label: 'Race Start', time: '9:00 AM', description: 'Heats begin from the top of Drews Ave Hill.' },
		{ label: 'Lunch Intermission', time: '12:00 PM', description: 'Food trucks, coffee carts, JJ Roofing Running of the Balls.' },
		{ label: 'Heats Resume', time: '1:00 PM', description: 'Semi-finals and repechage runs.' },
		{ label: 'King of the Hill Finals', time: '1:45 PM', description: 'Fastest combined times battle for the crown.' },
		{ label: 'Prizegiving', time: '3:00 PM', description: 'Trophies, awards, and sponsor spotlights.' },
	],
	prizes: [
		{
			name: 'King of the Hill',
			description: 'Fastest overall time down Drews Ave wins the crown and trophy.',
			icon: '🏁',
		},
		{
			name: 'People’s Choice',
			description: 'Spectator-voted build with the biggest wow-factor or story.',
			icon: '🔥',
		},
		{
			name: 'Best Crash',
			description: 'Spectacular wipeout with all safety gear and rules in check.',
			icon: '💥',
		},
	],
};
