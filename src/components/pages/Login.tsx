import { VFC, memo, useState, useCallback, FormEvent, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Text,
	Link,
} from '@chakra-ui/react';
import { EmailIcon, UnlockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { auth } from '../../firebase/config';

import { useMessage } from '../../hooks/useMessage';
import { AuthContext } from '../providers/AuthProvider';

export const Login: VFC = memo(() => {
	//パスワードの表示／非表示処理
	const [show, setShow] = useState(false);
	const handleClickPassword = useCallback(
		() => setShow(!show),
		[show, setShow]
	);

	const history = useHistory();
	//ユーザー登録画面に遷移する処理
	const handleClickSignUp = useCallback(
		() => history.push('/signup'),
		[history]
	);

	const { showMessage } = useMessage();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	//userがログイン状態のときは、homeに留まる処理
	const authState = useContext(AuthContext);
	if (authState.user) {
		return <Redirect to='/home' />;
	}

	//firebaseのメール・パスワード認証を連携する処理
	const handleLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				if (userCredential.user) {
					showMessage({
						title: `ようこそ！${userCredential.user.displayName}さん`,
						status: 'success',
					});
					history.push('/home');
				}
				console.log('ログイン成功', userCredential);
			})
			.catch((err) => {
				showMessage({
					title: 'ログインできません。',
					description: 'メールアドレスとパスワードを再度ご確認ください。',
					status: 'error',
				});
				console.log('ログイン失敗', err);
			});
	};

	return (
		<>
			<Flex align='center' justify='center' bg='cyan.700'>
				<Heading
					as='h1'
					fontSize={{ base: 'xl', md: '3xl' }}
					py={3}
					color='white'
				>
					視覚の輪
					<span
						style={{
							fontStyle: 'italic',
							fontWeight: 'normal',
						}}
					>
						~ Circle of vision ~
					</span>
				</Heading>
			</Flex>
			<Flex align='center' justify='center' m={{ base: '5', md: '10' }}>
				<Text fontSize={{ base: 'md', md: 'xl' }}>
					視覚の輪とは、目の不自由なすべての方、目の不自由な方と関わっている方、医療・福祉の方々にとって、より良い関係を築くためのコミュニティーの場です。
					<br />
					このアプリには、目の不自由な方に役立つアプリの紹介や聴きながらヨガができるヨガ動画、誰でも参加できるチャットルームがあります。
					<br />
					お好きな時間に、お好きなところで、ご活用ください。
				</Text>
			</Flex>
			<Accordion allowMultiple px={{ base: '5', md: '10' }}>
				<AccordionItem bg='white'>
					<AccordionButton>
						<Box flex='1' textAlign='left'>
							<Heading as='h1' size='md'>
								ログイン
							</Heading>
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<form onSubmit={handleLogin}>
							<Flex align='center' justify='space-between' direction='column'>
								<InputGroup mt={5}>
									<InputLeftElement
										pointerEvents='none'
										children={<EmailIcon color='gray.300' h={5} w={5} />}
									/>
									<Input
										variant='flushed'
										placeholder='*メールアドレス'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										mb={4}
									/>
								</InputGroup>
								<InputGroup mt={5}>
									<InputLeftElement
										pointerEvents='none'
										children={<UnlockIcon color='gray.300' h={5} w={5} />}
									/>
									<Input
										variant='flushed'
										placeholder='*パスワード'
										type={show ? 'text' : 'password'}
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										mb={4}
									/>
									<InputRightElement width='2.0rem'>
										<Button size='sm' onClick={handleClickPassword}>
											{show ? <ViewOffIcon /> : <ViewIcon />}
										</Button>
									</InputRightElement>
								</InputGroup>
								<Button
									type='submit'
									disabled={email.trim() === '' && password.trim() === ''}
									colorScheme='blue'
									size='md'
									shadow='md'
								>
									ログイン
								</Button>
								<Link mt={3} onClick={handleClickSignUp}>
									アカウントをお持ちでない方
								</Link>
							</Flex>
						</form>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
});
