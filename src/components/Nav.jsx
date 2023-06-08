import React from 'react';
import './Nav.styles.css';
import ActionButton from '../utils/ActionButton';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav() {
	return (
		<div className="nav_div">
			<div className="nav_child_div">
				<h2>🌈 Color Pick</h2>
			</div>
			<div className="nav_child_div">
				<ActionButton content="Login" type="default" />
				<ActionButton
					content={<FontAwesomeIcon icon={faGithub} />}
					type="small"
				/>
				<ActionButton
					content={<FontAwesomeIcon icon={faCircleInfo} />}
					type="small"
				/>
			</div>
		</div>
	);
}

export default Nav;
