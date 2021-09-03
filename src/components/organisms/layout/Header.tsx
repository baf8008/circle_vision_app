import { VFC, memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';

import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';
import { auth } from '../../../firebase/config';
import { useMessage } from '../../../hooks/useMessage';

export const Header: VFC = memo(() => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const history = useHistory();

	const { showMessage } = useMessage();

	//それぞれの遷移先
	const onClickHome = useCallback(() => history.push('/home'), [history]);
	const onClickAppInfo = useCallback(
		() => history.push('/home/appinfo'),
		[history]
	);
	const onClickChatRoom = useCallback(
		() => history.push('/home/room'),
		[history]
	);
	const onClickYoga = useCallback(() => history.push('/home/yoga'), [history]);

	//signoutの処理
	const onClickLogOut = useCallback(() => {
		auth
			.signOut()
			.then(() => {
				showMessage({
					title: 'ログアウトしました。',
					description: 'またお越しください！',
					status: 'success',
				});
				console.log('ログアウト成功');
			})
			.catch((err) => console.log('ログアウト失敗', err));
	}, [showMessage]);

	return (
		<>
			<Flex
				as='nav'
				align='center'
				justify='space-between'
				bg='blue.600'
				color='white'
				padding={{ base: 3, md: 5 }}
				w='100vw'
			>
				<Flex
					align='center'
					as='a'
					mr={8}
					_hover={{ cursor: 'pointer' }}
					onClick={onClickHome}
				>
					<Heading as='h1' fontSize={{ base: '2xl', md: '4xl' }}>
						視覚の輪
					</Heading>
				</Flex>
				<Flex
					align='center'
					fontSize='md'
					flexGrow={2}
					display={{ base: 'none', md: 'flex' }}
				>
					<Box pr={4}>
						<Link onClick={onClickAppInfo}>アプリ紹介</Link>
					</Box>
					<Box pr={4}>
						<Link onClick={onClickChatRoom}>チャットルーム</Link>
					</Box>
					<Box pr={4}>
						<Link onClick={onClickYoga}>聴きヨガ</Link>
					</Box>
					<Link onClick={onClickLogOut}>ログアウト</Link>
				</Flex>
				<MenuIconButton onOpen={onOpen} />
			</Flex>
			<MenuDrawer
				onClose={onClose}
				isOpen={isOpen}
				onClickHome={onClickHome}
				onClickAppInfo={onClickAppInfo}
				onClickYoga={onClickYoga}
				onClickLogOut={onClickLogOut}
				onClickChatRoom={onClickChatRoom}
			/>
		</>
	);
});
