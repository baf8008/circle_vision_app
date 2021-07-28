import { memo, useState, ReactNode, createContext, useEffect } from 'react';
import firebase, { auth } from '../../firebase/config';

type defaultValueType = {
	loading: boolean;
	user: firebase.User | null;
};

const defaultValue = { loading: true, user: null };

export const AuthContext = createContext<defaultValueType>(defaultValue);

export const AuthProvider = memo((props: { children: ReactNode }) => {
	const { children } = props;
	const [authState, setAuthState] = useState<defaultValueType>(defaultValue);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user === null) {
				setAuthState({ loading: false, user: null });
			} else {
				setAuthState({ loading: false, user });
			}
		});
	}, []);

	return (
		<AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
	);
});
