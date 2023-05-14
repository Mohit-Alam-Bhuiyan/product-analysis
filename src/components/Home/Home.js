import React from 'react';
import './Home.css'
const Home = () => {
	return (
		<div className="home_container">
			<div className='paragraph'>
				<h1>Introducing the new Laptop</h1>
				<h2>The Best Laptop ever</h2>
				<p>
					Incredible comes from original. Supercharged and takes its power and efficiency further than ever.<br/>
					It delivers exceptional performance whether it’s plugged in or not, and now has even longer battery<br/>
					life. Combined with a stunning Liquid Retina XDR display and all the ports you need — this is a pro<br/>
					laptop without equal.
				</p>
                <button className='btn'>Live Demo</button>
			</div>

			<div className='img'>
				<img src="../img/logo1.png" alt="" />
			</div>

			<div>
				<h3>Customer Review</h3>
			</div>
		</div>

	);
};

export default Home;
