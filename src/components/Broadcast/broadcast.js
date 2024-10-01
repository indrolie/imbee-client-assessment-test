import React, { useState } from 'react';
import { Button, Input, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './broadcast.css';

import { mapState, mapDispatch } from './broadcast.controller'

const BroadcastTab = ({ broadcasted, error, loading, broadcastMessage }) => {
	const [message, setMessage] = useState('');

	const handleBroadcast = () => {
		broadcastMessage(message);
	};

	return (
		<div style={{ margin: '10px'}}>
			<Input
				placeholder="Enter message to broadcast"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				className="broadcast-input"
				style={{ height: '80px'}}
			/>
			<Button
				onClick={handleBroadcast}
				style={{ 'background-color': '#2f3033', color: 'white', height: '45px' }}
				loading={loading}
				disabled={loading}
				className="broadcast-button"
			>
				Broadcast
			</Button>
			{broadcasted && <Message success content="Message broadcasted to all devices!" />}
			{error && <Message error content={`Broadcast failed: ${error}`} />}
		</div>
	);
};

export default connect(mapState, mapDispatch)(BroadcastTab);