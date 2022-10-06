---
sidebar_position: 4
---

# Testing Guide

You have 3 options to interact with Asylum on-chain:
1. PolkadotJS app.
2. [Asylum UI/Connection Library](https://gitlab.com/asylum-space/asylum-ui/-/tree/main/packages/connection-library) npm package.
3. [Asylum UI/Creator Studio](https://gitlab.com/asylum-space/asylum-ui/-/tree/main/packages/space-developers-console) React Web App.

The Testing Guide describes option 1.
To start working with the Testing guide, please install the Asulum node and use the PolkadotJS app for interaction with the node: [Click here for details](installation).

### Tags

To create new tags, you need to upload tag's metadata to IPFS and call `create_interpretation_tag`. In the example, we're creating a couple tags `default-view`,`jpeg`:


1. Upload to IPFS `default-view` tag metadata and get its CID:

```json
{
  "id": "default-view",
  "description": "The default visualization for the item. MUST be present in all NFTs.",
  "metadataExtensions": {}
}
```

2. Create a `default-view` tag:

```json
{
  "tag": "default-view",
  "metadata": "{METADATA_CID}"
}
```

3. Upload to IPFS `jpeg` tag metadata and get its CID:

```json
{
  "id": "jpeg",
  "description": "in .jpeg format",
  "metadataExtensions": {
      "fileds": [
        {
          "name": "format",
          "type": "string",
          "default": ".jpeg",
          "description": "The format of source is JPEG"
        }
      ]
  }
}
```

4. Create a `jpeg` tag:

```json
{
  "tag": "jpeg",
  "metadata": "{METADATA_CID}"
}
```

### Blueprint

Now we can create a blueprint with interpretations that support tags created in the previous step. To do this, we need to call `create_blueprint`.

1. Upload blueprint metadata to IPFS and get its CID:

```json
{
  "description": "The best weapon for the Helloween party 2022",
}
```

2. Upload interpretation metadata to IPFS and get its CID:

```json
{
  "description": "Default view interpretation in JPG format",
  "format": ".jpg"
}
```

3. Upload interpretation source to IPFS and get its CID.

4. Call `create_blueprint` extrinsic with the following arguments:

```json
 {
      "blueprint-name": "Old sword",
      "metadata": "{TEMPLATE_METADATA_CID}",
      "max": 100,
      "interpretations": [
         {
            "tags": ["default-view", "jpeg"],
            "interpretation": {
               "id": "default-view-jpg",
               "src": "{INTERPRETATION_SOURCE_CID}",
               "metadata": "{INTERPRETATION_METADATA_CID}",
            },
         },
      ],
   }
```

### Items

After having a blueprint, the owner can mint items from it. Call `mint_item_from_blueprint` with the following arguments:

```json
{
    "owner": "{OWNER_ACCOUNT_ID}",
    "blueprint-id": 0,
    "metadata": "{METADATA_CID}"
}
```

### space

To create a space, we need to call extrinsic `create_space` with arguments:

```json
{
    "space": 0,
    "admins": {
        "{ADMIN_1_ACCOUNT_ID}",
        "{ADMIN_1_ACCOUNT_ID}"
    },
    "price": 10000
}
```

To allow space_pass unpriviledged mint call `set_allow_unpriviledged_mint`:

```json
{
    "space": 0,
    "allow": true
}
```

We suppose that our space supports the "Old sword" blueprint. Call `add_blueprint_support` to save this association on-chain.

### Update blueprint

When the blueprint already exists and items are minted we still have a possibility to edit it - extend with new interpretations or fix the old ones.

Let's assume that we want to add a 3d model representation for the "Old sword" blueprint to make it supported in 3d spaces and also fix the link for 2d interpretation.

> Note: to continue the guide here you need to create all necessary tags for the 3d model (`3d-model`, `obj`) as described in the Tags section **before** moving forward.

To do this,  blueprint's owner can call `update_blueprint` extrinsic with the id of blueprint and changes set:

```json
{
    "author": "{AUTHOR_ACCOUNT_ID}",
    "blueprint-id": 0,
    "change-set": {
        Add: {
          "interpretations": [
            {
               "tags": ["3d-model", "obj"],
               "interpretation": {
                  "id": "3d-model-obj",
                  "src": "{3D_INTERPRETATION_SOURCE_CID}",
                  "metadata": "{3D_INTERPRETATION_METADATA_CID}",
               },
            },
          ]
        },
        Modify: {
          "interpretations": [
              {
                "id": "default-view-jpg",
                "src": "{NEW_INTERPRETATION_SOURCE_CID}",
                "metadata": "{METADATA_CID}",
              }
          ]
        }
    }
}
```
- In `Modify` change we're describing the changes of source or metadata of already existing interpretation.
- With the `Add` change, we're adding a new interpretation to the blueprint. The important thing here is to keep the new interpretation's tags set unique, as the set of tags is the identifier of the interpretation within the blueprint.

There are also`RemoveInterpretation`, that can be used in a similar way.

### Accept item update

After the blueprint was updated it will request all minted Items to apply this update.

Owners of the items can update their items according to the last blueprint state. To do this owner must call `accept_item_update`. If the owner doesn't do this, then all updates will be stored in a pending state and the item will save its previous state.
