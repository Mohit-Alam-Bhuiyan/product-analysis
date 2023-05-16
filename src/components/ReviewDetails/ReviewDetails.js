import React from 'react';
import './ReviewDetails.css';
const ReviewDetails = (props) => {
	const { profile, name, Text2, Text, Text3} = props.reviewDetail;
	return (
		<div className="review-details">

				<img src={profile} alt="" />
                <p>{Text2}</p>
				<h5>{name}</h5>
                <p>Rating: {Text}</p>
                <p>{Text3}</p>
			
		</div>
	);
};

export default ReviewDetails;
