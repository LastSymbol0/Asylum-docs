---
sidebar_position: 6
---

# Testing

### Run tests in Unity project

1. Follow [Quick install](./installation) to setup Asylum Unity SDK example
2. Follow [Docker setup](../asylum-ui/creator-studio/installation-docker) to install and run Creator Studio in Docker

    :::caution
    Tests are expecting specific items minted on the chain. Please run the following commands in `asylum-ui` root folder to reseed data with items:
    ```
    yarn docker:restart:node
    yarn docker:seed:with-items
    ```
   
    or use `yarn docker:test:up` instead `yarn docker:up`:

    ```
    yarn docker:test:up
    ```
    :::

3. Open two windows: **Window/General/Test Runner** and **Window/Analysis/Code**
4. In the **Code Coverage** window click **Enable Code Coverage**
5. In Test Runner windows select **Play Mode** and click **Run All**
6. Open generated code coverage report (`index.html`) in browser

:::info
If you're running Asylum SDK tests in existing project, you have to
install [Unity Test Framework](https://docs.unity3d.com/Packages/com.unity.test-framework@1.1/manual/index.html) 
and [Unity Code Coverage Asset](https://docs.unity3d.com/Packages/com.unity.testtools.codecoverage@1.1/manual/index.html)
:::