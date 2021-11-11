import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import './InfoBar.css';

const InfoBar = ({roomName}) => {
	return(
		<div className="infoBar">
			<div className="leftInnerContainer">
				<img src={onlineIcon} className="onlineIcon" alt="online icon" />
				<h3>{roomName}</h3>
			</div>
			<div className="rightInnerContainer">
				<a href="/"><img src={closeIcon} alt="close" /></a>
			</div>
		</div>
	)
}

export default InfoBar;
