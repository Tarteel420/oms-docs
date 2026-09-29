import fs from 'node:fs';
import path from 'node:path';
import { ImageIcon } from 'lucide-react';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';

interface ScreenshotProps {
  /**
   * Suggested image path, relative to `public/screenshots/`.
   * Drop a real screenshot at this path and it replaces the placeholder automatically.
   */
  file: string;
  /** Screen that should be captured, e.g. "Orders page". */
  title: string;
  /** What the screenshot should show and which step it illustrates. */
  description: string;
}

export function Screenshot({ file, title, description }: ScreenshotProps) {
  const publicPath = `/screenshots/${file}`;
  const exists = fs.existsSync(path.join(process.cwd(), 'public', 'screenshots', file));

  if (exists) {
    return (
      <figure className="my-6">
        <ImageZoom
          src={publicPath}
          alt={`${title}: ${description}`}
          width={1600}
          height={900}
          className="rounded-lg border shadow-sm"
        />
        <figcaption className="mt-2 text-center text-sm text-fd-muted-foreground">{title}</figcaption>
      </figure>
    );
  }

  return (
    <figure
      className="not-prose my-6 flex aspect-[16/8] w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-fd-border bg-fd-card px-6 text-center"
      role="img"
      aria-label={`Screenshot placeholder: ${title}`}
    >
      <div className="flex size-11 items-center justify-center rounded-full bg-fd-secondary text-fd-muted-foreground">
        <ImageIcon className="size-5" />
      </div>
      <span className="rounded-full border border-fd-border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-fd-muted-foreground">
        Screenshot placeholder
      </span>
      <p className="text-base font-semibold text-fd-foreground">{title}</p>
      <p className="max-w-xl text-sm text-fd-muted-foreground">{description}</p>
      <code className="rounded bg-fd-secondary px-2 py-0.5 text-xs text-fd-muted-foreground">
        public{publicPath}
      </code>
    </figure>
  );
}
