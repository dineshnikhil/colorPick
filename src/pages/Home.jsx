import React from 'react';
import Demo from '../components/Demo';
import './Home.styles.css';

function Home() {
	return (
		<div className="home_div">
			<h1>color boxes comes here</h1>
			<div>
				<button>Red</button>
			</div>
			<Demo />
		</div>
	);
}

export default Home;
