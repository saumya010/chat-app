import React from 'react';
import ReactEmoji from 'react-emoji';
import './Message.css';

const Message = ({msg: {user, text}, name}) => {
	let isSentByCurrentUser = false;
	const trimmedName = name.trim().toLowerCase();
	if( user === trimmedName ) isSentByCurrentUser = true;
	return(
		isSentByCurrentUser
		?
		(
			<div className="msgContainer justifyEnd">
				<p className="sentText pr-10">{trimmedName}</p>
				<div className="msgBox bgBlue">
					<p className="msgText colorLight">{ReactEmoji.emojify(text)}</p>
				</div>
			</div>
		)
		: (
			<div className="msgContainer justifyStart">
				<div className="msgBox bgLight">
					<p className="msgText colorDark">{ReactEmoji.emojify(text)}</p>
				</div>
				<p className="sentText pl-10">{user}</p>
			</div>
		)
	)
}

export default Message;
