import { VFC, memo, ReactNode } from 'react';

import { Button } from '@chakra-ui/react';

type Props={
  onClick:()=>void;
  children:ReactNode
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const{onClick,children}=props
	return (
		<Button colorScheme='blue' size='md' onClick={onClick} >
		{children}
		</Button>
	);
});
