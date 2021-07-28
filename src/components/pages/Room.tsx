import { VFC, memo, useContext, useEffect, useState, useCallback } from 'react';

import { Flex } from '@chakra-ui/react';

import { ChatItem } from '../organisms/layout/ChatItem';
import { ChatForm } from '../organisms/layout/ChatForm';
import { HeadingTitle } from '../atoms/headingTitle/HeadingTitle';
import { AuthContext } from '../providers/AuthProvider';
import firebase, { db } from '../../firebase/config';

export const Room: VFC = memo(() => {
	const authSate = useContext(AuthContext);

	const [messages, setMessages] = useState<firebase.firestore.DocumentData[]>(
		[]
	);

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
		messagesRef.onSnapshot((querySnapshot) => {
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
						/>
					);
				})}
			</Flex>
		</>
	);
});
