# Still website

The official marketing, support, privacy, and terms website for Still—the iOS-first companion for adults changing their relationship with alcohol.

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
npm test
```

The site is a self-contained Next.js codebase that exports to static HTML. The generated `out/` directory can be hosted on any static provider and attached to any domain the company owns.

Set `NEXT_PUBLIC_SITE_URL` to the final public origin before deploying:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example npm run build
```

Product screenshots are checked into `public/app` so this repository can be deployed independently from the iOS repository.

## Routes

- `/` — product marketing
- `/support` — app help and U.S. safety resources
- `/privacy` — privacy policy
- `/terms` — terms of use

Still is wellness and behavior-change support, not medical care, diagnosis, detox, or treatment.
