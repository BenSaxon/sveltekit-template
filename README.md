## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Changes made to the basic sveltekit template

### lint and format commands:

```shell
"lint": "prettier --plugin-search-dir . --write . && eslint .",
"format": "prettier --plugin-search-dir . --write .",
```

### Svelte testing library

follow the setup guide: https://testing-library.com/docs/svelte-testing-library/setup

### tsconfig

"include": ["src", "vitest.setup.ts", ".svelte-kit/ambient.d.ts"]

### added vitest-setup.ts file

see file

### installed node types

for the following imports inside vitest.config.ts:

import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

to avoid ts errors install the types like so:

```npm install @types/node --save-dev```


