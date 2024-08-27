import React from 'react';
import { ChevronRight } from 'react-feather';

function Blog() {
	return (
		<section className='section blog'>
			<div className='container'>
				<div className='section__header'>
					<h2>From The Blog</h2>
					<a className='header__btn' href='#'>
						See All Post <ChevronRight size={25} />
					</a>
				</div>

				<div className='posts'>
					{/* post */}
					<div className='post'>
						<div className='post__thumb'>
							<img
								className='post__image'
								loading='lazy'
								src='./images/Blog/asset 58.jpeg'
							/>
							<p className='post__badge'>Tools</p>
						</div>
						<div className='post__info'>
							<h3 className='post__text'>
								top 5 drill maker machine in america for home &
								office-2021
							</h3>
							<p className='post__by'>
								post by{' '}
								<span className='post__user'>
									MohamedAboSeada
								</span>
							</p>
						</div>
						<div className='post__meta'>
							<a className='post__more' href='#'>
								Read more
							</a>
							<p className='post__date'>
								{new Date().toLocaleDateString('en-US', {
									dateStyle: 'medium',
								})}
							</p>
						</div>
					</div>
					{/* end post */}
					{/* post */}
					<div className='post'>
						<div className='post__thumb'>
							<img
								className='post__image'
								loading='lazy'
								src='./images/Blog/asset 59.jpeg'
							/>
							<p className='post__badge'>Tools</p>
						</div>
						<div className='post__info'>
							<h3 className='post__text'>
								top 5 drill maker machine in america for home &
								office-2021
							</h3>
							<p className='post__by'>
								post by{' '}
								<span className='post__user'>
									MohamedAboSeada
								</span>
							</p>
						</div>
						<div className='post__meta'>
							<a className='post__more' href='#'>
								Read more
							</a>
							<p className='post__date'>
								{new Date().toLocaleDateString('en-US', {
									dateStyle: 'medium',
								})}
							</p>
						</div>
					</div>
					{/* end post */}
					{/* post */}
					<div className='post'>
						<div className='post__thumb'>
							<img
								className='post__image'
								loading='lazy'
								src='./images/Blog/asset 60.jpeg'
							/>
							<p className='post__badge'>Tools</p>
						</div>
						<div className='post__info'>
							<h3 className='post__text'>
								top 5 drill maker machine in america for home &
								office-2021
							</h3>
							<p className='post__by'>
								post by{' '}
								<span className='post__user'>
									MohamedAboSeada
								</span>
							</p>
						</div>
						<div className='post__meta'>
							<a className='post__more' href='#'>
								Read more
							</a>
							<p className='post__date'>
								{new Date().toLocaleDateString('en-US', {
									dateStyle: 'medium',
								})}
							</p>
						</div>
					</div>
					{/* end post */}
					{/* post */}
					<div className='post'>
						<div className='post__thumb'>
							<img
								className='post__image'
								loading='lazy'
								src='./images/Blog/asset 61.jpeg'
							/>
							<p className='post__badge'>Tools</p>
						</div>
						<div className='post__info'>
							<h3 className='post__text'>
								top 5 drill maker machine in america for home &
								office-2021
							</h3>
							<p className='post__by'>
								post by{' '}
								<span className='post__user'>
									MohamedAboSeada
								</span>
							</p>
						</div>
						<div className='post__meta'>
							<a className='post__more' href='#'>
								Read more
							</a>
							<p className='post__date'>
								{new Date().toLocaleDateString('en-US', {
									dateStyle: 'medium',
								})}
							</p>
						</div>
					</div>
					{/* end post */}
				</div>
			</div>
		</section>
	);
}

export default Blog;
