import React from 'react';
import { connect } from 'react-redux';
import { Button, Message } from 'semantic-ui-react';
import './subscription.css';

import { mapState, mapDispatch } from './subscription.controller'

const SubscribeTab = ({ subscribed, loading, error, subscribe }) => {
	const handleSubscribe = () => {
	  	subscribe();
	};
  
	return (
		<div style={{ margin: '50px auto', 'border-radius': '10px' }}>
			<Button
				className="subscribe-button"
				onClick={handleSubscribe}
				loading={loading}
				disabled={loading}
				style={{ height: '45px', 'background-color': '#2f3033', color: 'white' }}
			>
				Subscribe to Notification
			</Button>
			{subscribed && <Message className="success-message" success content="Subscribed!" />}
			{error && <Message className="error-message"error content="Sorry, for some reasons we can't subscribe you now :( Please try again later." />}
		</div>
	);
};
  

export default connect(mapState, mapDispatch)(SubscribeTab);