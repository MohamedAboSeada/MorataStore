import React from 'react';
import TopHeader from './components/TopHeader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Categories from './components/Cats';
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
						</>
					</CartContext>
				</FavContext>
			</LanguageContext>
		</CurrencyContext>
	);
}

export default App;
