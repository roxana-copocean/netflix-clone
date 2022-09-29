import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { UserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
	const { user } = useAuthListener();

	return (
		<Router>
			<Switch>
				{/* SignUp */}
				<UserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
					<Signup />
				</UserRedirect>
				{/* SignIn */}
				<UserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
					<Signin />
				</UserRedirect>
				{/* Browse */}
				<ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
					<Browse />
				</ProtectedRoute>
				{/* Home */}
				<UserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
					<Home />
				</UserRedirect>
			</Switch>
		</Router>
	);
}
