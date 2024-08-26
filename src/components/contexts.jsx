import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { CurrencyOptions, LangOptions } from './Data/data.jsx';
import { useEffect } from 'react';

let currencyContext = createContext();
let langContext = createContext();
let cartContext = createContext();
let favContext = createContext();
let resContext = createContext();

function CurrencyContext({ children }) {
	let [cur, setCur] = useState(CurrencyOptions[0]);
	return (
		<currencyContext.Provider value={{ cur, setCur }}>
			{children}
		</currencyContext.Provider>
	);
}

function LanguageContext({ children }) {
	let [lang, setLang] = useState(LangOptions[0]);
	return (
		<langContext.Provider value={{ lang, setLang }}>
			{children}
		</langContext.Provider>
	);
}

function CartContext({ children }) {
	let [pquan, setpQuan] = useState(0);
	let [cartP, setCart] = useState([]);
	return (
		<cartContext.Provider value={{ pquan, cartP, setpQuan, setCart }}>
			{children}
		</cartContext.Provider>
	);
}

function FavContext({ children }) {
	let [fquan, setfQuan] = useState(0);
	let [favs, setFav] = useState([]);
	return (
		<favContext.Provider value={{ fquan, favs, setFav, setfQuan }}>
			{children}
		</favContext.Provider>
	);
}

function Responsive({ children }) {
	let [innerWidth, setInnerWidth] = useState(window.innerWidth);
	useEffect(() => {
		let handleResize = () => {};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [innerWidth]);

	return (
		<resContext.Provider value={{ innerWidth, setInnerWidth }}>
			{children}
		</resContext.Provider>
	);
}

export {
	currencyContext,
	langContext,
	cartContext,
	favContext,
	resContext,
	CurrencyContext,
	LanguageContext,
	CartContext,
	FavContext,
	Responsive,
};
