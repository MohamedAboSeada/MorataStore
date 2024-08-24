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
const jsxCode = `<div className='register'>
			<button className='clost__btn'>
				<X />
			</button>
			<div className='register__header'>
				<button
					className='register__btn'
					onClick={() => setType('login')}
				>
					Login
				</button>
				<button
					className='register__btn'
					onClick={() => setType('reg')}
				>
					Register
				</button>
			</div>
			<form className='register__form' method='POST'>
				{type === 'reg' && (
					<>
						<div className='field'>
							<label htmlFor='fn'>
								First Name <span className='required'>*</span>
							</label>
							<input
								type='text'
								name='fname'
								id='fn'
								required
								placeholder='First Name'
							/>
						</div>
						<div className='field'>
							<label htmlFor='ln'>
								Last Name <span className='required'>*</span>
							</label>
							<input
								type='text'
								name='lname'
								id='ln'
								required
								placeholder='Last Name'
							/>
						</div>
					</>
				)}
				<div className='field'>
					<label htmlFor='em'>
						Email Address <span className='required'>*</span>
					</label>
					<input
						type='email'
						name='email'
						id='em'
						required
						placeholder='Email Address'
					/>
				</div>
				<div className='field'>
					<label htmlFor='pass'>
						Password <span className='required'>*</span>
					</label>
					<input
						type='password'
						name='password'
						id='pass'
						required
						placeholder='Password'
					/>
				</div>
				{type === 'login' && (
					<a className='forget' href='#'>
						Forget your password ?
					</a>
				)}
				<button type='submit'>
					{type === 'login' ? 'Login' : 'Create new account'}
				</button>
				<p className='terms'>
					New user discount applies only to full price items. By
					providing your email address, you agree to our Privacy
					Policy and Terms of Service.
				</p>
			</form>
		</div>`;

// Extract class names and copy to clipboard
console.log(extractClassNames(jsxCode));
