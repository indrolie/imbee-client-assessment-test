import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../Home'
import './index.css'

class App extends Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route exact path ='/' element={<Home />} />
				</Routes>
			</Router>
		)
	}
}

export default App