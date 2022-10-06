---
sidebar_position: 2
---

# ReactClient

Actions, methodes and properties:
- `SendUserItemsRequest` - send user item request to chain. Subscribe to the event `OnUserItemsRecieved` to get the items
- `SendUserInfoRequest` - send user info request to chain. Subscribe to the event `OnUserInfoRecieved` to get the info
- `SendSpaceMetadataRequest` - send space metadata request to chain. Subscribe to the event `OnSpaceMetadataRecieved` to get the metadata
- `SendMintItemRequest` - send minting item request to chain. Subscribe to the event `OnMintedItemsRecieved` to get the minted item. The method has 2 parameters. The blueprint number and the item's metadata
- `OnConnected` - connect to chain.
- `OnDisconnected` - disconnect from chain.

Events:
- `OnUserItemsRecieved` - when all user items was parsed and initialized in the ReactClient
- `OnUserInfoRecieved` - when all user info was parsed and initialized in the ReactClient
- `OnSpaceMetadataRecieved` - when all space info was parsed and initialized in the ReactClient
- `OnMintedItemsRecieved` - when all minted items info was parsed and initialized in the ReactClient

### API Usage
- Create empty `GameObject` named `ReactController` in the scene and add `ReactClient.cs` as its component
- Create new C# script(e.g. `ItemsController`) and link `ReactClient` component to it. You can do it via inspector, using public/serializable fields or [FindObjectOfType method](https://docs.unity3d.com/ScriptReference/Object.FindObjectOfType.html) or with the help of dependency injection (like Zenject)
    ```cs
        //ItemsController.cs

        void Start
        {
            ReactClient reactClientInstance = FindObjectOfType<ReactClient>();
        }
    ```
- Get user items list in the `ItemsController` simply subsribe on the event `OnUserItemsRecieved` and calling `SendUserItemsRequest`
    ```cs
        // ItemsController.cs

        ReactClient reactClientInstance;

        void Start()
        {
            //Connect to chain.
            reactClientInstance.OnConnected();

            // Subsribe on event
            reactClientInstance.OnUserItemsRecieved += OnItemAdded;

            //Send request
            reactClientInstance.SendUserItemsRequest();
        }

        void OnItemAdded(List<AsylumItem> items)
        {
            ...
        }
    ```
- Get user info in the `ItemsController` simply subsribe on the event `OnUserInfoRecieved` and calling `SendUserInfoRequest`
    ```cs
        //ItemsController.cs

        ReactClient reactClientInstance;

        void Start()
        {    
            //Connect to chain.
            reactClientInstance.OnConnected();

            // Subsribe on event
            reactClientInstance.OnUserInfoRecieved += UserInfoRecieved;

            //Send request
            reactClientInstance.SendUserInfoRequest();
        }

        void UserInfoRecieved(UserInfo info)
        {
            ...
        }
    ```
- Get user info in the `ItemsController` simply subsribe on the event `OnMintedItemsRecieved` and calling `SendMintItemRequest`
    ```cs
        //ItemsController.cs

        ReactClient reactClientInstance;

        void Start()
        {    
            //Connect to chain.
            reactClientInstance.OnConnected();

            // Subsribe on event
            reactClientInstance.OnMintedItemsRecieved += MintedItemsRecieved;

            // Set blueprintId for minted item
            int blueprintId = 0;

            // Set metadata for minted item
            AsylumItemMetadata metadata = new AsylumItemMetadata("description of minted item","name of minted item");

            //Send request with 2 params
            reactClientInstance.SendMintItemRequest(blueprintId,metadata);
        }

        void MintedItemsRecieved(List<AsylumItem> mintedItems)
        {
            ...
        }
    ```
