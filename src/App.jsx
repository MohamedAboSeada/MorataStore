import React from 'react';

// contexts file
import {
	CurrencyContext,
	LanguageContext,
	CartContext,
	FavContext,
} from './components/contexts';

// all componenets
import {
	Nav,
	Hero,
	Categories,
	TopDeals,
	Sponsors,
	Drilling,
	Cutting,
	Blog,
	TopSales,
	Services,
	ScrollTop,
	Footer,
} from './components';

// main style file
import './css/main.css';

function App() {
	return (
		<CurrencyContext>
			<LanguageContext>
				<FavContext>
					<CartContext>
						<Nav />
						<Hero />
						<Categories />
						<TopDeals targetDate={'2024-12-1'} />
						<Drilling />
						<Cutting />
						<TopSales />
						<Services />
						<Blog />
						<Sponsors />
						<ScrollTop />
						<Footer />
					</CartContext>
				</FavContext>
			</LanguageContext>
		</CurrencyContext>
	);
}

export default App;
