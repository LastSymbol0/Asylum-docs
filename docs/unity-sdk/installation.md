---
sidebar_position: 2
---


# Installation

:::info
Unity version supported: **2021.3.1f1**
:::


## Quick install

For the Quick Start, you can download [Asylum Unity SDK example](https://gitlab.com/asylum-space/asylum-unity-sdk-example) and run it in [Play Mode](./build-and-run/play-mode).
Example project includes all necessary plugins assets.

1. [Download](https://unity3d.com/get-unity/download/archive) Unity **version 2021.3.1f1** and [Unity Hub](https://unity3d.com/get-unity/download). After running Unity Hub, locate just installed Unity **version 2021.3.1f1**.
2.  Clone this repository with [submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
```
git clone --recurse-submodules https://gitlab.com/asylum-space/asylum-unity-sdk-example
```
3. Open `asylum-unity-sdk-example` project in Unity
4. You can test plugin in the [Play Mode](./build-and-run/play-mode)

:::tip
If you're not planning to render 3D models delete `\AsylumSDK\ScriptableObjectsInstances\GLB3DModelTag.asset` and `AsylumSDK\Tags\Implemented\GLB3DModelTag.cs` from the SDK folder to decrease bundle size
:::


## Manual installation in existing Unity project

1. Create or open a Unity project (supports version **2021.3.1f1**)
2. Import [Newtonsoft Json Unity Package](https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@2.0/manual/index.html) using [AssetPackagesImport](https://docs.unity3d.com/Manual/AssetPackagesImport.html). This is the dependency for Asylum Unity SDK.
3. Import [UniTask](https://github.com/Cysharp/UniTask.git?path=src/UniTask/Assets/Plugins/UniTask)
4. Resolve 3D models support:
   - Import [GLTF plugin](https://github.com/Siccity/GLTFUtility) if you want to add and test functionality for the 3D model implementation
     :::info
     You need to follow [these steps](https://github.com/Siccity/GLTFUtility/pull/203) to use GLTFUtility in the WebGL build
     :::

     **or**

   - Delete `\AsylumSDK\ScriptableObjectsInstances\GLB3DModelTag.asset` and `AsylumSDK\Tags\Implemented\GLB3DModelTag.cs` from the SDK folder if you're not planning to render 3D models
5. Put Asylum Unity SDK inside Unity `Assets/Plugins` folder
6. You can test the plugin in [Play Mode](./build-and-run/play-mode)

## Build & Run

When you're ready to build, select one of the options:

- [WebGL build inside Creator Studio](./build-and-run/webgl)
- [Standalone build for Windows, Mac, Linux](./build-and-run/standalone)