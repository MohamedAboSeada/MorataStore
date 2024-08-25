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
const jsxCode = `<div className='hero'>
			<Splide
				tag='section'
				options={{}}
				hasTrack={false}
				aria-label='...'
			>
				<SplideTrack>
					<SplideSlide className='slide'>
						<div className='container'>
							<h2 className='slide__heading'>
								We Build your dream
							</h2>
							<p className='slide__para'>
								Hurry up! don't miss it!Before the offers end!
							</p>
							<a href='#' className='slide__btn'>
								Discover Now
							</a>
						</div>
					</SplideSlide>
					<SplideSlide className='slide'>
						<div className='container'>
							<h2 className='slide__heading'>
								Big Choice Hand Driling
							</h2>
							<p className='slide__para'>
								Hurry up! don't miss it!Before the offers end!
							</p>
							<a href='#' className='slide__btn'>
								Discover Now
							</a>
						</div>
					</SplideSlide>
					<SplideSlide className='slide'>
						<div className='container'>
							<h2 className='slide__heading'>
								Best choice of the year
							</h2>
							<p className='slide__para'>
								Discount 20% on products & free shipping
							</p>
							<a href='#' className='slide__btn'>
								Discover Now
							</a>
						</div>
					</SplideSlide>
				</SplideTrack>
			</Splide>
		</div>`;

// Extract class names and copy to clipboard
console.log(extractClassNames(jsxCode));
