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
const jsxCode = `<div className='categories'>
			<div className='container'>
				<div className='cats'>
					<a href='#' className='cat'>
						<img src='./images/tools/paint_brush.jpeg' />
						Paint Brush
					</a>
					<a href='#' className='cat'>
						<img src='./images/tools/driling.jpeg' />
						Drilling
					</a>
					<a href='#' className='cat'>
						<img src='./images/tools/wheel.jpeg' />
						WheelBarrow
					</a>
					<a href='#' className='cat'>
						<img src='./images/tools/cutting.jpeg' />
						Cutting
					</a>
					<a href='#' className='cat'>
						<img src='./images/tools/voltmeter.jpeg' />
						Voltmeter
					</a>
					<a href='#' className='cat'>
						<img src='./images/tools/screw.jpeg' />
						ScrewDriver
					</a>
					<a href='#' className='cat'>
						<img src='./images/tools/hammer.jpeg' />
						Hammers
					</a>
					<a href='#' className='cat'>
						<img src='./images/tools/ladders.jpeg' />
						Ladders
					</a>
				</div>
			</div>
		</div>`;

// Extract class names and copy to clipboard
console.log(extractClassNames(jsxCode));
