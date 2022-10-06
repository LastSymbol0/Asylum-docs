# Standalone

## Build and run Unity Standalone for Windows
1. After you have loaded the [example](https://gitlab.com/asylum-space/asylum-unity-sdk-example) or added the [AsylumSDK Plugin](../plugin-how-to) to the project and created an GameObject with component [AsylumDigitalObjectsController](https://gitlab.com/asylum-space/asylum-unity-sdk/-/tree/main/AsylumSDK/AsylumDigitalObjectsController.cs), make sure you enter the user's passphrase in the [AsylumDigitalObjectsController](https://gitlab.com/asylum-space/asylum-unity-sdk/-/tree/main/AsylumSDK/AsylumDigitalObjectsController.cs) component field.

![](img/set_secret_phrase.png)

2. (Optional) Switch platform to the **Windows,Mac,Linux** in the **File > Build Settings**, if another platform is chosen.

![](img/standalone_switchBuild.png)

3. Start building game. The result of the build looks like this.

![](img/standalone_rightBuild.png)

4. [Download](https://docs.docker.com/get-docker/), install and run Docker.

3. Follow the steps of [Docker setup](../../asylum-ui/creator-studio/installation-docker.md) and run the following command in terminal:

```
docker compose up
```
:::info 
Note: Since you are not using WebGL it is not necessary to run Creator Studio. You can limit yourself to running IPFS and Asylum Node.
:::

6. And now you can start the game.

![](img/standalone_startGame.png)

7. The final result should be this.

![](img/standalone_final.png)
