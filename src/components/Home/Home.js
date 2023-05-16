import React from 'react';
import './Home.css';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import { Link } from 'react-router-dom';
const Home = () => {
	const [ reviews, setReviews ] = useReviews();
	return (
		<div>
			<div className="home_container">
				<div className="paragraph">
					<h1>Introducing the new Laptop</h1>
					<h2>The Best Laptop ever</h2>
					<p>
						Incredible comes from original. Supercharged and takes its power and efficiency further than
						ever.<br />
						It delivers exceptional performance whether it’s plugged in or not, and now has even longer
						battery<br />
						life. Combined with a stunning Liquid Retina XDR display and all the ports you need — this is a
						pro<br />
						laptop without equal.
					</p>
					<button className="btn">Live Demo</button>
				</div>

				<div className="img">
					<img src="../img/logo1.png" alt="" />
				</div>
			</div>

			<div className="review-count">
				<h1>Customer Review({reviews.length})</h1>
			</div>

			<div className="home-container">
				<div className="review-container">
					{reviews.map((reviewDetail) => <ReviewDetails key={reviewDetail.id} reviewDetail={reviewDetail} />)}
				</div>
			</div>

			<div className='all-button'>
				<Link to="/reviews">
				<button className='btn-all'>See All Reviews</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
