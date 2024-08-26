import React from 'react';
import Product from './Product';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import topdeals from '../../public/topdealsdata.json';
import { px } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';

function TopDeals({ targetDate }) {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const calculateTimeLeft = () => {
			const difference = +new Date(targetDate) - +new Date();
			if (difference > 0) {
				const timeLeft = {
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60),
				};
				setTimeLeft(timeLeft);
			} else {
				// If the target date is reached, stop the countdown.
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
			}
		};

		const timer = setInterval(calculateTimeLeft, 1000);

		// Clear interval on component unmount
		return () => clearInterval(timer);
	}, [targetDate]);

	return (
		<div className='topdeals'>
			<div className='container'>
				<div className='section__header'>
					<h2>Top Deals Of The Day</h2>
					<div className='counter'>
						<p>Hurry up! Offer ends in:</p>
						<div className='countdown'>
							<p className='days'>{timeLeft.days.toLocaleString().padStart(2,'0')}</p>:
							<p className='hours'>{timeLeft.hours}</p>:
							<p className='minutes'>{timeLeft.minutes}</p>:
							<p className='seconds'>{timeLeft.seconds}</p>
						</div>
					</div>
				</div>
				<Splide
					tag='section'
					hasTrack={false}
					aria-label='...'
					options={{
						pagination: false,
						perPage: 5,
						gap: '5px',
						breakpoints: {
							980: {
								perPage: 2,
							},
						},
					}}
				>
					<SplideTrack>
						{topdeals.map((topdeal) => (
							<SplideSlide key={topdeal.id}>
								<Product
									discount={topdeal.discount}
									image={topdeal.image}
									image_h={topdeal.image_h}
									title={topdeal.title}
									price={topdeal.price}
									stock={topdeal.stock}
								/>
							</SplideSlide>
						))}
					</SplideTrack>
				</Splide>
			</div>
			{/* <div className='container'>
				<Splide hasTrack={false} tag="section">
					<SplideTrack>
						<SplideSlide>

                        </SplideSlide>
					</SplideTrack>
				</Splide>
			</div> */}
		</div>
	);
}

export default TopDeals;
