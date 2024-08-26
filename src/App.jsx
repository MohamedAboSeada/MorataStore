import React from 'react';
import TopHeader from './components/TopHeader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Categories from './components/Cats';
import TopDeals from './components/TopDeals';
import Sponsors from './components/Sponsors';
import {
	CurrencyContext,
	LanguageContext,
	CartContext,
	FavContext,
} from './components/contexts';
import './css/main.css';
import Drilling from './components/Drilling';
import Cutting from './components/Cutting';
import { ArrowUp } from 'react-feather';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
	let [scrollH, setScrollH] = useState(window.scrollY);

	useEffect(() => {
		let handleScroll = (_) => {
			setScrollH(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<CurrencyContext>
			<LanguageContext>
				<FavContext>
					<CartContext>
						<>
							<TopHeader />
							<Nav />
							<Hero />
							<Categories />
							<TopDeals targetDate={'2024-12-1'} />
							<Drilling />
							<Cutting />
							<Sponsors />
							{scrollH >= 200 && (
								<button
									onClick={() =>
										window.scrollTo({
											top: 0,
											left: 0,
											behavior: 'smooth',
										})
									}
									className='toTop'
								>
									<ArrowUp />
								</button>
							)}
						</>
					</CartContext>
				</FavContext>
			</LanguageContext>
		</CurrencyContext>
	);
}

export default App;
