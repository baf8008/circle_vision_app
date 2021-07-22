import { Home } from '../components/pages/Home';
import { Room } from '../components/pages/Room';
import { Yoga } from '../components/pages/Yoga';
import { AppInfo } from '../components/pages/AppInfo';
import { Page404 } from '../components/pages/Page404';

export const homeRoutes = [
	{
		path: '/',
		exact: true,
		children: <Home />,
	},
	{
		path: '/room',
		exact: false,
		children: <Room />,
	},
	{
		path: '/yoga',
		exact: false,
		children: <Yoga />,
	},
	{
		path: '/appinfo',
		exact: false,
		children: <AppInfo />,
	},
	{
		path: '*',
		exact: false,
		children: <Page404 />,
	},
];
