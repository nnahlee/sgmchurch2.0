# AGENTS.md

## Project

Next.js 15 App Router application using TypeScript, React 19, Tailwind CSS 4, shadcn/ui/Radix, and server-side integrations.

## Stack

- Next.js 15.5.3 — App Router
- React 19.1
- TypeScript 5 — strict mode
- Tailwind CSS 4
- Radix UI / shadcn/ui
- Zod 4
- ZSA for server actions
- React Hook Form
- Stripe + PayPal
- React Email + Nodemailer
- Framer Motion
- Sonner
- pnpm

## Rules

### TypeScript

- Use strict, explicit TypeScript.
- Do not use `any` unless absolutely unavoidable.
- Prefer inferred types when they remain clear.
- Use Zod for runtime validation of external/user input.
- Keep server-only code and secrets out of client components.

### Next.js

- Use the App Router.
- Use Server Components by default.
- Add `"use client"` only when client-side state, effects, browser APIs, or event handlers are required.
- Use Server Actions for server-side mutations.
- Use `redirect` from `next/navigation`.
- Never expose secret environment variables with `NEXT_PUBLIC_`.

### Components

- Prefer reusable components over duplicated UI.
- Use existing shadcn/ui/Radix components when appropriate.
- Use Tailwind for styling.
- Use `cn()`/`tailwind-merge` when conditional Tailwind classes are needed.
- Keep components focused and reasonably small.

### Forms & Validation

- Use React Hook Form for complex forms.
- Use Zod schemas for validation.
- Validate data on the server even when client-side validation exists.

### Payments

- Keep Stripe/PayPal secret keys server-side.
- Never expose secret keys or commit `.env.local`.
- Keep test and production Stripe credentials/prices correctly separated.
- Do not trust client-provided payment status; verify payment state server-side.

### Environment Variables

- `.env.local` contains local secrets and must never be committed.
- Production environment variables are configured separately in Vercel.
- Use `NEXT_PUBLIC_` only for values that are safe to expose to the browser.

### Code Quality

- Follow existing project patterns before introducing new abstractions.
- Avoid unnecessary dependencies.
- Prefer simple, maintainable solutions over premature optimization.
- Before finishing a change, run:
  - `pnpm build`
  - relevant tests/checks if available.
- Fix TypeScript/build errors rather than suppressing them with `@ts-ignore` or `@ts-expect-error`.

### Git

- Make focused commits with descriptive messages.
- Do not commit secrets, credentials,
