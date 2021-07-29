import { VFC, memo } from 'react';

import { Box, Button, Flex, Text } from '@chakra-ui/react';

type Props = {
	username: string;
	body: string;
	isAuthor: boolean;
	onClick: () => void;
};

export const ChatItem: VFC<Props> = memo((props) => {
	const { username, body, isAuthor, onClick } = props;
	return (
		<Box
			bg='white'
			w='80%'
			p={{ base: 4, md: 6 }}
			m={{ base: 4, md: 6 }}
			borderRadius='xl'
			shadow='md'
		>
			<Flex justify='space-between' mb={2}>
				<Text fontWeight='bold' fontSize={{ base: 'xl', md: '3xl' }}>
					{username}
				</Text>
				{isAuthor && (
					<Button
						onClick={onClick}
						size='sm'
						fontSize={{ base: 'xs', md: 'xl' }}
						px={5}
						bg='gray.100'
						shadow='md'
						_hover={{ opacity: 0.8 }}
					>
						削除
					</Button>
				)}
			</Flex>
			<Text fontSize={{ base: 'sm', md: 'xl' }}>{body}</Text>
		</Box>
	);
});
