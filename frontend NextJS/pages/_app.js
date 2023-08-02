import '../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  return <>
   
    <ThemeProvider attribute='class' defaultTheme='light'>
      <NextNProgress height={4} color="rgb(110, 13, 237)" startPosition={0} stopDelayMs={10} options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </ThemeProvider>
    <Analytics />
  </>
}

export default MyApp
