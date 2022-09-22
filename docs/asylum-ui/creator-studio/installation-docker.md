---
sidebar_position: 2
---

# Docker setup

You can run all three processes in the **Docker** (it's implied that you have created `.env.local`, as described in the step 4.1 of [manual setup](./installation-manual.md).
Install [Docker](https://docs.docker.com/get-docker/) and run the following command from the root folder:

```
docker-compose up
```

It will set up and run three containers and **automatically seed the mock data**.

:::tip
Execute the following command inside `asylum-ui-ipfs` container to avoid CORS issues and restart container:

```
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
```
:::

### Guides

-  [Testing guide](../../docs/testing-guide-blueprint-setup.md)

### For Asylum Developers

The project utilizes Prettier code formatting tools (check rules in `.prettierrc`).

Before starting development, please make sure you're familiar with the tools used across the project:

-  [Tailwind](https://tailwindcss.com/docs/installation)
-  [React Query](https://react-query.tanstack.com/overview)
-  [MobX](https://mobx.js.org/README.html)
-  [Polkadot JS](https://polkadot.js.org/docs/api/)
