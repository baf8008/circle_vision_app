import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import globalTheme from './theme/GlobalTheme';
import { Router } from './router/Router';
import { AuthProvider } from './components/providers/AuthProvider';

export const App = () => {
	return (
		<ChakraProvider theme={globalTheme}>
			<AuthProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</AuthProvider>
		</ChakraProvider>
	);
};
