import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
} from '@chakra-ui/react';
import { memo, VFC } from 'react';

type Props = {
	isOpen: boolean;
	onCancel: () => void;
	onComplete: () => void;
};

export const DeleteChatDialog: VFC<Props> = memo((props) => {
	const { isOpen, onCancel, onComplete } = props;

	return (
		<AlertDialog
			motionPreset='scale'
			isOpen={isOpen}
			leastDestructiveRef={undefined}
			onClose={onCancel}
		>
			<AlertDialogOverlay>
			<AlertDialogContent mx={5}>
				<AlertDialogHeader
					fontSize={{ base: 'sm', md: 'xl' }}
					fontWeight='bold'
				>
					本当に、コメントを削除してもよろしいでしょうか？
				</AlertDialogHeader>
				<AlertDialogFooter>
					<Button onClick={onCancel}>いいえ</Button>
					<Button onClick={onComplete} colorScheme='red' ml={3}>
						はい
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
});
