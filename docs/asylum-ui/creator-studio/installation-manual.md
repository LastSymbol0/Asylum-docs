---
sidebar_position: 1
---

# Installation

> Tested on:
>
> -  node version: **v18.4.0**
> -  npm version: **v8.16.0**

You have set up and run three processes in the background:

-  Asylum Item NFT substrate node
-  Local IPFS daemon
-  Creator Studio React app

Follow the steps below:

1. Build and run [asylum-item-nft](https://gitlab.com/asylum-space/asylum-item-nft) substrate node:

```
node-asylum --dev
```

2. [Install](https://docs.ipfs.io/install/command-line/#official-distributions) and run the local IPFS node :

```
ipfs daemon
```

> Note: execute the following command to avoid CORS issues:
>
> ```
> ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
> ```

3. Install dependencies:

```
yarn
```

4. [Optional] Seed data:

    1. Navigate `./packages/connection-libary` and create `.env.local` file with the following content:

   ```
   SEEDER_MNEMONIC = eternal danger cherry radar exit damage slam hip say relief awesome middle
   ASYLUM_NODE_URL = ws://127.0.0.1:9944
   IPFS_NODE_URL = http://127.0.0.1:5001
   ```

    2. Run `yarn seed`

   ```
   yarn seed
   ```

    3. Import account to PolkadotJS extension from seed phrase:

   ```
   eternal danger cherry radar exit damage slam hip say relief awesome middle
   ```

   > NOTE: seeded data will be lost after each restart of `node-asylum`. To keep your data after a restart, you can use `--base-path` option.

   ```
   ./node-asylum --dev --base-path /tmp/node-asylum
   ```

5. Start Creator Studio locally:

```
yarn start
```

### Guides

-  [Testing guide](../../docs/testing-guide-blueprint-setup.md)

### For Developers

The project utilizes Prettier code formatting tools (check rules in `.prettierrc`).

Before starting development, please make sure you're familiar with the tools used across the project:

-  [Tailwind](https://tailwindcss.com/docs/installation)
-  [React Query](https://react-query.tanstack.com/overview)
-  [MobX](https://mobx.js.org/README.html)
-  [Polkadot JS](https://polkadot.js.org/docs/api/)
