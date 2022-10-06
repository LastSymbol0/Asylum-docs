---
sidebar_position: 2
---

# Interpretation

Interpretation is the description of the media resource used to interpretate the [blueprint](blueprint) in some context. To describe such context interpretation MUST be assosiated with the unique set of [tags](tag). This set of tags defining the format of interpretation's metadata.

## Interpretation Standard

An interpretation MUST adhere to the following standard.

```json
{
  "id": {
    "type": "number",
    "description": "ID of interpretation. This field is computed"
  },
  "src": {
    "type": "string",
    "description": "HTTP(s) or IPFS URI. If IPFS, MUST be in the format of ipfs://hash"
  },
  "tags": {
    "type": Tag[],
    "description": "Array of supported tags"
  },  
  "metadata": {
    "type": "string",
    "description": "HTTP(s) or IPFS URI. If IPFS, MUST be in the format of ipfs://hash"
  },
}
```

## Metadata

An interpretation MUST have metadata to describe it and help developers of the IMP ecosystem in the best way of leveraging this interpretation.

```json
{
  "name": {
    "type": "string",
    "description": "Name of the interpretation, e.g. 'inventory-pixel-2D'."
  },
  "description": {
    "type": "string",
    "description": "Description of the interpretation as a whole. Markdown is supported."
  }
}
```

## Examples

Interpretation:

```json
{
  "id": 42,
  "src": "hash-of-pixel-2D-source",
  "tags": ["inventory-view", "2D"],
  "metadata": "hash-of-pixel-2D-metadata"
}
```

Metadata:

```json
{
  "name": "inventory-pixel-2D",
  "description": "You may use this interpretation in the inventory context of pixel 2D game"
}
```