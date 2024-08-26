import React from 'react';
import Products from '../../public/cutting.json';
import Product from './Product';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { ChevronRight } from 'react-feather';
import { useContext } from 'react';
function Cutting() {
	return (
		<div className='section cutting'>
			<div className='container'>
				<div className='section__header'>
					<h2>Cutting Machine Products</h2>
					<a className='header__btn' href='#'>
						view all details
						<ChevronRight size={25} />
					</a>
				</div>
				<div className='content'>
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
					<div className='content__image cutting'>
						<div className='content__data'>
							<p className='spc__badge'>Hot Sale</p>
							<h3>Drilling Rotary hammers</h3>
							<p>
								Up to -20% with the code:{' '}
								<span className='copon'>morata-SALE20</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cutting;
