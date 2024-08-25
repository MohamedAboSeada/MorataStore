import React, { useContext } from 'react';
import { currencyContext, langContext } from './contexts';
import { CurrencyOptions, LangOptions } from './Data/data.jsx';
import { useRef } from 'react';
import { useEffect } from 'react';

function DropDown({ options, value, setValue }) {
	let menu = useRef(null);

	useEffect(() => {
		try {
			const handleClickOutside = (e) => {
				if (!e.target.classList.contains('dropdown__btn')) {
					if (menu) menu.current.classList.add('hide');
				}
			};

			// Attach the event listener
			document.addEventListener('click', handleClickOutside);

			// Clean up the event listener on component unmount
			return () => {
				document.removeEventListener('click', handleClickOutside);
			};
		} catch (error) {}
	}, [menu]);

	return (
		<div className='dropdown'>
			<button
				onClick={() => menu.current.classList.toggle('hide')}
				value={value.value}
				className='dropdown__btn'
			>
				{value.label}
				<span className='dropdown-icon'></span>
			</button>
			<ul ref={menu} className='dropdown__options hide'>
				{options.map((option, index) => (
					<li key={index} className='dropdown__option'>
						<button
							value={option.value}
							className='dropdown__value'
							onClick={() => {
								setValue({
									value: option.value,
									label: option.label,
								});
							}}
						>
							{option.label}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

function TopHeader() {
	let { cur, setCur } = useContext(currencyContext);
	let { lang, setLang } = useContext(langContext);

	return (
		<div className='topheader'>
			<div className='container'>
				<div className='left'>
					<DropDown
						options={LangOptions}
						value={lang}
						setValue={setLang}
					/>
					<DropDown
						options={CurrencyOptions}
						value={cur}
						setValue={setCur}
					/>
					<a className='help__btn' href='tel:+201033536598'>
						Need Help ? +(20) 10 3353 6598
					</a>
				</div>
				<ul className='right'>
					<li>
						<a href='#'>About Us</a>
					</li>
					<li>
						<a href='#'>Order Tracking</a>
					</li>
					<li>
						<a href='#'>Contact Us</a>
					</li>
					<li>
						<a href='#'>FAQs</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default TopHeader;
