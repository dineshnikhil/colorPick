import React from 'react';
import './ActionButton.styles.css';

function ActionButton({ content, type }) {
	return (
		<button className={`action_button ${type}`}>
			<a href="#">{content}</a>
		</button>
	);
}

export default ActionButton;
