import React from 'react';
import { useRef, useEffect, useContext, useState } from 'react';
import RegesterForm from './RegisterForm';
import Side from './Side';
import { Menu, User, Heart, ShoppingCart, X } from 'react-feather';
import { cartContext, favContext } from './contexts';

function Nav() {
	// search state
	let [searchValue, setSearchValue] = useState('');
	let [innerWidth, setInnerWidth] = useState(window.innerWidth);

	// SideMenu States
	let [cartHidden, setCartHidden] = useState(true);
	let [wishlistHidden, setWishlistHidden] = useState(true);

	// register form Hidden state
	let [hidden, setHidden] = useState(true);

	// contexts
	let { pquan, cartP, setpQuan } = useContext(cartContext);
	let { fquan, favs, setfQuan } = useContext(favContext);

	// some referances
	let navMenu = useRef(null);

	useEffect(() => {
		let handleResize = () => {
			setInnerWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [navMenu]);

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
						{innerWidth <= 600 && (
							<button
								onClick={() =>
									navMenu.current.classList.remove('hide')
								}
								className='menu__btn'
							>
								<Menu />
							</button>
						)}
						<div className='search'>
							<input
								className='search__input'
								type='text'
								value={searchValue}
								onChange={(e) => setSearchValue(e.target.value)}
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

export default Nav;
