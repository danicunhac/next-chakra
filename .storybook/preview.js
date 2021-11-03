import { theme } from '../src/styles/global';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ChakraProvider } from '@chakra-ui/react';

const themes = [theme];
addDecorator(withThemesProvider(themes), ChakraProvider);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <>
      <Story />
      <GlobalStyle />
    </>
  ),
];
