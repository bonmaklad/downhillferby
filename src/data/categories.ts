import type { Category } from './types';

export const categories: Category[] = [
	{
		name: 'Zoomers',
		ageRange: '8 – 10 years',
		description:
			'First-time racers and junior builders. Short wheelbase builds focused on control and fun. Adult co-driver optional for youngest entrants.',
		fee: { early: 10, eventDay: 50 },
	},
	{
		name: 'Sprinters',
		ageRange: '11 – 15 years',
		description:
			'Intermediate racers looking for speed with style. Expect tighter chicanes and a braking check mid-course.',
		fee: { early: 10, eventDay: 50 },
	},
	{
		name: 'Mini Stocks',
		ageRange: 'Open build teams',
		description:
			'Family or school squads with multi-driver lineups. Pit strategy counts—roll-in starts with timed split checkpoints.',
		fee: { early: 10, eventDay: 50 },
	},
	{
		name: 'Open',
		ageRange: '16+ years',
		description:
			'The all-in division for innovators, alumni and daredevils. Full course run with the Drews Ave hairpins and speed trap finish.',
		fee: { early: 10, eventDay: 50 },
	},
];

