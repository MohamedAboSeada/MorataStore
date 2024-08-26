import React from 'react';
import { useRef } from 'react';
import { Heart, Layers, ShoppingCart } from 'react-feather';
import { cartContext } from './contexts';
import { useContext } from 'react';
import ImageWithSuspense from './helper/ImageWithSuspense';

function Product({ image, image_h, discount, title, price, stock }) {
	let { setpQuan } = useContext(cartContext);

	return (
		<div className='product'>
			<div className='product__thumbnail'>
				<p className='product__dis'>{discount}%</p>
				<ImageWithSuspense src={image} />
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
