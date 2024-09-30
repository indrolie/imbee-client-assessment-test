import React, { useState } from 'react';
import { Button, Input, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { mapState, mapDispatch } from './broadcast.controller'

const BroadcastTab = ({ broadcasted, error, loading, broadcastMessage }) => {
	const [message, setMessage] = useState('');

	const handleBroadcast = () => {
		broadcastMessage(message);
	};

	return (
		<div>
			<Input
				placeholder="Enter message to broadcast"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<Button onClick={handleBroadcast} color="blue" loading={loading} disabled={loading}>Broadcast</Button>
			{broadcasted && <Message success content="Message broadcasted to all devices!" />}
			{error && <Message error content={`Broadcast failed: ${error}`} />}
		</div>
	);
};

export default connect(mapState, mapDispatch)(BroadcastTab);