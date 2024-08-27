import React from 'react';
import { User } from 'react-feather';
import { MessageSquare } from 'react-feather';
import { CreditCard } from 'react-feather';
import { Send } from 'react-feather';

function TopSales() {
	return (
		<section className='highlights'>
			<div className='container'>
				<div className='highlights__group'>
					<p className='highlights__title'>top sale products</p>
					<h1 className='highlights__text'>Top Super driller 2024</h1>
					<a className='highlights__link' href='#'>
						More Details
					</a>
				</div>
				<div className='highlights__group'>
					<p className='highlights__title'>bestseller products</p>
					<h1 className='highlights__text'>Bang Cutting equepment</h1>
					<a className='highlights__link' href='#'>
						More Details
					</a>
				</div>
			</div>
		</section>
	);
}

export function Services() {
	return (
		<section className='services'>
			<div className='container'>
				<div className='service'>
					<Send color='orange' size={40}/>
					<div className='service__info'>
						<p className='service__text'>Free Payment</p>
						<p className='service__title'>
							For all orders over $120
						</p>
					</div>
				</div>
				<div className='service'>
					<CreditCard color='orange' size={40}/>
					<div className='service__info'>
						<p className='service__text'>Safe Payment</p>
						<p className='service__title'>100% secure payment</p>
					</div>
				</div>
				<div className='service'>
					<MessageSquare color='orange' size={40}/>
					<div className='service__info'>
						<p className='service__text'>24/7 Help Center</p>
						<p className='service__title'>Dedicated 24/7 support</p>
					</div>
				</div>
				<div className='service'>
					<User color='orange' size={40}/>
					<div className='service__info'>
						<p className='service__text'>Friendly Services</p>
						<p className='service__title'>
							30 day satisfaction guarantee
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default TopSales;
