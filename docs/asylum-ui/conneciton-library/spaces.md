---
sidebar_position: 3
---

# Spaces

The following listing shows how to create and configure a space:

```js
// 1. Create a space:
const spaceId = 0,
const admins = [api.keyringPair!.address],
const price = 10000
await api.createspace(spaceId, admins, price)

// 2. Set space metadata:
const spaceMetadata = {
    title: 'Minecraft',
    img: '{link-to-cover}',
    genre: '3D sandbox space',
    shortDescription: 'Minecraft is a sandbox video space developed by Mojang Studios.',
    description: 'Really long description',
    gallery: [
         '{link-to-screenshot}',
         '{link-to-screenshot}',
         '{link-to-art}',
      ],
      reviews,
}
const spaceMetadataCID = await api.uploadMetadata(spaceMetadata)
await api.setspaceMetadata(spaceId, spaceMetadataCID, spaceMetadata.title, spaceMetadata.genre)

// 3. We suppose that our space supports the "Old sword" blueprint.
// Call `addBlueprintSupport` to add association between the space and blueprint:
await api.addBlueprintSupport(spaceId, blueprintId)

// 4. Retrieve space data and metadata:
console.log(await api.space(spaceId))
console.log(await api.spaceMetadataOf(spaceId))
```