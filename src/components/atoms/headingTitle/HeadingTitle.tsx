import { memo, VFC, ReactNode } from 'react';

import { Heading } from '@chakra-ui/react';

type Props = {
	children: ReactNode;
};

export const HeadingTitle: VFC<Props> = memo((props) => {
	const { children } = props;
	return (
		<Heading as='h1' size='xl' m='5px auto'>
			{children}
		</Heading>
	);
});
