import { VFC, memo, useContext, useEffect, useState, useCallback } from 'react';

import { Flex } from '@chakra-ui/react';

import firebase, { db } from '../../firebase/config';

import { AuthContext } from '../providers/AuthProvider';

import { ChatItem } from '../organisms/layout/ChatItem';
import { ChatForm } from '../organisms/layout/ChatForm';
import { HeadingTitle } from '../atoms/headingTitle/HeadingTitle';
import { DeleteChatDialog } from '../molecules/DeleteChatDialog';

export const Room: VFC = memo(() => {
	const authSate = useContext(AuthContext);

	const [messages, setMessages] = useState<firebase.firestore.DocumentData[]>(
		[]
	);

	const [deleteChatId, setDeleteChatId] = useState('');

	//チャットを削除するDialogを閉じる処理
	const closeDeleteChatDialog = useCallback(() => setDeleteChatId(''), []);

	//chatItemに入力されたコメント、ユーザー名を追加する処理
	const addChat = useCallback(
		(text: string) => {
			db.collection('messages')
				.add({
					authorId: authSate.user?.uid,
					username: authSate.user?.displayName,
					createdAt: firebase.firestore.FieldValue.serverTimestamp(),
					content: text,
				})
				.then(() => {
					console.log('追加成功');
				})
				.catch((err) => {
					console.log('追加失敗:', err);
				});
		},
		[authSate.user?.displayName, authSate.user?.uid]
	);

	//firebaseのデータの変更があったときに、データを取得する処理
	useEffect(() => {
		const messagesRef = db.collection('messages');
		messagesRef.orderBy('createdAt').onSnapshot((querySnapshot) => {
			const data = querySnapshot.docs.map((doc) => {
				return {
					...doc.data(),
					id: doc.id,
				};
			});
			setMessages(data);
			console.log(data);
		});
	}, []);

	//コメントの削除機能
	const deleteChat = useCallback(
		(id: string) => {
			db.collection('messages')
				.doc(id)
				.delete()
				.then(() => {
					closeDeleteChatDialog();
					console.log('削除完了');
				})
				.catch((err) => {
					console.log('削除失敗:', err);
				});
		},
		[closeDeleteChatDialog]
	);

	return (
		<>
			<Flex>
				<HeadingTitle>チャットルーム</HeadingTitle>
			</Flex>
			<ChatForm addChat={addChat} />
			<Flex alignItems='left' direction='column'>
				{messages.map((message) => {
					return (
						<ChatItem
							key={message.id}
							username={message.username}
							body={message.content}
							isAuthor={message.authorId === authSate.user?.uid}
							onClick={() => setDeleteChatId(message.id)}
						/>
					);
				})}
				<DeleteChatDialog
					isOpen={deleteChatId !== ''}
					onCancel={closeDeleteChatDialog}
					onComplete={() => deleteChat(deleteChatId)}
				/>
			</Flex>
		</>
	);
});
