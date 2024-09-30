import React from 'react'
import { TabPane, Tab } from 'semantic-ui-react'

import SubscribeTab from '../Subscription/subscription'
import BroadcastTab from '../Broadcast/broadcast'

const panes = [
	{
		menuItem: 'Send notification',
		render: () => (
			<TabPane>
				<SubscribeTab/>
			</TabPane>
		)
	},
	{
		menuItem: 'Subscribe to notification',
		render: () => (
			<TabPane>
				<BroadcastTab/>
			</TabPane> 
		)
	}
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic