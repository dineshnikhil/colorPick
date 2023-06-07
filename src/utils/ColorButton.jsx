import React from 'react';
import './ColorButton.styles.css';

function ColorButton({ content, myStyle }) {
	return (
		<button style={myStyle} className="color_button">
			<a href="#">{content}</a>
		</button>
	);
}

export default ColorButton;
