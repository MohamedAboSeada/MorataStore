import React from 'react';
import { useRef } from 'react';
import { Heart, Layers, ShoppingCart } from 'react-feather';
import { cartContext } from './contexts';
import { useContext } from 'react';

function Product({ image, image_h, discount, title, price, stock }) {
	let pimage = useRef(null);
	let { setpQuan } = useContext(cartContext);
	function addAnimation() {
		pimage.current.classList.add('fadeInAnim');
		setTimeout(() => {
			pimage.current.classList.remove('fadeInAnim');
		}, 200);
	}
	return (
		<div
			onMouseEnter={() => {
				addAnimation();
				pimage.current.src = image_h;
			}}
			onMouseLeave={() => {
				addAnimation();
				pimage.current.src = image;
			}}
			className='product'
		>
			<div className='product__thumbnail'>
				<p className='product__dis'>{discount}%</p>
				<img ref={pimage} src={image} />
				<div className='thumb__btns'>
					<button className='thumb__btn'>
						<Heart size={17} />
					</button>
					<button className='thumb__btn'>
						<Layers size={17} />
					</button>
					<button className='thumb__btn'>
						<ShoppingCart size={17} />
					</button>
				</div>
			</div>
			<div className='p_details'>
				<p className='p_name'>{title}</p>
				<p className='p_price'>
					${(price - price * (discount / 100)).toFixed(2)}
					<span>${price}</span>
				</p>
				<div className='progress'>
					<div className='bar'>
						<div
							style={{ width: `${(stock / 100) * 100}%` }}
							className='track'
						></div>
					</div>
					<p className='stock'>
						sold: <span className='remain'>{stock}/100</span>{' '}
						products
					</p>
				</div>
			</div>
			<button
				onClick={() => setpQuan((prevQuan) => prevQuan + 1)}
				className='cart__btn'
			>
				<ShoppingCart />
				add to cart
			</button>
		</div>
	);
}

export default Product;
