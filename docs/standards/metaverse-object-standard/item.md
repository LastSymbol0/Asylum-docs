---
sidebar_position: 5
---

# Item

Item is an NFT minted from the particular [blueprint](blueprint). Item has the same [interpretation](interpretation) list, specified by blueprint at the time of its minting, but can be different in future with [upgrading](interactions#updateblueprint) of blueprint. Owner of item [might not want](interactions#acceptitemupdate) to upgrade his item according to latest upgrades in blueprint. Item inherits properties of the [RMRK's NFT](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/nft.md).

## Item Standard

An item MUST adhere to the following standard.

```json
{
  "blueprint": {
    "type": "number",
    "description": "Blueprint ID, e.g. 42"
  },
  "owner": {
      "type": "string",
      "description": "Account which owns the NFT. Computed from MINTITEM interaction."
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

An item MUST have metadata to describe it and help developers of the IMP ecosystem in the best way of leveraging this blueprint.

```json
{
  "name": {
    "type": "string",
    "description": "The name of the interpretation blueprint"
  },
  "description": {
    "type": "string",
    "description": "Description of the blueprint as a whole. Markdown is supported."
  }
}
```

## Examples

Item:

```json
{
  "blueprint": 42,
  "owner": "CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp",
  "metadata": "ipfs://QmavoTVbVHnGEUztnBT2p3rif3qBPeCfyyUE5v4Z7oFvs4",
  "interpretations": [
      {
        "id": 1,
        "src": "hash-of-pixel-2D-source",
        "metadata": "hash-of-pixel-2D-source-metadata",
        "tags": ["inventory-view", "2D"]
      },
      {
        "id": 2,
        "src": "hash-of-anime-2D-source",
        "metadata": "hash-of-anime-2D-metadata",
        "tags": ["2D"]
      }
  ]
}
```

Metadata:

```json
{
  "name": "Sword 1",
  "description": "Item supports two 2D views: inventory pixel and anime"
}
```

## Interactions

- [MINTITEM](interactions#mintitem) - mints item from blueprint
- [TRANSFERITEM](interactions#transferitem) - transfers item
- [BURNITEM](interactions#burnitem) - burn item
- [ACCEPTITEMUPDATE](interactions#acceptitemupdate) - accept the update to the latest blueprint state
