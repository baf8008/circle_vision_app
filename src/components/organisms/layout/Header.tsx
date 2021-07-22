import { VFC, memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';

import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';

export const Header: VFC = memo(() => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const history = useHistory();

	const onClickHome = useCallback(() => history.push('/home'), [history]);
	const onClickAppInfo = useCallback(
		() => history.push('/home/appinfo'),
		[history]
	);
	const onClickYoga = useCallback(() => history.push('/home/yoga'), [history]);
	const onClickLogOut = useCallback(() => history.push('/'), [history]);

	return (
		<>
			<Flex
				as='nav'
				align='center'
				justify='space-between'
				bg='blue.600'
				color='white'
				padding={{ base: 3, md: 5 }}
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
			/>
		</>
	);
});
