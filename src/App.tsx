import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import globalTheme from './theme/GlobalTheme';
import { Router } from './router/Router';

export const App = () => {
	return (
		<ChakraProvider theme={globalTheme}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ChakraProvider>
	);
};
