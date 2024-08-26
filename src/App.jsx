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
						</>
					</CartContext>
				</FavContext>
			</LanguageContext>
		</CurrencyContext>
	);
}

export default App;
