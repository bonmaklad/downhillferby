export interface ScheduleEntry {
	label: string;
	time: string;
	description?: string;
	category?: string;
}

export interface Prize {
	name: string;
	description: string;
	icon: string;
}

export interface Category {
	name: string;
	ageRange: string;
	description: string;
	fee: {
		early: number;
		eventDay: number;
	};
}

export interface SponsorSlot {
	name: string;
	url?: string;
	image?: string;
	isPlaceholder?: boolean;
}

export interface SponsorTier {
	name: string;
	maxSpots: number;
	perks: string[];
	slots: SponsorSlot[];
	accent: 'brand-yellow' | 'brand-red' | 'brand-ash' | 'brand-silver';
}

export interface PastEventMedia {
	src: ImageMetadata | string;
	alt: string;
	width?: number;
	height?: number;
	video?: string;
}

export interface PastEvent {
	year: number;
	tagline: string;
	highlight: string;
	media: PastEventMedia[];
}

export interface EventInfo {
	name: string;
	tagline: string;
	date: string;
	time: string;
	location: string;
	address: string;
	description: string;
	countdownAnchor: string;
	signupUrlPlaceholder: string;
	schedule: ScheduleEntry[];
	prizes: Prize[];
}

export interface FAQItem {
	question: string;
	answer: string;
}

export interface CTAInfo {
	headline: string;
	subheadline: string;
	signupUrlConfigKey: string;
}
