import React from 'react'
import { TabPane, Tab } from 'semantic-ui-react'

const panes = [
	{
		menuItem: 'Send notification',
		render: () => (
			<TabPane>Tab 1 Content</TabPane>
		)
	},
	{
		menuItem: 'Subscribe to notification',
		render: () => (
			<TabPane>Tab 2 Content</TabPane> 
		)
	},
	{
		menuItem: 'Dashboard',
		render: () => (
			<TabPane>Tab 3 Content</TabPane>
		)
	}
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic