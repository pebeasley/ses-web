# Agent instructions

These instructions apply to the entire repository.

## Documentation-first changes

Before changing application code, configuration, dependencies, build tooling, styles, or tests:

1. Inspect `package.json` and the lockfile to identify the installed package and version involved in the change.
2. Read the relevant section of that package's current official `llms.txt` when one is listed below.
3. Read the specific official documentation page for the API, configuration option, or pattern being changed. An `llms.txt` index helps locate documentation; it does not replace the relevant page.
4. Prefer documentation bundled with the installed package when it is version-matched. Otherwise use the package's official website or official repository. Do not use blogs, snippets, search summaries, or training-memory as the source of truth when primary documentation is available.
5. If official documentation conflicts with existing code or prior knowledge, follow the documentation that matches the installed version and call out any resulting migration or compatibility concern.

Only load documentation relevant to the change. A task involving one dependency does not require reading every dependency's documentation. Read transitive dependency documentation only when directly changing or relying on that dependency's behavior.

## Required documentation routes

### Next.js

- Always start with the official Next.js LLM index: <https://nextjs.org/docs/llms.txt>.
- Before any Next.js change, search and read the relevant version-matched documentation under `node_modules/next/dist/docs/`. This local documentation matches the installed Next.js release and takes precedence over unversioned examples.
- This includes App Router files, Server Components, Server Actions, metadata, caching, environment variables, images, fonts, routing, configuration, and builds.

### React and React DOM

- Always start with the official React LLM index: <https://react.dev/llms.txt>.
- Follow the links in that index to the relevant official React or React DOM reference page before changing components, hooks, forms, state, effects, refs, Server Functions, or client/server boundaries.
- Use the React Compiler sections in the same official index for compiler-related changes.

### DaisyUI

- For components, themes, semantic colors, or DaisyUI class changes, read the relevant section of the official DaisyUI LLM file: <https://daisyui.com/llms.txt>.
- Confirm guidance applies to the installed DaisyUI major version.

### Zod

- For schemas, parsing, validation, error formatting, or type inference, start with the official Zod LLM index: <https://zod.dev/llms.txt>, then read the linked API page relevant to the change.

## Dependencies without a confirmed official public llms.txt

No confirmed official public `llms.txt` is currently available for the dependencies below. Use only the linked official documentation plus installed package documentation such as `README.md`, type declarations, and package metadata:

- Tailwind CSS and `@tailwindcss/postcss`: <https://tailwindcss.com/docs>
- Nodemailer: <https://nodemailer.com/>
- TypeScript: <https://www.typescriptlang.org/docs/>
- ESLint: <https://eslint.org/docs/latest/>
- Node.js types and runtime APIs: <https://nodejs.org/docs/latest/api/>

For `@types/*` packages, use the corresponding library/runtime's official documentation and inspect the installed declarations when exact types matter. For `eslint-config-next`, use both the installed Next.js documentation and official ESLint documentation. For React Compiler Babel plugin behavior, use the React Compiler documentation linked from React's official `llms.txt`.

If a dependency later publishes an official `llms.txt`, verify that it is served from the dependency's official domain or repository before adding it here. Never substitute a third-party generated LLM file for official documentation without clearly disclosing that it is unofficial.

## Dependency changes

Before installing, removing, or upgrading a package, review its official release or migration documentation, engine requirements, and peer dependency ranges. Use strict peer resolution and do not force or bypass incompatible peers. Update this documentation map when direct dependencies change or when an official documentation endpoint moves.

## Verification

After implementation, run checks proportional to the change. For ordinary code changes, run lint and TypeScript checking at minimum; run the production build when framework, rendering, configuration, dependency, or build behavior changes. Report any check that could not run and why.
