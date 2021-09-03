import { VFC, memo, useContext } from 'react';

import { AuthContext } from '../providers/AuthProvider';

export const Yoga: VFC = memo(() => {
	const value = useContext(AuthContext);
	console.log(value);
	return (
		<>
			<p>聴きヨガページ</p>
		</>
	);
});
