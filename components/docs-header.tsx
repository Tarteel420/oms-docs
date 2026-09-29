'use client';
import type { ComponentProps } from 'react';
import Link from 'fumadocs-core/link';
import { usePathname } from 'fumadocs-core/framework';
import { useNotebookLayout } from 'fumadocs-ui/layouts/notebook';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { Sidebar } from 'lucide-react';
import { cn } from '@/lib/cn';

/**
 * Single-row docs header: section tabs on the left, search + theme toggle on the right
 * (matches the AccountWise docs layout). Below `lg`, tabs move into the sidebar dropdown.
 */
export function DocsHeader({ className, ...props }: ComponentProps<'header'>) {
  const { slots, props: layout } = useNotebookLayout();
  const pathname = usePathname();
  const tabs = layout.tabs.filter((tab) => !tab.unlisted);

  return (
    <header
      id="nd-subnav"
      {...props}
      className={cn(
        'sticky [grid-area:header] top-(--fd-docs-row-1) z-10 flex h-14 items-center gap-2 border-b bg-fd-background/80 px-4 backdrop-blur-sm layout:[--fd-header-height:--spacing(14)] lg:px-6',
        className,
      )}
    >
      {/* Collapsed-sidebar trigger (desktop) and title (mobile) */}
      <div className="hidden items-center gap-2 has-data-[collapsed=true]:md:flex max-md:flex">
        {slots.sidebar && (
          <slots.sidebar.collapseTrigger
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon-sm' }),
              '-ms-1.5 text-fd-muted-foreground data-[collapsed=false]:hidden max-md:hidden',
            )}
          >
            <Sidebar />
          </slots.sidebar.collapseTrigger>
        )}
        {slots.navTitle && <slots.navTitle className="inline-flex items-center gap-2.5 font-semibold md:hidden" />}
      </div>

      <nav aria-label="Documentation sections" className="flex h-full min-w-0 flex-1 items-center gap-5 overflow-x-auto xl:gap-6 max-lg:hidden">
        {tabs.map((tab) => {
          const active = pathname === tab.url || pathname.startsWith(`${tab.url}/`);
          return (
            <Link
              key={tab.url}
              href={tab.url}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'whitespace-nowrap text-sm font-medium text-fd-muted-foreground transition-colors hover:text-fd-foreground',
                active && 'text-fd-primary hover:text-fd-primary',
              )}
            >
              {tab.title}
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-1 items-center justify-end gap-3 lg:flex-none">
        <div className="flex items-center md:hidden">
          {slots.searchTrigger && <slots.searchTrigger.sm hideIfDisabled className="p-2" />}
          {slots.sidebar && (
            <slots.sidebar.trigger className={cn(buttonVariants({ variant: 'ghost', size: 'icon-sm' }), 'p-2 -me-1.5')}>
              <Sidebar />
            </slots.sidebar.trigger>
          )}
        </div>
        <div className="flex items-center gap-3 max-md:hidden">
          {slots.themeSwitch && <slots.themeSwitch />}
          {slots.searchTrigger && (
            <>
              <slots.searchTrigger.sm hideIfDisabled className="p-2 min-[1536px]:hidden" />
              <slots.searchTrigger.full hideIfDisabled className="w-[200px] max-[1535px]:hidden" />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
