import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';

function Logo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 17.5 8.5 9l4.5 6 3.5-5L21 17.5"
        stroke="var(--color-brand)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="19.5" cy="6" r="2" fill="var(--color-brand)" />
    </svg>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2.5 font-semibold">
          <Logo />
          {appName}
        </span>
      ),
      url: '/docs/getting-started',
    },
  };
}
