---
sidebar_position: 3
---

# Testing

### Run E2E Cypress tests

1. Follow [Docker setup](./installation-docker.md) to install Creator Studio in Docker
2. Create `.env.test.local` file in `packages/creator-studio` folder:
```
REACT_APP_NODE_ENV = test
REACT_APP_MINTER_MNEMONIC = eternal danger cherry radar exit damage slam hip say relief awesome middle
```
3. Navigate to root `asylum-ui` folder
4. `yarn docker:test:up`
5. `yarn cypress:open`
6. Select **E2E Testing** -> **Chrome** -> **Start E2E testing in Chrome**
7. Select spec you want to run