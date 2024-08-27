import React, { useState } from 'react';
import { X } from 'react-feather';
function RegesterForm({ hidden, setHidden }) {
	// form states
	let [fname, setFname] = useState('');
	let [lname, setLname] = useState('');
	let [email, setemail] = useState('');
	let [password, setPassword] = useState('');
	let [type, setType] = useState('login');

	let handleHide = () => {
		setHidden(true);
	};

	let handleSubmit = (e) => {
		e.preventDefault();

		let userData =
			type === 'login'
				? { email, password }
				: { fname, lname, email, password };

		console.log(userData);
	};

	return (
		<div className={`register ${hidden && 'hide'}`}>
			<button onClick={handleHide} className='clost__btn'>
				<X color='#666' />
			</button>
			<div className='register__header'>
				<button
					className={`register__btn ${type === 'login' && 'active'}`}
					onClick={() => {
						setemail('');
						setPassword('');
						setType('login');
					}}
				>
					Login
				</button>
				<button
					className={`register__btn ${type === 'reg' && 'active'}`}
					onClick={() => {
						setFname('');
						setLname('');
						setemail('');
						setPassword('');
						setType('reg');
					}}
				>
					Register
				</button>
			</div>
			<form
				onSubmit={handleSubmit}
				className='register__form'
				method='POST'
			>
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
								value={fname}
								onChange={(e) => setFname(e.target.value)}
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
								value={lname}
								onChange={(e) => setLname(e.target.value)}
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
						value={email}
						onChange={(e) => setemail(e.target.value)}
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
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Password'
					/>
				</div>
				{type === 'login' && (
					<a className='forget' href='#'>
						Forget your password ?
					</a>
				)}
				<button className='submit' type='submit'>
					{type === 'login' ? 'Login' : 'Create new account'}
				</button>
				<p className='terms'>
					New user discount applies only to full price items. By
					providing your email address, you agree to our Privacy
					Policy and Terms of Service.
				</p>
			</form>
		</div>
	);
}

export default RegesterForm;
