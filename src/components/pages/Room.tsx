import { VFC, memo } from 'react';

import {
	Badge,
	Box,
	Button,
	Flex,
	FormControl,
	Heading,
	Textarea,
	Text,
} from '@chakra-ui/react';

export const Room: VFC = memo(() => {
	return (
		<>
			<Flex>
				<Heading as='h1' size='xl' m='5px auto'>
					チャットルーム
				</Heading>
			</Flex>
			<FormControl
				m={2}
				display='flex'
				justifyContent='space-around'
				alignItems='center'
			>
				<Textarea
					placeholder='チャットを入力....'
					w={{ base: '70%', md: '85%' }}
				/>
				<Button
					mr={{ base: '15px', md: '30px' }}
					colorScheme='pink'
					shadow='md'
				>
					送信
				</Button>
			</FormControl>
			<Flex alignItems='left' direction='column'>
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
							ユーザー1
						</Text>
						<Button
							size='sm'
							fontSize={{ base: 'xs', md: 'xl' }}
							px={5}
							bg='gray.100'
							shadow='md'
							_hover={{ opacity: 0.8 }}
						>
							削除
						</Button>
					</Flex>
					<Text fontSize={{ base: 'sm', md: 'xl' }}>
						おはようオおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおお
					</Text>
				</Box>
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
							ユーザー2
						</Text>
						<Button
							size='sm'
							fontSize={{ base: 'xs', md: 'xl' }}
							px={5}
							bg='gray.100'
							shadow='md'
							_hover={{ opacity: 0.8 }}
						>
							削除
						</Button>
					</Flex>
					<Text fontSize={{ base: 'sm', md: 'xl' }}>こんにちわ</Text>
				</Box>
			</Flex>
		</>
	);
});
