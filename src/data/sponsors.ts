import type { SponsorTier } from './types';

export const sponsorTiers: SponsorTier[] = [
	{
		name: 'Gold Sponsors',
		maxSpots: 5,
		perks: [
			'Prime logo placement on start gantry & finish arch',
			'MC shout-outs every hour',
			'Co-branded social reels & newsletter features',
			'VIP pit lane walk-through',
		],
		slots: Array.from({ length: 5 }, (_, index) => ({
			name: `Available Spot ${index + 1}`,
			isPlaceholder: true,
		})),
		accent: 'brand-red',
	},
	{
		name: 'Silver Sponsors',
		maxSpots: 5,
		perks: [
			'Branding on course banners & digital scoreboard',
			'Instagram story mentions during race day',
			'Two VIP hospitality passes',
		],
		slots: Array.from({ length: 5 }, (_, index) => ({
			name: `Available Spot ${index + 1}`,
			isPlaceholder: true,
		})),
		accent: 'brand-silver',
	},
];

