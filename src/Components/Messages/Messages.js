import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.css';
import Message from '../Message/Message';

const Messages = ({messages, name}) => {
	return(
		<ScrollToBottom className="messages">
			{messages.map((msg, i) => {
				return <div key={i}><Message msg={msg} name={name} /></div>
			})}
		</ScrollToBottom>
	)
}

export default Messages;
