---
sidebar_position: 3
---

# Blueprints

Now we can create a blueprint with interpretations that support tags created in the previous step. To do this, we need to call `createBlueprint`.

## Create Blueprint

```js
// 1. Upload blueprint metadata to IPFS and get its CID:
const blueprintMetadata = {
   description: 'The best weapon for the Helloween party 2022',
}
const blueprintMetadataCID = await api.uploadMetadata(blueprintMetadata)

// 2. Upload interpretation metadata to IPFS and get its CID:
const interpretationMetadata = {
   description: 'Default view interpretation in JPG format',
   format: '.jpg',
}
const interpretationMetadataCID = await api.uploadMetadata(interpretationMetadata)

// 3. Upload interpretation source to IPFS and get its CID.
const srcCID = '{INTERPRETATION_SOURCE_CID}'

// 4. Call `createBlueprint` method:
const interpretations = [
   {
      tags: ['default-view', 'jpeg'],
      interpretation: {
         id: 'default-view-jpg',
         src: srcCID,
         metadata: interpretationMetadataCID,
      },
   },
]
const maxItems = 100
await api.createBlueprint('Old sword', blueprintMetadataCID, maxItems, interpretations)

// 5. Retrieve data about all interpretations of the created blueprint:
const blueprintId = '0'
console.log(await api.blueprintInterpretations(blueprintId))
```



## Update blueprint

When the blueprint already exists and items are minted, we still have a possibility to edit it - extend with new interpretations or fix the old ones.

Let's assume that we want to add a 3d model representation for the "Old sword" blueprint to make it usable in 3d spaces and also update the link for 2d interpretation.

:::info 

To continue the guide, you need to create all necessary tags for the 3d model (`3d-model`, `obj`) as described in the Tags section **before** moving forward.

:::

### 1. Prepare changes set

```js
const blueprintId = 0,
const changeSet = [
   new BlueprintChangeAdd([
      {
         tags: ['3d-model', 'obj'],
         interpretation: {
            id: "3d-model-obj",
            src: "{3D_INTERPRETATION_SOURCE_CID}",
            metadata: "{3D_INTERPRETATION_METADATA_CID}",
         },
      },
   ]),
   new BlueprintChangeModify([
      [
         'default-view-jpg54',
         {
            tags: ['default-view', 'jpg'],
            interpretation: {
               id: 'default-view-jpg55',
               src: '{NEW_INTERPRETATION_SOURCE_CID}',
               metadata: '{METADATA_CID}',
            }
         },
      ]
   ]),
],
```

-  In the `Modify` change action we're describing the changes of source or metadata of already existing interpretation.
-  With the `Add` change, we're adding a new interpretation to the blueprint.

   There are also `RemoveInterpretation` option, that can be used in a similar way.

### 2. Update blueprint

Now the blueprint's owner can call `update_blueprint` extrinsic with the `blueprintId` and `changeSet`, and all proposed updates will be applied to the blueprint.

```js

await api.updateBlueprint(blueprintId, changeSet)
```