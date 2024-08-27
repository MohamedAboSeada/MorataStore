function extractClassNames(jsxCode) {
	// Regular expression to match className="..."
	const classNames = jsxCode.match(/className=["']([^"']+)["']/g);

	// Use a Set to keep class names unique
	const uniqueClassNames = new Set();

	if (classNames) {
		classNames.forEach((className) => {
			// Extract the actual class names from the matches
			const classes = className.match(/["']([^"']+)["']/)[1];
			// Split by space and add each class name to the Set
			classes.split(' ').forEach((cls) => uniqueClassNames.add(cls));
		});
	}

	// Prepare the output in the desired format
	const formattedClassNames = Array.from(uniqueClassNames)
		.map((cls) => `.${cls}{}`)
		.join('\n');

	return formattedClassNames;
}

// Example JSX code
const jsxCode = `<div className='menu'>
					<div className='container'>
						<ul className='menu__list'>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Home
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Shop
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Products
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Pages
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Blog
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Contact US
								</a>
							</li>
						</ul>
					</div>
				</div>
`;

// Extract class names and copy to clipboard
console.log(extractClassNames(jsxCode));
