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
		<div className="subscribe-container">
			<Button className="subscribe-button" onClick={handleSubscribe} color="green" loading={loading} disabled={loading}>
				Subscribe to Notifications
			</Button>
			{subscribed && <Message className="success-message" success content="Subscribed!" />}
			{error && <Message className="error-message"error content="Sorry, for some reasons we can't subscribe you now :( Please try again later." />}
		</div>
	);
};
  

export default connect(mapState, mapDispatch)(SubscribeTab);