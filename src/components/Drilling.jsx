import React, { useContext } from 'react';
import Products from '../../public/drillingproducts.json';
import Product from './Product';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { ChevronRight } from 'react-feather';

function Drilling() {
	return (
		<div className='section driling'>
			<div className='container'>
				<div className='section__header'>
					<h2>Drilling Machine Products</h2>
					<a className='header__btn' href='#'>
						view all details
						<ChevronRight size={25} />
					</a>
				</div>
				<div className='content'>
					<div className='content__image drilingg'>
						<div className='content__data'>
							<p className='spc__badge'>Hot Sale</p>
							<h3>Drilling Rotary hammers</h3>
							<p>
								Up to -20% with the code:{' '}
								<span className='copon'>morata-SALE20</span>
							</p>
						</div>
					</div>

					<Splide
						tag='section'
						className='sp'
						hasTrack={false}
						aria-label='...'
						options={{
							pagination: false,
							perPage: 4,
							gap: '5px',
							breakpoints: {
								980: {
									perPage: 2,
									arrows: false,
								},
							},
						}}
					>
						<SplideTrack>
							{Products.map((product) => (
								<SplideSlide key={product.id}>
									<Product
										discount={product.discount}
										image={product.image}
										image_h={product.image_h}
										title={product.title}
										price={product.price}
										stock={product.stock}
									/>
								</SplideSlide>
							))}
						</SplideTrack>
					</Splide>
				</div>
			</div>
		</div>
	);
}

export default Drilling;
