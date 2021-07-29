import { memo, VFC, useContext, ReactNode } from 'react';
import { Redirect } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { AuthContext } from '../components/providers/AuthProvider';

type Props = {
	children: ReactNode;
};

export const LoggedInRoute: VFC<Props> = memo((props) => {
	const { children } = props;
	const authState = useContext(AuthContext);
	if (authState.loading) {
		return (
			<Spinner
				thickness='4px'
				speed='0.65s'
				emptyColor='gray.200'
				color='blue.500'
				size='xl'
			/>
		);
	}
	if (authState.user === null) {
		return <Redirect to='/' />;
	}
	return children;
});
