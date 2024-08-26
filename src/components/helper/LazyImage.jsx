// LazyImage.jsx
import React, { useState, useEffect } from 'react';

const LazyImage = ({ ref, src, alt }) => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => setLoaded(true);
	}, [src]);

	return loaded ? <img ref={ref} src={src} alt={alt} /> : null;
};

export default LazyImage;
