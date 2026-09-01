---
name: configure-contact-email
description: Configure or replace this application's Gmail contact-form credentials in .env.local. Use when the user asks to set up, change, or rotate the inbox or Gmail settings used by the contact form.
---

# Configure Contact Email

Configure the Gmail-backed contact form without exposing credentials or changing unrelated environment settings.

## Workflow

1. Read `.env.example` and `src/features/contact/contact.ts` to confirm the currently supported variable names. Check whether `.env.local` exists, but never print its contents or include an existing secret in tool output.
2. Collect any values the user has not already supplied:
   - Gmail address used for SMTP authentication (`GMAIL_USER`).
   - Gmail app password (`GMAIL_APP_PASSWORD`). Explain that this must be a Google app password, not the account password, and that two-step verification must be enabled.
   - Destination inbox (`CONTACT_TO_EMAIL`). Offer the Gmail address as the default.
   - Sender display name (`CONTACT_FROM_NAME`). Offer `Southern Edge Services Website` as the default.
3. Validate both addresses as plausible email addresses. Remove spaces from the app password before writing it. Never repeat, summarize, log, or display the app password after the user provides it.
4. Once all values are available, state the destination file and the non-secret settings that will change, then ask for confirmation immediately before writing credentials.
5. Create or update `.env.local`. Replace only the four contact-email keys above, preserve unrelated variables and comments, and ensure each key occurs once. Do not modify `.env.example` with real credentials.
6. Confirm which keys were updated without showing their values. Remind the user that `.env.local` is gitignored and that the Next.js development server must be restarted to load the new values.

## Safety constraints

- Never read a current app password into the conversation or tool output.
- Never place credentials in a shell command, command-line argument, source file, tracked environment example, test fixture, commit, or final response.
- Do not send a test email unless the user separately requests it after configuration. Sending a message is an external side effect and requires confirmation of the recipient.
- If `.env.local` is not ignored by Git, stop before writing and fix or request permission to fix the ignore rule.
- If the user supplies a regular Gmail password, refuse to store it and direct them to create an app password at `https://myaccount.google.com/apppasswords`.
