import React, { Suspense } from 'react';
import SkeletonLoader from './SkeletonLoader';

const LazyImage = React.lazy(() => import('./LazyImage'));

const ImageWithSuspense = ({ ref, src, alt }) => {
	return (
		<Suspense fallback={<SkeletonLoader />}>
			<LazyImage ref={ref} src={src} alt={alt} />
		</Suspense>
	);
};

export default ImageWithSuspense;
