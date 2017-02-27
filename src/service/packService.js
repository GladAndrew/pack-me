export const countries = {
	SriLanka: { id: 'SriLanka', name: 'Sri-Lanka', weather: 0 },
	Sweden: { id: 'Sweden', name: 'Sweden', weather: 1 }
};

export const countryTypes = {
	0: 'hot',
	1: 'cold'
};

const things = [
	{ description: 'Coat', weather: 1 },
	{ description: 'Shorts', weather: 0 }
];

export const pack = country => things.filter(t => t.weather === countries[country].weather);
