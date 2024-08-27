import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'react-feather';

function ScrollTop() {
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
		<>
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
	);
}

export default ScrollTop;
