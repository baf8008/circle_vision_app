import { memo, VFC } from 'react';

import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
} from '@chakra-ui/react';

type Props = {
	onClose: () => void;
	isOpen: boolean;
	onClickHome: () => void;
	onClickLogOut: () => void;
	onClickYoga: () => void;
	onClickAppInfo: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
	const {
		onClose,
		isOpen,
		onClickHome,
		onClickAppInfo,
		onClickLogOut,
		onClickYoga,
	} = props;
	return (
		<Drawer placement='right' size='xs' onClose={onClose} isOpen={isOpen}>
			<DrawerOverlay>
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader textAlign='center' bg='blue.50' borderBottomWidth='2px'>
						メニュー一覧
					</DrawerHeader>
					<DrawerBody p={1} bg='blue.50'>
						<Button isFullWidth mt={1} variant='unstyled' onClick={onClickHome}>
							HOME
						</Button>
						<Button
							isFullWidth
							mt={1}
							variant='unstyled'
							onClick={onClickAppInfo}
						>
							アプリ紹介
						</Button>
						<Button isFullWidth mt={1} variant='unstyled' onClick={onClickYoga}>
							聴きヨガ
						</Button>
						<Button
							isFullWidth
							mt={1}
							variant='unstyled'
							onClick={onClickLogOut}
						>
							ログアウト
						</Button>
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
});
