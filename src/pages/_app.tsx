// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { GlobalStyle } from "@/styles/GlobalStyle";
import TheDefaultLayout from "@/components/layouts/TheDefaultLayout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TheDefaultLayout>
        <Component {...pageProps} />
      </TheDefaultLayout>
    </ThemeProvider>
  );
};

export default App;
