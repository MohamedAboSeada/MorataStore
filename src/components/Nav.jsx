import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import {
	Menu,
	User,
	Heart,
	ShoppingCart,
	ChevronRight,
	X,
} from 'react-feather';
import { cartContext, favContext } from './contexts';
import { useContext } from 'react';
import { useEffect } from 'react';

function Nav() {
	let [value, setValue] = useState('');
	let [innerWidth, setInnerWidth] = useState(window.innerWidth);
	let [cartHidden, setCartHidden] = useState(true);
	let [wishlistHidden, setWishlistHidden] = useState(true);
	let { pquan, cartP, setpQuan } = useContext(cartContext);
	let { fquan, favs, setfQuan } = useContext(favContext);
	let [hidden, setHidden] = useState(true);

	// some referances
	let navMenu = useRef(null);

	useEffect(() => {
		let handleResize = () => {
			setInnerWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [navMenu]); // mount / navMenu / unmount

	return (
		<>
			<nav className='nav'>
				{!cartHidden && (
					<Side
						type='cart'
						setSideHide={setCartHidden}
						cartP={cartP}
						favs={favs}
						pquan={pquan}
						fquan={fquan}
					/>
				)}
				{!wishlistHidden && (
					<Side
						type='wishlist'
						setSideHide={setWishlistHidden}
						cartP={cartP}
						favs={favs}
						pquan={pquan}
						fquan={fquan}
					/>
				)}
				<div className='container'>
					<div className='logo'>
						<a className='home__btn' href='#'>
							<img
								src='./images/misc/logo.png'
								alt='MorataStore'
							/>
						</a>
					</div>
					<div className='search__menu'>
						<button
							onClick={() =>
								navMenu.current.classList.remove('hide')
							}
							className='menu__btn'
						>
							<Menu />
						</button>
						<div className='search'>
							<input
								className='search__input'
								type='text'
								value={value}
								onChange={(e) => setValue(e.target.value)}
								placeholder='Search for products ...'
							/>
							<button className='search__btn'>Search</button>
						</div>
					</div>
					<div className='nav__btns'>
						<button
							onClick={() => setHidden(false)}
							className='sp__btn'
						>
							<User size={35} />
							<div className='btntext'>
								<p className='btntext__title'>Login</p>
								<p className='btntext__desc'>Account</p>
							</div>
						</button>
						<button
							onClick={() => {
								setCartHidden(true);
								setWishlistHidden(false);
							}}
							className='sp__btn'
						>
							<div className='icon'>
								<Heart className='icon' size={35} />
								<div className='badge'>{fquan}</div>
							</div>
							<div className='btntext'>
								<p className='btntext__title'>Favorite</p>
								<p className='btntext__desc'>My Wishlist</p>
							</div>
						</button>
						<button
							onClick={() => {
								setCartHidden(false);
								setWishlistHidden(true);
							}}
							className='sp__btn'
						>
							<div className='icon'>
								<ShoppingCart size={35} />
								<div className='badge'>{pquan}</div>
							</div>
							<div className='btntext'>
								<p className='btntext__title'>Cart</p>
								<p className='btntext__desc'>$0.00</p>
							</div>
						</button>
					</div>
				</div>
				<div
					ref={navMenu}
					className={`nav__menu ${innerWidth <= 600 ? 'hide' : ''}`}
				>
					{innerWidth <= 980 && (
						<button
							onClick={() => {
								navMenu.current.classList.add('hide');
							}}
							className='close__btn'
						>
							<X /> Close
						</button>
					)}
					<div className='container'>
						<ul className='nav__menu-list'>
							{innerWidth <= 980 && (
								<>
									<li className='menu__item'>
										<a
											onClick={() => {
												setHidden(false);
												navMenu.current.classList.add(
													'hide'
												);
											}}
											className='menu__link'
										>
											Login/Register
										</a>
									</li>
									<li className='menu__item'>
										<a
											className='menu__link'
											onClick={() => {
												setWishlistHidden(false);
												navMenu.current.classList.add(
													'hide'
												);
											}}
										>
											Wishlist ({fquan})
										</a>
									</li>
								</>
							)}

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
			</nav>
			<RegesterForm hidden={hidden} setHidden={setHidden} />
		</>
	);
}

function Side({ type, setSideHide, cartP, favs, pquan, fquan }) {
	let cartContent;
	let side = useRef(null);

	useEffect(() => {
		side.current.classList.add('fadeInAnim');
	}, [side]);

	if (type === 'cart') {
		cartContent =
			pquan === 0 ? (
				<div className='empty'>
					<img
						className='empty__image'
						src='./images/icons/box.svg'
					/>
					<p className='empty__text'>Your Cart is empty</p>
				</div>
			) : (
				<div className='products'>
					{cartP.map((product) => (
						<h1>name : {product.name}</h1>
					))}
					<button>Check Out</button>
				</div>
			);
	} else {
		cartContent =
			fquan === 0 ? (
				<div className='empty'>
					<img
						className='empty__image'
						src='./images/icons/dislike.svg'
					/>
					<p className='empty__text'>Wishlist is empty</p>
				</div>
			) : (
				<div className='products'>
					{favs.map((product) => (
						<h1>name : {product.name}</h1>
					))}
				</div>
			);
	}

	return (
		<div ref={side} className='side'>
			<div className='sideHeader'>
				<h3 className='side__header'>
					{type === 'cart' ? 'Shopping Cart' : 'My Wishlist'}
				</h3>
				<button
					onClick={() => setSideHide(true)}
					className='side__close'
				>
					<X />
				</button>
			</div>
			<div className='sidecontent'>{cartContent}</div>
		</div>
	);
}

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

export default Nav;
