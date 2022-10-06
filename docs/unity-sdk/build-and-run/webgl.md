# React WebGL

## Run a Unity WebGL build inside Creator Studio
1. Change the _Compression format_ in the **Edit > Project Settings > Player > WebGL settings > Publishing settings** to the _Disabled_

![](img/WEBGL_Settings.png)

2. (Optional) Switch platform to the WebGL in the **File > Build Settings**, if another platform is chosen

![](img/WEBGL_SwitchPlatform.png)

3. Form WebGL build: **File > Build Settings > Build**. The output WebGL build contains 4 files in the _BuildDirectory/Build_:
    - BuildName.data
    - BuildName.framework.js
    - BuildName.loader.js
    - BuildName.wasm

![](img/WEBGL_BuildFiles.png)

4. Place these files inside **asylum-ui/packages/connection-library/data/build_name** and add new Space in `const spaces: IspaceMockData[]` array in **asylum-ui/packages/connection-library/seed/mocks.ts**. Specify the correct paths to your Unity build in `spaceClient` and list of `supportedBlueprints` (if you run seed script, you will have default NFT blueprints with ids `[0, 1, 2, 3]`):
```ts
export const spaces: IspaceMockData[] = [
...
{
    id: 'space_id',
    title: 'Your Space',
    img: 'image_url',
    genre: '...',
    shortDescription: '...',
    description: '...',
    gallery: [...],
    supportedBlueprints: [0, 1, 2, 3],
    spaceClient: {
         data: 'data/build_name/BuildName.data',
         framework: 'data/build_name/BuildName.framework.js',
         loader: 'data/build_name/BuildName.loader.js',
         wasm: 'data/build_name/BuildName.wasm',
    }
}
...
```

![](img/WEBGL_ConnectionLib.png)

![](img/WEBGL_Mocks.png)

5. [Download](https://docs.docker.com/get-docker/), install and run Docker

3. Follow the steps of [Docker setup](../../asylum-ui/creator-studio/installation-docker.md) and run the following command in terminal:

```
docker compose up
```

7. Open a web browser and go to the http://localhost:3000/

8. Add the wallet and connect to the local node

![](img/WEBGL_UiConnect.png)

9. Choose the space and press the **Run** button. 

![](img/WEBGL_RunGame.png)

10. The build is running

![](img/WEBGL_FinalResult.png)

> Note : A manual and more detailed guide is available at [Creator Studio (manual setup)](../../asylum-ui/creator-studio/installation-manual).
