import { memo, VFC, useState, FormEvent, useCallback } from 'react';

import { Button, FormControl, Textarea } from '@chakra-ui/react';

type Props = {
	addChat: (text: string) => void;
};

export const ChatForm: VFC<Props> = memo((props) => {
	const { addChat } = props;
	const [text, setText] = useState('');

	// 入力されたコメントを追加する処理
	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			addChat(text);
			setText('');
		},
		[text, addChat]
	);
	return (
		<form onSubmit={handleSubmit}>
			<FormControl
				m={2}
				display='flex'
				justifyContent='space-around'
				alignItems='center'
			>
				<Textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder='チャットを入力....'
					w={{ base: '70%', md: '85%' }}
				/>
				<Button
					type='submit'
					mr={{ base: '15px', md: '30px' }}
					colorScheme='pink'
					shadow='md'
					disabled={text.trim() === ''}
				>
					送信
				</Button>
			</FormControl>
		</form>
	);
});
