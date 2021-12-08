import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import {io} from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import TextContainer from '../TextContainer/TextContainer';

import {useLocation} from "react-router-dom";

let socket;
const ENDPOINT = 'https://chat-applicatn-react.herokuapp.com/';

const Chat = ({location}) => {

	const loc = useLocation();
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [users, setUsers] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const {name, room} = queryString.parse(loc.search)
		socket = io(ENDPOINT)
		setName(name)
		setRoom(room)
		socket.emit("join", { name, room }, () => {

		});

	}, [ENDPOINT, loc.search])

	useEffect(() => {
		socket.on('message', (message) => {
			setMessages([...messages, message])
		})

		socket.on("roomData", ({ users }) => {
	    	setUsers(users);
	    });
	}, [messages])

	const sendMessage = (event) => {
		event.preventDefault()
		if(message) {
			socket.emit('sendMessage', message, () => setMessage(''))
		}
	}

	return (
		<div className="outerContainer">
			<div className="container">
				<InfoBar roomName={room} />
				<Messages messages={messages} name={name} />
				<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
			</div>
			<TextContainer users={users} />
		</div>
	)
}

export default Chat;
