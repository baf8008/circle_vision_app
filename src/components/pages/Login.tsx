import { VFC, memo, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

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

import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const Login: VFC = memo(() => {
	const [show, setShow] = useState(false);
	const handleClickPassword = useCallback(
		() => setShow(!show),
		[show, setShow]
	);

	const history = useHistory();
	const onClickLogin = useCallback(() => history.push('/home'), [history]);
	const handleClickSignUp = useCallback(
		() => history.push('/signup'),
		[history]
	);

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
						<Flex align='center' justify='space-between' direction='column'>
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
							<PrimaryButton onClick={onClickLogin}>ログイン</PrimaryButton>
							<br />
							<Link onClick={handleClickSignUp}>
								アカウントをお持ちでない方
							</Link>
						</Flex>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
});
