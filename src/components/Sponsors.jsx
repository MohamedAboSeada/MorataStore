import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
const sponsorsImages = [
	'./images/sponsors/asset 52.png',
	'./images/sponsors/asset 53.png',
	'./images/sponsors/asset 54.png',
	'./images/sponsors/asset 55.png',
	'./images/sponsors/asset 56.png',
	'./images/sponsors/asset 57.png',
];
function Sponsors() {
	return (
		<div className='sponsors'>
			
            <div className='container'>
                <h2>Our Sponsors</h2>
				<Splide
					tag='section'
					hasTrack={false}
					options={{
						pagination: false,
						perPage: 7,
						gap: '5px',
						arrows: false,
						autoplay: true,
						type: 'loop',
						breakpoints: {
							980: {
								perPage: 2,
							},
						},
					}}
				>
					<SplideTrack>
						{sponsorsImages.map((image, index) => (
							<SplideSlide key={index}>
								<img src={image} loading='lazy' />
							</SplideSlide>
						))}
					</SplideTrack>
				</Splide>
			</div>
		</div>
	);
}

export default Sponsors;
