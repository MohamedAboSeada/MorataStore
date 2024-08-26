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
const jsxCode = `<div className='topdeals'>
			<div className='container'>
				<Splide
					tag='section'
					hasTrack={false}
					aria-label='...'
					options={{
						pagination: false,
						perPage: 5,
						gap: '5px',
						breakpoints: {
							980: {
								perPage: 2,
							},
						},
					}}
				>
					<SplideTrack>
						{topdeals.map((topdeal) => (
							<SplideSlide key={topdeal.id}>
								<Product
									discount={topdeal.discount}
									image={topdeal.image}
									image_h={topdeal.image_h}
									title={topdeal.title}
									price={topdeal.price}
									stock={topdeal.stock}
								/>
							</SplideSlide>
						))}
					</SplideTrack>
				</Splide>
			</div>`;

// Extract class names and copy to clipboard
console.log(extractClassNames(jsxCode));
