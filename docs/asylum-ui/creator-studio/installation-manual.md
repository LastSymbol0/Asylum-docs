---
sidebar_position: 1
---

# Manual installation

:::info
Tested on:
- **node v18.9.0**
- **npm v8.19.1**
:::

You have set up and run three processes in the background:

-  Asylum node
-  Local IPFS daemon
-  Creator Studio React app

## Installation steps

1. Build and run [Asylum node](../../node/installation):

```
node-asylum --dev
```

2. [Install](https://docs.ipfs.io/install/command-line/#official-distributions) and run the local IPFS node :

```
ipfs daemon
```

:::caution
You might receive CORS policy error in Creator Studio, when you try to upload assets to IPFS.
To avoid this issue, execute the following command and restart `ipfs daemon`:

```
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
```
:::

3. Clone [Asylum UI](https://gitlab.com/asylum-space/asylum-ui) repository and create `.env.local` within `asylum-ui/packages/creator-studio` with the following content:
```
REACT_APP_MINTER_MNEMONIC = eternal danger cherry radar exit damage slam hip say relief awesome middle
```

4. Install dependencies:
```
yarn
```

5. Start Creator Studio locally:

```
yarn start
```

## Seed storage

We created 3 seed scripts in `connection-library` for development, tutorials and tests.


1. Navigate `./packages/connection-libary` and create `.env.local` file with the following content:

```
SEEDER_MNEMONIC = eternal danger cherry radar exit damage slam hip say relief awesome middle
ASYLUM_NODE_URL = ws://127.0.0.1:9944
IPFS_NODE_URL = http://127.0.0.1:5001
```

2. Run `yarn seed` or `yarn seed:demo` or `yarn seed:test`

3. Import account to PolkadotJS extension from seed phrase:

```
eternal danger cherry radar exit damage slam hip say relief awesome middle
```

:::tip
Seeded data will be lost after each restart of `node-asylum`. To keep your data after a restart, you can use `--base-path` option.

```
./node-asylum --dev --base-path /tmp/node-asylum
```
:::



## Tutorials

-  [Blueprint setup](../../tutorials/testing-guide-blueprint-setup)
-  [Approval process](../../tutorials/testing-guide-approval-process)
-  [Patterns setup](../../tutorials/testing-guide-patterns)

## For Developers

The project utilizes Prettier code formatting tools (check rules in `.prettierrc`).

Before starting development, please make sure you're familiar with the tools used across the project:

-  [Tailwind](https://tailwindcss.com/docs/installation)
-  [React Query](https://react-query.tanstack.com/overview)
-  [MobX](https://mobx.js.org/README.html)
-  [Polkadot JS](https://polkadot.js.org/docs/api/)