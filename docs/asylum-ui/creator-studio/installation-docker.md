---
sidebar_position: 2
---

# Docker setup

## Installation steps

1. Clone [Asylum UI](https://gitlab.com/asylum-space/asylum-ui) repository.
2. Create `.env.local` within `asylum-ui/packages/connection-library` with the following content:
    ```yaml title="asylum-ui/packages/connection-library/.env.local"
    SEEDER_MNEMONIC = eternal danger cherry radar exit damage slam hip say relief awesome middle
    ASYLUM_NODE_URL = ws://127.0.0.1:9944
    IPFS_NODE_URL = http://127.0.0.1:5001
    ```
   
3. Create `.env.local` within `asylum-ui/packages/creator-studio` with the following content:

    ```yaml title="asylum-ui/packages/creator-studio/.env.local"
    REACT_APP_MINTER_MNEMONIC = eternal danger cherry radar exit damage slam hip say relief awesome middle
    ```
    :::info
    You can specify any mnemonic seed phrase, but it have to coincide in `connection-library` and `creator-studio` packages
    :::
4. Install [Docker](https://docs.docker.com/get-docker/) and `docker-compose` and run.
5. Execute `yarn docker:up` in a root folder.
6. Import account to PolkadotJS extension from seed phrase:

    ```
    eternal danger cherry radar exit damage slam hip say relief awesome middle
    ```

These steps will set up and run three containers and **automatically seed the mock data**.

:::caution
You might receive CORS policy error in Creator Studio, when you try to upload assets to IPFS.
To avoid this issue, execute the following command from `asylum-ui` root when Docker is up and restart `ipfs` container:

```
docker-compose exec ipfs ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '[\"*\"]'
yarn docker:restart:ipfs
```
:::

## Reseed storage

If you want to reset node storage, simply restart `node-asylum` container and reseed the data.
Run the following commands from `asylum-ui` root:

```
yarn docker:restart:node
yarn docker:seed
```

:::tip
You can run `yarn docker:seed:with-items` instead to seed Items as well
:::

## Tutorials

-  [Blueprint setup](../../tutorials/testing-guide-blueprint-setup)
-  [Items Minting](../../tutorials/testing-guide-items-minting)
-  [Patterns setup](../../tutorials/testing-guide-patterns)
