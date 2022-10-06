---
sidebar_position: 1
---

# AsylumDigitalObjectsController

The controller works using the [IAsylumDigitalObjectsClient](https://gitlab.com/asylum-space/asylum-unity-sdk/-/tree/main/AsylumSDK/IAsylumDigitalObjectsClient.cs) interface.
The interface is implemented in StandaloneClient and in ReactClient.
When you run a build or playmode, the [AsylumDigitalObjectsController](https://gitlab.com/asylum-space/asylum-unity-sdk/-/tree/main/AsylumSDK/AsylumDigitalObjectsController.cs) script independently determines which approach to use.

> Note: If You want to use WebGL build, you have also to add empty `GameObject` named `ReactController` in the scene and add `ReactClient.cs` as its component

Actions:
- `OnItemWasLoaded` - when all user items was parsed with metadata and initialized in the [AsylumDigitalObjectsController](https://gitlab.com/asylum-space/asylum-unity-sdk/-/tree/main/https://gitlab.com/asylum-space/asylum-unity-sdk/-/tree/main/AsylumSDK/AsylumDigitalObjectsController.cs)
- `OnUserInfoRecieved` - when all user info was parsed and initialized in the [AsylumDigitalObjectsController](https://gitlab.com/asylum-space/asylum-unity-sdk/-/tree/main/AsylumSDK/AsylumDigitalObjectsController.cs)
- `OnSpaceMetadataReceived` - when all space info was parsed and initialized in the [AsylumDigitalObjectsController](https://gitlab.com/asylum-space/asylum-unity-sdk/-/tree/main/AsylumSDK/AsylumDigitalObjectsController.cs)
- `OnPauseRequestedAction` - when pause requested out of game.

Methods:
- `RequestAsylumUserItems` - send user item request to chain. Subscribe to the event `OnItemWasLoaded` to get the items
- `RequestAsylumUserInfo` - send user info request to chain. Subscribe to the event `OnUserInfoRecieved` to get the info
- `RequestAsylumSpaceMetadata` - send space metadata request to chain. Subscribe to the event `OnSpaceMetadataRecieved` to get the metadata
- `RequestMintAsylumItem` - send minting item request to chain. Subscribe to the event `OnItemWasLoaded` to get the minted item. The method has 2 parameters. The blueprint number and the item's metadata
- `ConnectToChain` - connect to chain.
- `DisconnectFromChain` - disconnect from chain.
- `OnExitRequested` - send request to close space.
- `GetItemHandler` - outputs a specific object, depending on the request, from the ItemHandlers array.

Properties:
- `AccountSecretPhrase` - to save secret phrase from the user's wallet.
- `ItemHandlers` - a list of all downloaded items from the chain. An object of type AsylumItemAsyncHandler is a high-level object with fully loaded metadata.
- `UserInfo` - contains complete information about the user downloaded from the chain.
- `SpaceMetadata` - contains complete information about the space downloaded from the chain.
