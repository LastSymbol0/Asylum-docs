---
sidebar_position: 2
---

# Tags

To create new tags, you need to upload tag's metadata to IPFS and call `createInterpretationTag`. In the example, we're creating a couple of tags `default-view`,`jpeg`:

```js
// 1. Upload to IPFS `default-view` tag metadata and get its CID:
const defaultViewTagMetadata = {
   id: 'default-view',
   description: 'The default visualization for the item. MUST be present in all NFTs.',
   metadataExtensions: {},
}
const defaultViewTagMetadataCID = await api.uploadMetadata(defaultViewTagMetadata)

// 2. Create a `default-view` tag:
await api.createInterpretationTag('default-view', defaultViewTagMetadataCID)

// 3. Upload to IPFS `jpeg` tag metadata and get its CID:
const jpegTagMetadata = {
   id: 'jpeg',
   description: 'in .jpeg format',
   metadataExtensions: {
      fileds: [
         {
            name: 'format',
            type: 'string',
            default: '.jpeg',
            description: 'The format of source is JPEG',
         },
      ],
   },
}
const jpegTagMetadataCID = await api.uploadMetadata(jpegTagMetadata)

// 4. Create a `jpeg` tag:
await api.createInterpretationTag('jpeg', jpegTagMetadataCID)

// 5. Verify tags metadata:
console.log(await api.tagMetadataOf('default-view'))
console.log(await api.tagMetadataOf('jpeg'))
```