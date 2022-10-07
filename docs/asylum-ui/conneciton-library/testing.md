---
sidebar_position: 2
---
# Testing

## Run Jest Unit tests

1. Follow [Docker setup](../creator-studio/installation-docker) to install Creator Studio in Docker
2. From the root `asylum-ui` folder: `yarn docker:test:up`

   :::caution
   `yarn docker:test:up` command will start container with different ui image configs. You have to delete previous container, which you spun up with `yarn docker:up`
   :::

3. Navigate to `packages/connection-library` folder and run `yarn test`

    :::tip
    Execute `yarn test:coverage` to generate coverage report
    :::
