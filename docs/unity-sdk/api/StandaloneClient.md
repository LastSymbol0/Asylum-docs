---
sidebar_position: 3
---

# StandaloneClient

Actions, methodes and properties:
- `SendUserItemsRequest` - send user item request to chain. Subscribe to the event `OnUserItemsRecieved` to get the items
- `SendUserInfoRequest` - send user info request to chain. Subscribe to the event `OnUserInfoRecieved` to get the info
- `SendSpaceMetadataRequest` - send space metadata request to chain. Subscribe to the event `OnSpaceMetadataRecieved` to get the metadata
- `SendMintItemRequest` - send minting item request to chain. Subscribe to the event `OnMintedItemsRecieved` to get the minted item
- `OnConnected` - connect to chain.
- `OnDisconnected` - disconnect from chain.
- `SetSecretPhrase` - set a secret phrase from the user's wallet. 

Events:
- `OnUserItemsRecieved` - when all user items was parsed and initialized in the ReactClient
- `OnUserInfoRecieved` - when all user info was parsed and initialized in the ReactClient
- `OnSpaceMetadataRecieved` - when all space info was parsed and initialized in the ReactClient
- `OnMintedItemsRecieved` - when all minted items info was parsed and initialized in the ReactClient

### API Usage
- Create new C# script(e.g. `ItemsController`) and init a variable of the type StandaloneClient.
    ```cs
        //ItemsController.cs

        void Start
        {
            StandaloneClient standaloneClientInstance = new StandaloneClient();
        }
    ```
- In the `ItemsController` remember to set the user's wallet passphrase before requesting the user's information. Simply calling `SetSecretPhrase` and pass as a parameter a string with the secret phrase.
    ```cs
        //ItemsController.cs

        void Start
        {
            StandaloneClient standaloneClientInstance = new StandaloneClient();

            //Set user secret phraze
            standaloneClientInstance.SetSecretPhrase("secret phraze");
        }
    ```
- Get user items list in the `ItemsController` simply subsribe on the event `OnUserItemsRecieved` and calling `SendUserItemsRequest`
    ```cs
        // ItemsController.cs

        StandaloneClient standaloneClientInstance = new StandaloneClient();

        void Start()
        {
            //Set user secret phraze
            standaloneClientInstance.SetSecretPhrase("secret phraze");

            //Connect to chain.
            standaloneClientInstance.OnConnected();

            // Subsribe on event
            standaloneClientInstance.OnUserItemsRecieved += OnItemAdded;

            //Send request
            standaloneClientInstance.SendUserItemsRequest();
        }

        void OnItemAdded(List<AsylumItem> items)
        {
            ...
        }
    ```
- Get user info in the `ItemsController` simply subsribe on the event `OnUserInfoRecieved` and calling `SendUserInfoRequest`
    ```cs
        //ItemsController.cs

        StandaloneClient standaloneClientInstance = new StandaloneClient();

        void Start()
        {   
            //Set user secret phraze
            standaloneClientInstance.SetSecretPhrase("secret phraze");

            //Connect to chain.
            standaloneClientInstance.OnConnected();

            // Subsribe on event
            standaloneClientInstance.OnUserInfoRecieved += UserInfoRecieved;

            //Send request
            standaloneClientInstance.SendUserInfoRequest();
        }

        void UserInfoRecieved(UserInfo info)
        {
            ...
        }
    ```
- Get user info in the `ItemsController` simply subsribe on the event `OnMintedItemsRecieved` and calling `SendMintItemRequest`
    ```cs
        //ItemsController.cs

        StandaloneClient standaloneClientInstance = new StandaloneClient();

        void Start()
        {    
            //Set user secret phraze
            standaloneClientInstance.SetSecretPhrase("secret phraze");

            //Connect to chain.
            standaloneClientInstance.OnConnected();

            // Subsribe on event
            standaloneClientInstance.OnMintedItemsRecieved += MintedItemsRecieved;

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
