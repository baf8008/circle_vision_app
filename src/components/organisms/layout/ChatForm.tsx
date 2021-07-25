import { memo, VFC } from "react";

import { Button, FormControl, Textarea } from "@chakra-ui/react";

export const ChatForm:VFC=memo(()=>{
  return (
		<FormControl
			m={2}
			display='flex'
			justifyContent='space-around'
			alignItems='center'
		>
			<Textarea
				placeholder='チャットを入力....'
				w={{ base: '70%', md: '85%' }}
			/>
			<Button mr={{ base: '15px', md: '30px' }} colorScheme='pink' shadow='md'>
				送信
			</Button>
		</FormControl>
	);
})