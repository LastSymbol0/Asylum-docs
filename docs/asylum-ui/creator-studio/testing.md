---
sidebar_position: 3
---

# Testing

### Run E2E Cypress tests

1. Follow [Docker setup](./installation-docker) to install Creator Studio in Docker
2. Create `.env.test.local` file in `asylum-ui/packages/creator-studio` folder:
    ```yaml title="asylum-ui/packages/creator-studio/.env.test.local"
    REACT_APP_NODE_ENV = test
    REACT_APP_MINTER_MNEMONIC = eternal danger cherry radar exit damage slam hip say relief awesome middle
    ```
3. Navigate to root `asylum-ui` folder
4. `yarn docker:test:up`

   :::caution
   `yarn docker:test:up` command will start container with different ui image configs. You have to delete previous container, which you spun up with `yarn docker:up`
   :::
5. `yarn cypress:open`
6. Select **E2E Testing** -> **Chrome** -> **Start E2E testing in Chrome**
7. Select spec you want to run