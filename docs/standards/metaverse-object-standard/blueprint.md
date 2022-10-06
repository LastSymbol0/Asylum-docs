---
sidebar_position: 4
---

# Blueprint

Blueprint in the IMP terms is such kind of "NFT collection" where the [items](item) have identical [interpretations](interpretation) set. Blueprint inherits properties of the [RMRK's Collection](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/collection.md). Blueprint interpretations set can be updated. See interactions at the bottom of this page.

## Blueprint Standard

A blueprint MUST adhere to the following standard.

```json
{
  "max": {
    "type": "number",
    "description": "How many NFTs will ever belong to this collection. 0 for infinite."
  },
  "owner": {
    "type": "string",
    "description": "Owner's address, e.g. CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp. Can be address different from minter to assign ownership to other entity on creation."
  },
  "metadata": {
    "type": "string",
    "description": "HTTP(s) or IPFS URI. If IPFS, MUST be in the format of ipfs://hash"
  },
  "interpretations": {
      "type": Interpretation[],
      "description": "The list of supported interpretation types and interpretations for these types"
  }
}
```
## Metadata

A blueprint MUST have metadata to describe it and help game developers of the Asylum ecosystem in the best way of leveraging this blueprint.

```json
{
  "name": {
    "type": "string",
    "description": "The name of the interpretation"
  },
  "description": {
    "type": "string",
    "description": "Description of the blueprint as a whole. Markdown is supported."
  }
}
```

## Examples

Collection:

```json
{
  "max": 100,
  "issuer": "CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp",
  "metadata": "ipfs://QmVgs8P4awhZpFXhkkgnCwBp4AdKRj3F9K58mCZ6fxvn3j",
  "interpretations": [
    {
      "id": 1,
      "src": "hash-of-pixel-2D-source",
      "tags": ["inventory-view", "style-pixel", "2D"],
      "metadata": "hash-of-pixel-2D-metadata"
    },
    {
      "id": 2,
      "src": "hash-of-anime-2D-source",
      "tags": ["style-anime", "2D"],
      "metadata": "hash-of-anime-2D-metadata"
    }
  ]
}
```

Metadata:

```json
{
  "name": "Sword",
  "description": "Blueprint supports two 2D views: inventory pixel and anime"
}
```

## Interactions

- [CREATEBLUEPRINT](interactions#createblueprint) - creates a new blueprint
- [DESTROYBLUEPRINT](interactions#destroyblueprint) - destroy a blueprint
- [UPDATEBLUEPRINT](interactions#updateblueprint) - update a blueprint
