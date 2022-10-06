---
sidebar_position: 4
---

# API Usage Example

- Create empty `GameObject` named `DigitalObjectController` in the scene, set `GameObject` tag to `DigitalObjectController` and add `AsylumDigitalObjectsController.cs` as its component

- Create new C# script(e.g. `ItemsController`) and link `AsylumDigitalObjectsController` component to it. You can do it via inspector, using public/serializable fields or [FindObjectOfType method](https://docs.unity3d.com/ScriptReference/Object.FindObjectOfType.html) or with the help of dependency injection (like Zenject)

- Remember to set the user's wallet passphrase before start working with [AsylumDigitalObjectsController](https://gitlab.com/asylum-space/asylum-unity-sdk/-/tree/main/AsylumSDK/AsylumDigitalObjectsController.cs). Simply initialize the property `AccountSecretPhrase` with a string with the secret phrase. You can set it from inspector in [AsylumDigitalObjectsController](https://gitlab.com/asylum-space/asylum-unity-sdk/-/tree/main/AsylumSDK/AsylumDigitalObjectsController.cs) component. 

    ```cs
        //ItemsController.cs

        void Start
        {
            AsylumDigitalObjectsController asylumClient = FindObjectOfType<AsylumDigitalObjectsController>();
        }
    ```
- Get user items list in the `ItemsController`. Simply subscribe on the event `OnUserItemsRecieved` and call `RequestAsylumUserItems`
    ```cs
        // ItemsController.cs

        AsylumDigitalObjectsController asylumClient;

        void Start()
        {
            //Connect to the chain.
            asylumClient.ConnectToChain();

            // Subsribe on event
            asylumClient.OnItemWasLoaded += OnItemLoaded;

            //Send request
            asylumClient.RequestAsylumUserItems();

            // Manual call
            List<AsylumItemAsyncHandler> items = asylumClient.ItemHandlers;

        }
        
        void OnItemLoaded(List<AsylumItemAsyncHandler> items)
        {
            ...
        }
    ```
- Get user info in the `ItemsController`. Simply subscribe on the event `OnUserInfoRecieved` and calling `RequestAsylumUserInfo`
    ```cs
        //ItemsController.cs

        AsylumDigitalObjectsController asylumClient;

        void Start()
        {    
            //Connect to chain.
            asylumClient.OnConnected();

            // Subsribe on event
            asylumClient.OnUserInfoRecieved += UserInfoRecieved;

            //Send request
            asylumClient.RequestAsylumUserInfo();

            // Manual call
            UserInfo userInfo = asylumClient.UserInfo;

        }

        void UserInfoRecieved(UserInfo info)
        {
            ...
        }
    ```
- Get user info in the `ItemsController`. Simply subscribe on the event `OnItemWasLoaded` and calling `RequestMintAsylumItem`
    ```cs
        //ItemsController.cs

        AsylumDigitalObjectsController asylumClient;

        void Start()
        {    
            //Connect to chain.
            asylumClient.OnConnected();

            // Subsribe on event
            asylumClient.OnItemWasLoaded += MintedItemsRecieved;

            // Set blueprintId for minted item
            int blueprintId = 0;

            // Set metadata for the minted item
            AsylumItemMetadata metadata = new AsylumItemMetadata("description of minted item","name of minted item");

            //Send a request with 2 params
            reactClientInstance.RequestMintAsylumItem(blueprintId,metadata);
        }

        void MintedItemsRecieved(List<AsylumItemAsyncHandler> mintedItems)
        {
            ...
        }
    ```