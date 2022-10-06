# Play Mode

You can simply test Asylum SDK plugin in Unity Play Mode without making a build.

1. After you have loaded the [Asylum Unity SDK Example](https://gitlab.com/asylum-space/asylum-unity-sdk-example) or added the [AsylumSDK Plugin](../plugin-how-to) to the project and created an GameObject with component [AsylumDigitalObjectsController](https://gitlab.com/asylum-space/asylum-unity-sdk/-/tree/main/AsylumSDK/AsylumDigitalObjectsController.cs), make sure you enter the user's passphrase in the [AsylumDigitalObjectsController](https://gitlab.com/asylum-space/asylum-unity-sdk/-/tree/main/AsylumSDK/AsylumDigitalObjectsController.cs) component field.

![](img/set_secret_phrase.png)

2. Follow the steps of [Docker setup](../../asylum-ui/creator-studio/installation-docker.md) and run the following command in terminal:

```
docker compose up
```
:::info
Note: Since you are not using WebGL it is not necessary to run Creator Studio. You can limit yourself to running IPFS and Asylum Node.
:::

4. And now you can start Unity Play Mode.

![](img/playmode_start.png)

5. The final result should be this. In the console you should get the **Public Key** that was generated from the secret phrase. And you should also see a message about the correct connection to the blockchain.

![](img/playmode_correctConnect.png)
