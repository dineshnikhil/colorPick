import React from 'react';
import Demo from '../components/Demo';
import './Home.styles.css';
import ColorButton from '../utils/ColorButton';

const shades = [
	{
		name: 'red',
		shade: 'e01e37',
	},
	{
		name: 'orange',
		shade: 'ff4800',
	},
	{
		name: 'yellow',
		shade: 'ffa200',
	},
	{
		name: 'green',
		shade: '007200',
	},
	{
		name: 'blue',
		shade: '0077b6',
	},
	{
		name: 'indigo',
		shade: '7e21d4',
	},
	{
		name: 'voliet',
		shade: '3c096c',
	},
];

function Home() {
	return (
		<div className="home_div">
			<h1>color boxes comes here</h1>
			<div className="home_action_div">
				{shades.map((shade) => {
					var shade_color = '#' + shade.shade;
					var myStyle = {
						backgroundColor: shade_color,
					};
					return <ColorButton content={shade.name} myStyle={myStyle} />;
				})}
			</div>
			<Demo />
		</div>
	);
}

export default Home;
