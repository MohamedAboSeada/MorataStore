import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import React from 'react';

function Categories() {
	return (
		<div className='categories'>
			<div className='container'>
				<Splide
					className='cats'
					tag='div'
					hasTrack={false}
					aria-label='...'
					options={{
						autoplay: true,
						arrows: false,
						pagination: false,
						perPage: 8,
						perMove: 1,
						breakpoints: {
							980: {
								perPage: 2,
							},
						},
					}}
				>
					<SplideTrack>
						<SplideSlide>
							<a href='#' className='cat'>
								<img src='./images/tools/paint_brush.jpeg' />
								Paint Brush
							</a>
						</SplideSlide>
						<SplideSlide>
							<a href='#' className='cat'>
								<img src='./images/tools/driling.jpeg' />
								Drilling
							</a>
						</SplideSlide>
						<SplideSlide>
							<a href='#' className='cat'>
								<img src='./images/tools/wheel.jpeg' />
								WheelBarrow
							</a>
						</SplideSlide>
						<SplideSlide>
							<a href='#' className='cat'>
								<img src='./images/tools/cutting.jpeg' />
								Cutting
							</a>
						</SplideSlide>
						<SplideSlide>
							<a href='#' className='cat'>
								<img src='./images/tools/voltmeter.jpeg' />
								Voltmeter
							</a>
						</SplideSlide>
						<SplideSlide>
							<a href='#' className='cat'>
								<img src='./images/tools/screw.jpeg' />
								ScrewDriver
							</a>
						</SplideSlide>
						<SplideSlide>
							<a href='#' className='cat'>
								<img src='./images/tools/hammer.jpeg' />
								Hammers
							</a>
						</SplideSlide>
						<SplideSlide>
							<a href='#' className='cat'>
								<img src='./images/tools/ladders.jpeg' />
								Ladders
							</a>
						</SplideSlide>
					</SplideTrack>
				</Splide>
				<div className='add__cats'>
					<div className='cat'>
						<p>Top ranking products</p>
						<h3>Keyboard & accessories</h3>
						<a href='#' className='cat__btn'>
							Get evety thing you need
						</a>
					</div>
					<div className='cat'>
						<p>Flash Sale</p>
						<h3>Black friday sale</h3>
						<a href='#' className='cat__btn'>
							Get evety thing you need
						</a>
					</div>
					<div className='cat'>
						<p>Weekly deals</p>
						<h3>Cameras & Photos</h3>
						<a href='#' className='cat__btn'>
							Get evety thing you need
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Categories;
