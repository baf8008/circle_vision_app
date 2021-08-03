import { memo, VFC, useContext, ReactNode } from 'react';
import { Redirect } from 'react-router-dom';

import { Flex, Spinner, Text } from '@chakra-ui/react';

import { AuthContext } from '../components/providers/AuthProvider';

type Props = {
	children: ReactNode;
};

export const LoggedInRoute: VFC<Props> = memo((props) => {
	const { children } = props;
	const authState = useContext(AuthContext);

	if (authState.loading) {
		return (
			<Flex align='center' justify='start'>
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='xl'
				/>
				<Text color='blue.500' fontSize='3xl'>
					ロード中・・・・
				</Text>
			</Flex>
		);
	}

	if (authState.user === null) {
		return <Redirect to='/' />;
	}

	return <>{children}</>;
});
