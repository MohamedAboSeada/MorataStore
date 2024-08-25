import React from 'react';
import TopHeader from './components/TopHeader';
import Nav from './components/Nav';
import {
	CurrencyContext,
	LanguageContext,
	CartContext,
	FavContext,
} from './components/contexts';
import './css/main.css';

function App() {
	console.log(import.meta.env.BASE_URL);
	return (
		<CurrencyContext>
			<LanguageContext>
				<FavContext>
					<CartContext>
						<>
							<TopHeader />
							<Nav />
						</>
					</CartContext>
				</FavContext>
			</LanguageContext>
		</CurrencyContext>
	);
}

export default App;
