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
		window.addEventListener('click', handleResize);
		return () => window.removeEventListener('click', handleResize);
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
								src='src\assets\misc\logo.png'
								alt='MorataStore'
							/>
						</a>
					</div>
					<div className='search__menu'>
						<button
							onClick={() =>
								navMenu.current.classList.toggle('hide')
							}
							className='menu__btn'
						>
							<Menu size={25} />
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
						<ul ref={navMenu} className='nav__menu hide'>
							{innerWidth <= 600 && (
								<button
									className='menu__close'
									onClick={() =>
										navMenu.current.classList.add('hide')
									}
								>
									<X className='close' /> Close
								</button>
							)}

							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Computer & Desktop <ChevronRight />
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Laptop & Ipad <ChevronRight />
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Cameras & Photos <ChevronRight />
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Smartphones & Tablets <ChevronRight />
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Home & Kitchen <ChevronRight />
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									TV & Audio
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Health & Beauty
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Watches & Eyewear
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Top Deals
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Top Selling Products
								</a>
							</li>
							<li className='menu__item'>
								<a className='menu__link' href='#'>
									Top Featured Products
								</a>
							</li>
							{innerWidth <= 600 && (
								<>
									<li className='menu__item'>
										<a
											onClick={() => {
												navMenu.current.classList.add(
													'hide'
												);
												setWishlistHidden(false);
											}}
											className='menu__link'
											href='#'
										>
											Wishlist ({fquan}) <ChevronRight />
										</a>
									</li>
									<li className='menu__item'>
										<a
											onClick={() => {
												navMenu.current.classList.add(
													'hide'
												);
												setHidden(false);
											}}
											className='menu__link'
											href='#'
										>
											Login/Register <ChevronRight />
										</a>
									</li>
								</>
							)}
						</ul>
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
						src='src\assets\icons\box.svg'
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
						src='src\assets\icons\dislike.svg'
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
	let handleHide = () => {
		setHidden(true);
	};

	let [type, setType] = useState('login');
	return (
		<div className={`register ${hidden && 'hide'}`}>
			<button onClick={handleHide} className='clost__btn'>
				<X />
			</button>
			<div className='register__header'>
				<button
					className={`register__btn ${type === 'login' && 'active'}`}
					onClick={() => setType('login')}
				>
					Login
				</button>
				<button
					className={`register__btn ${type === 'reg' && 'active'}`}
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
