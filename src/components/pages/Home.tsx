import { VFC, memo, useContext } from 'react';

import { AuthContext } from '../providers/AuthProvider';

export const Home: VFC = memo(() => {
	const value = useContext(AuthContext);
	console.log(value);
	return <p>ホームページ</p>;
});
