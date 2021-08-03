import { Switch, Route } from 'react-router-dom';
import { memo, VFC } from 'react';

import { Login } from '../components/pages/Login';
import { homeRoutes } from './HomeRoutes';
import { SignUp } from '../components/pages/SignUp';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/templates/HeaderLayout';
import { LoggedInRoute } from './LoggedInRoute';

export const Router: VFC = memo(() => {
	return (
		<Switch>
			<Route exact path='/'>
				<Login />
			</Route>
			<Route exact path='/signup'>
				<SignUp />
			</Route>
			<Route
				path='/home'
				render={({ match: { url } }) => (
					<Switch>
						{homeRoutes.map((route) => (
							<Route
								key={route.path}
								exact={route.exact}
								path={`${url}${route.path}`}
							>
								<LoggedInRoute>
									<HeaderLayout>{route.children}</HeaderLayout>
								</LoggedInRoute>
							</Route>
						))}
					</Switch>
				)}
			/>
			<Route path='*'>
				<Page404 />
			</Route>
		</Switch>
	);
});
