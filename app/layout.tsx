import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import '@fontsource-variable/inter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | OMS Docs',
    default: 'OMS Docs',
  },
  description: 'User guide for OMS, the recycling kit order management system.',
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
