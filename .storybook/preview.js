import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { adminTheme, mainTheme } from "../src/theme/themes";
import GlobalStyle from "../src/theme/globalStyle";
import { MemoryRouter } from "react-router";

const storyPreviewStyles = { minHeight: "100vh", overflow: "hidden" };

addDecorator((story) => (
  <div style={storyPreviewStyles}>
    <GlobalStyle />
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  </div>
));

addDecorator(withThemesProvider([mainTheme, adminTheme]), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
