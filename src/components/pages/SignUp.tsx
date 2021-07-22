import { VFC, memo, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import {
	Avatar,
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Link,
} from '@chakra-ui/react';
import { EmailIcon, UnlockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const SignUp: VFC = memo(() => {
	const [show, setShow] = useState(false);
	const handleClickPassword = useCallback(
		() => setShow(!show),
		[show, setShow]
	);

	const history = useHistory();
	const onClickLogin = useCallback(() => history.push('/home'), [history]);
	const handleClickLogin = useCallback(() => history.push('/'), [history]);

	return (
		<Flex align='center' justify='center' height='100vh'>
			<Box
				bg='white'
				w={{ base: '2sm', md: 'xl' }}
				p={{ base: 4, md: 6 }}
				borderRadius='xl'
				shadow='md'
			>
				<Heading as='h1' size='xl' textAlign='center'>
					ユーザー登録
				</Heading>
				<Divider my={4} />
				<Flex align='center' justify='space-between' direction='column'>
					<InputGroup>
						<InputLeftElement
							pointerEvents='none'
							children={<Avatar h={5} w={5} color='gray.300' />}
						/>
						<Input variant='flushed' placeholder='ユーザーネーム' mb={4} />
					</InputGroup>
					<InputGroup>
						<InputLeftElement
							pointerEvents='none'
							children={<EmailIcon color='gray.300' h={5} w={5} />}
						/>
						<Input variant='flushed' placeholder='メールアドレス' mb={4} />
					</InputGroup>
					<InputGroup>
						<InputLeftElement
							pointerEvents='none'
							children={<UnlockIcon color='gray.300' h={5} w={5} />}
						/>
						<Input
							variant='flushed'
							type={show ? 'text' : 'password'}
							placeholder='パスワード'
							mb={4}
						/>
						<InputRightElement width='4.5rem'>
							<Button size='sm' onClick={handleClickPassword}>
								{show ? <ViewOffIcon /> : <ViewIcon />}
							</Button>
						</InputRightElement>
					</InputGroup>
					<PrimaryButton onClick={onClickLogin}>登録</PrimaryButton>
					<br />
					<Link onClick={handleClickLogin}>アカウントをお持ちの方</Link>
				</Flex>
			</Box>
		</Flex>
	);
});
