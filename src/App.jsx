import React from 'react';
import TopHeader from './components/TopHeader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Categories from './components/Cats';
import TopDeals from './components/TopDeals';
import {
	CurrencyContext,
	LanguageContext,
	CartContext,
	FavContext,
} from './components/contexts';
import './css/main.css';
import Drilling from './components/Drilling';
import Cutting from './components/Cutting';

function App() {
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
						</>
					</CartContext>
				</FavContext>
			</LanguageContext>
		</CurrencyContext>
	);
}

export default App;
