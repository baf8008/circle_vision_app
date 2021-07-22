import { VFC, memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '@chakra-ui/react';

export const Page404: VFC = memo(() => {
	const history = useHistory();

	const onClickLoginButton = useCallback(() => history.push('/'), [history]);
	return (
		<>
			<p>404ページ</p>
			<Button onClick={onClickLoginButton}>ログイン画面へ</Button>
		</>
	);
});
