import React from 'react';

const LangOptions = [
	{
		label: (
			<>
				<img src='./images/langs/en.png' />
				English
			</>
		),
		value: 'en',
	},
	{
		label: (
			<>
				<img src='./images/langs/ar.png' />
				العربية
			</>
		),
		value: 'ar',
	},

	{
		label: (
			<>
				<img src='./images/langs/fr.png' />
				France
			</>
		),
		value: 'fr',
	},
	{
		label: (
			<>
				<img src='./images/langs/gr.png' />
				German
			</>
		),
		value: 'gr',
	},
	{
		label: (
			<>
				<img src='./images/langs/it.png' />
				Italian
			</>
		),
		value: 'it',
	},
];

const CurrencyOptions = [
	{ label: 'United States (USD $)', value: 'USD' },
	{ label: 'مصر (EGP £)', value: 'EGP' },
	{ label: 'Europe (Euro €)', value: 'ERU' },
];

export { LangOptions, CurrencyOptions };
