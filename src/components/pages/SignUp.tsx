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

import { useMessage } from '../../hooks/useMessage';

export const SignUp: VFC = memo(() => {
	//パスワードの非表示／表示の処理
	const [show, setShow] = useState(false);
	const handleClickPassword = useCallback(
		() => setShow(!show),
		[show, setShow]
	);

	//Login画面へ遷移
	const history = useHistory();
	const handleClickLogin = useCallback(() => history.push('/'), [history]);

	const { showMessage } = useMessage();

	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	//firebaseにユーザー新規登録をする処理
	const handleSignUp = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			auth
				.createUserWithEmailAndPassword(email, password)
				.then((userCredential) => {
					userCredential.user?.updateProfile({ displayName: username });
					auth.currentUser?.sendEmailVerification();

					if (userCredential.user) {
						showMessage({
							title: `はじめまして！${username}さん`,
							description:
								'登録されたメールアドレスに確認メールを送りました。確認してください。',
							status: 'success',
						});
						history.push('/home');
					}
					console.log('ユーザー作成成功', userCredential);
				})
				.catch((err) => {
					showMessage({
						title: 'ユーザー作成失敗!',
						description:
							'すべて正しく入力されましたか？パスワードは半角英数字6文字以上になります。',
						status: 'error',
					});
					console.log('ユーザー作成失敗', err);
				});
		},
		[username, email, password, history, showMessage]
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
				<form onSubmit={handleSignUp}>
					<Flex align='center' justify='space-between' direction='column'>
						<InputGroup>
							<InputLeftElement
								pointerEvents='none'
								children={<Avatar h={5} w={5} color='gray.300' />}
							/>
							<Input
								variant='flushed'
								placeholder='*ユーザーネーム'
								_placeholder={{ fontSize: { base: '10px', md: 'md' } }}
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
								_placeholder={{ fontSize: { base: '10px', md: 'md' } }}
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
								_placeholder={{ fontSize: { base: '10px', md: 'md' } }}
								mb={4}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<InputRightElement width='0.5rem'>
								<Button size='sm' onClick={handleClickPassword}>
									{show ? <ViewOffIcon /> : <ViewIcon />}
								</Button>
							</InputRightElement>
						</InputGroup>
						<Button
							type='submit'
							disabled={
								username.trim() === '' &&
								email.trim() === '' &&
								password.trim() === ''
							}
							colorScheme='blue'
							size='md'
							shadow='md'
						>
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
