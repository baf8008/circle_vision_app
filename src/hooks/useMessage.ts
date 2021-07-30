import { useCallback } from 'react';
import { useToast } from '@chakra-ui/react';

type Props = {
	title: string;
	description?: string;
	status: 'info' | 'warning' | 'success' | 'error';
};

export const useMessage = () => {
	const toast = useToast();

	const showMessage = useCallback(
		(props: Props) => {
			const { title, status, description = '' } = props;
			toast({
				title,
				status,
				description,
				position: 'top',
				duration: 6000,
				isClosable: true,
			});
		},
		[toast]
	);
	return { showMessage };
};
