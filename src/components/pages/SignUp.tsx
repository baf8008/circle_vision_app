import { VFC, memo, useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { auth } from '../../firebase/config';

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

export const SignUp: VFC = memo(() => {
	const [show, setShow] = useState(false);
	const handleClickPassword = useCallback(
		() => setShow(!show),
		[show, setShow]
	);

	const history = useHistory();
	const handleClickLogin = useCallback(() => history.push('/'), [history]);

	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			auth
				.createUserWithEmailAndPassword(email, password)
				.then((userCredential) => {
					userCredential.user?.updateProfile({ displayName: username });
					history.push('/home');
					console.log('ユーザー作成成功', userCredential);
				})
				.catch((err) => {
					alert(
						'ユーザー作成できません。ユーザーネーム,メールアドレス,パスワード（6文字以上）を確認してください。'
					);
					console.log('ユーザー作成失敗', err);
				});
		},
		[username, email, password, history]
	);

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
				<form onSubmit={handleSubmit}>
					<Flex align='center' justify='space-between' direction='column'>
						<InputGroup>
							<InputLeftElement
								pointerEvents='none'
								children={<Avatar h={5} w={5} color='gray.300' />}
							/>
							<Input
								variant='flushed'
								placeholder='*ユーザーネーム'
								value={username}
								mb={4}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</InputGroup>
						<InputGroup>
							<InputLeftElement
								pointerEvents='none'
								children={<EmailIcon color='gray.300' h={5} w={5} />}
							/>
							<Input
								variant='flushed'
								placeholder='*メールアドレス'
								value={email}
								mb={4}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</InputGroup>
						<InputGroup>
							<InputLeftElement
								pointerEvents='none'
								children={<UnlockIcon color='gray.300' h={5} w={5} />}
							/>
							<Input
								variant='flushed'
								type={show ? 'text' : 'password'}
								value={password}
								placeholder='*パスワード(半角英数字で6文字以上)'
								mb={4}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<InputRightElement width='4.5rem'>
								<Button size='sm' onClick={handleClickPassword}>
									{show ? <ViewOffIcon /> : <ViewIcon />}
								</Button>
							</InputRightElement>
						</InputGroup>
						<Button type='submit' colorScheme='blue' size='md' shadow='md'>
							登録
						</Button>
						<Link mt={3} onClick={handleClickLogin}>
							アカウントをお持ちの方
						</Link>
					</Flex>
				</form>
			</Box>
		</Flex>
	);
});
