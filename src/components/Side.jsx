import React, { useRef, useEffect } from 'react';
import { X } from 'react-feather';
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

export default Side;
