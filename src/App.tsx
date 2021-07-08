import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './scenes/Auth/Login/Login'
import { Signup } from './scenes/Auth/Signup/Signup'
import moment from 'moment'

function App() {
  useEffect(() => {
    moment.locale("en");
  }, []);
	return (
		<Router>
			<Switch>
				<div className="h-100">
					<Route exact path="/" component={Login} />
					<Route exact path="/register" component={Signup} />
				</div>
			</Switch>
		</Router>
	)
}

export default App
