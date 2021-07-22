import { extendTheme } from '@chakra-ui/react';

const globalTheme = extendTheme({
	styles: {
		global: {
			body: {
				backgroundColor: 'cyan.50',
				color: 'gray.800',
				fontFamily:
					"'ヒラギノ角ゴシック','Hiragino Sans','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3','ＭＳ ゴシック','ＭＳ Ｐゴシック','MS PGothic',sans-serif",
			},
		},
	},
});

export default globalTheme;
