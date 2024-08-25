import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Hero() {
	return (
		<div className='hero'>
			<Splide
				tag='section'
				hasTrack={false}
				aria-label='...'
				options={{
					autoplay: true,
					arrows: false,
				}}
			>
				<SplideTrack>
					<SplideSlide className='slide'>
						<div className='container'>
							<h2 className='slide__heading'>
								We Build your dream
							</h2>
							<p className='slide__para'>
								Hurry up! don't miss it!Before the offers end!
							</p>
							<a href='#' className='slide__btn'>
								Discover Now
							</a>
						</div>
					</SplideSlide>
					<SplideSlide className='slide'>
						<div className='container'>
							<h2 className='slide__heading'>
								Big Choice Hand Driling
							</h2>
							<p className='slide__para'>
								Hurry up! don't miss it!Before the offers end!
							</p>
							<a href='#' className='slide__btn'>
								Discover Now
							</a>
						</div>
					</SplideSlide>
					<SplideSlide className='slide'>
						<div className='container'>
							<h2 className='slide__heading'>
								Best choice of the year
							</h2>
							<p className='slide__para'>
								Discount 20% on products & free shipping
							</p>
							<a href='#' className='slide__btn'>
								Discover Now
							</a>
						</div>
					</SplideSlide>
				</SplideTrack>
			</Splide>
		</div>
	);
}

export default Hero;
