import React from 'react';
import './Demo.styles.css';
import ShadeCard from './ShadeCard';

function Demo() {
	const diff_shades = {
		name: 'red',
		shades: [
			'e01e37',
			'da1e37',
			'c71f37',
			'bd1f36',
			'b21e35',
			'a71e34',
			'a11d33',
			'85182a',
			'6e1423',
			'641220',
			'bf0603',
			'8d0801',
		],
	};

	return (
		<div className="shades_div">
			{diff_shades.shades.map((shade) => {
				const shade_hex = '#' + shade;
				const my_style = {
					backgroundColor: shade_hex,
				};
				return <ShadeCard my_style={my_style} shade_hex={shade_hex} />;
			})}
		</div>
	);
}

export default Demo;
