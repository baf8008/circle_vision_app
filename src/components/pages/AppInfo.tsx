import { VFC, memo, useContext } from 'react';

import { AuthContext } from '../providers/AuthProvider';

export const AppInfo: VFC = memo(() => {
		const value = useContext(AuthContext);
		console.log(value);
	return <p>アプリ紹介</p>;
});
