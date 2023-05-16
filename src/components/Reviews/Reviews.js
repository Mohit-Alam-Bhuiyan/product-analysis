import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Reviews.css'

const Reviews = () => {
	const [ reviews, setReviews ] = useReviews();
	return (
		<div>
			<div className='review-another'>
				<h2>See All Reviews({reviews.length})</h2>
			</div>

            <div className="home-container">
				<div className="review-container">
					{reviews.map((reviewDetail) => <ReviewDetails key={reviewDetail.id} reviewDetail={reviewDetail} />)}
				</div>
			</div>
		</div>
	);
};

export default Reviews;
