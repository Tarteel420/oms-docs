# EZ-OMS Docs

User guide for **EZ-OMS**, the recycling kit order management system, built with [Fumadocs](https://fumadocs.dev) (Next.js 16 + MDX).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000  → redirects to /docs/getting-started
npm run build      # production build
npm run start      # serve the production build
npm run types:check
```

## Structure

```
content/docs/
├── meta.json               # order of the top navbar sections
├── getting-started/        # each folder = one navbar tab ("root": true in its meta.json)
├── dashboard/
├── orders/
├── customer-ordering/
├── returns-processing/
├── products/
├── management/             # "Accounts" tab
├── support/                # Complaints
├── reports/                # "Reports" tab (invoicing + reports)
└── resources/
```

- **Navbar tabs** come from the root folders; their labels are the `title` in each folder's `meta.json`.
- **Sidebar order and group headings** come from the `pages` array in each `meta.json` (`"---Heading---"` creates a group heading).
- The single-row header (tabs left, theme toggle + search right) is `components/docs-header.tsx`.
- Brand colours (navy primary, green accent) are in `app/global.css`. Inter is self-hosted via `@fontsource-variable/inter`.

## Replacing screenshot placeholders

Every placeholder shows the file path it expects, for example:

```mdx
<Screenshot
  file="orders/order-list.png"
  title="Orders page — order list"
  description="..."
/>
```

Save the real screenshot at `public/screenshots/orders/order-list.png` and rebuild. The placeholder turns into the image automatically (with click-to-zoom). No MDX changes needed.

## Adding a page

1. Create `content/docs/<section>/<page>.mdx` with `title` and `description` frontmatter.
2. Add the file name (without `.mdx`) to that folder's `meta.json` `pages` array.
3. Link to it with an absolute route, e.g. `[Create an Order](/docs/orders/create-an-order)`.

Available MDX components: `Callout`, `Cards`/`Card`, `Steps`/`Step`, `Tabs`/`Tab`, `Screenshot`.

## Sources

Content is based on a read-only walkthrough of the live EZ-OMS app (Sep 2026), the EZ-OMS demo (23 Sep 2026) and the EZ-OMS SRS (v1.0). Where they differ, the live app wins. See **Resources → Documentation Notes**.

> Screenshots in `public/screenshots/` were captured from the live app and may contain real customer and order details. Review before publishing outside the company.
