import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import '@fontsource-variable/inter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | EZ-OMS Docs',
    default: 'EZ-OMS Docs',
  },
  description: 'User guide for EZ-OMS, the recycling kit order management system.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{ defaultTheme: 'dark' }}>{children}</RootProvider>
      </body>
    </html>
  );
}
