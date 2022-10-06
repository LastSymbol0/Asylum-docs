---
sidebar_position: 7
---

# Interactions

The following interactions are possible:

- [CREATEINTERPRETATIONTAG](#createinterpretationtag)
- [CREATEBLUEPRINT](#createblueprint)
- [DESTROYBLUEPRINT](#destroyblueprint)
- [UPDATEBLUEPRINT](#updateblueprint)
- [MINTITEM](#mintitem)
- [BURNITEM](#burnitem)
- [TRANSFERITEM](#transferitem)
- [ACCEPITEMUPDATE](#accepitemupdate)

### CREATEINTERPRETATIONTAG

Сreates a new [interpretation tag](tag)

##### Arguments

Pass appropriate arguments to corresponding extrinsic of the asylum-blueprints pallet directly or via connection lib. Let's describe arguments as JSON scheme:

```json
{
  "name": {
    "type": "string",
    "description": "The name of the interpretation tag"
  },
  "metadata": {
    "type": "string",
    "description": "HTTP(s) or IPFS URI. If IPFS, MUST be in the format of ipfs://hash"
  },
}
```

##### Example

```json
{
  "name": "2D",
  "metadata": "ipfs://QmVgs8P4awhZpFXhkkgnCwBp4AdKRj3F9K58mCZ6fxvn3j"
}
```

### CREATEBLUEPRINT

Creates a new [blueprint](blueprint)

##### Arguments

Pass appropriate arguments to corresponding extrinsic of the asylum-blueprints pallet directly or via connection lib. Let's describe arguments as JSON scheme:

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

##### Example

```json
{
  "max": 100,
  "issuer": "CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp",
  "symbol": "SWORD",
  "metadata": "ipfs://QmVgs8P4awhZpFXhkkgnCwBp4AdKRj3F9K58mCZ6fxvn3j",
  "interpretations": [
    {
      "src": "hash-of-pixel-2D-source",
      "tags": ["inventory-view", "style-pixel", "2D"],
      "metadata": "hash-of-pixel-2D-metadata"
    },
    {
      "src": "hash-of-anime-2D-source",
      "tags": ["style-anime", "2D"],
      "metadata": "hash-of-anime-2D-metadata"
    }
  ]
}
```

### DESTROYBLUEPRINT

Destroy a [blueprint](blueprint)

##### Arguments

Pass appropriate arguments to corresponding extrinsic of the asylum-blueprints pallet directly or via connection lib. Let's describe arguments as JSON scheme:

```json
{
  "blueprint-id": {
    "type": "number",
    "description": "The id of the blueprint to be destroyed"
  }
}
```

##### Example

```json
{
  "blueprint-id": 42
}
```

### UPDATEBLUEPRINT

Update a [blueprint](blueprint)

##### Arguments

Pass appropriate arguments to corresponding extrinsic of the asylum-blueprints pallet directly or via connection lib. Let's describe arguments as JSON scheme:

```json
{
  "blueprint-id": {
    "type": "number",
    "description": "The id of the blueprint"
  },
  "changes": {
    "type": Changes[],
    "description": "Set of the blueprint changes"
  }
}
```

##### Example

```json
{
  "blueprint-id": 42,
  "changes": [
      Add({
          "type": "2D",
          "interpretations": [
            {
                "id": "inventory-pixel-2D",
                "src": "hash-of-pixel-2D-source",
                "metadata": "hash-of-pixel-2D-metadata"
            },
            {
                "id": "anime-2D",
                "src": "anime-2D-source",
                "metadata": "anime-2D-metadata"
            }
          ]
      }),
      Modify( {
          "type": "3D",
          "interpretations": [
            {
                "id": "preview-3D",
                "src": "new-preview-3D-source",
                "metadata": "hash-of-pixel-2D-metadata"
            }
          ]
      }),
      RemoveInterpretation({
          "type": "2D",
          "interpretations": [
            {
                "id": "legacy-unused-2D",
                "src": "hash-of-pixel-2D-source",
                "metadata": "hash-of-pixel-2D-metadata"
            }
          ]
      }),
     RemoveInterpretationType({
         "type": "MockTypeForTests"
     })
  ],
}
```


### MINTITEM

Mint [item](item) from [blueprint](blueprint). Item will have the same set of [interpretations](interpretation) as blueprint has.

##### Arguments

Pass appropriate arguments to corresponding extrinsic of the asylum-blueprints pallet directly or via connection lib. Let's describe arguments as JSON scheme:

```json
{
  "owner": {
    "type": "string",
    "description": "The owner of minted item"
  },
  "blueprint-id": {
    "type": "number",
    "description": "The id of the blueprint"
  },
  "metadata": {
    "type": "string",
    "description": "HTTP(s) or IPFS URI. If IPFS, MUST be in the format of ipfs://hash"
  }
}  
```

##### Example

```json
{
  "owner": "CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp",
  "blueprint-id": 42,
  "metadata": "ipfs://QmavoTVbVHnGEUztnBT2p3rif3qBPeCfyyUE5v4Z7oFvs4"
}  
```

### BURNITEM

Burn [item](item)

##### Arguments

Pass appropriate arguments to corresponding extrinsic of the asylum-blueprints pallet directly or via connection lib. Let's describe arguments as JSON scheme:

```json
{
  "blueprint-id": {
    "type": "number",
    "description": "The id of the blueprint"
  },
  "item-id": {
    "type": "number",
    "description": "The id of the item to be burned"
  }
}
```

##### Example

```json
{
  "blueprint-id": 42,
  "item-id": 453
}
```

### TRANSFERITEM

Transfer [item](item) to new owner(in [RMRK's SEND](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/interactions/send.md) context)

##### Arguments

Pass appropriate arguments to corresponding extrinsic of the asylum-blueprints pallet directly or via connection lib. Let's describe arguments as JSON scheme:

```json
{
  "blueprint-id": {
    "type": "number",
    "description": "The id of the blueprint"
  },
  "item-id": {
    "type": "number",
    "description": "The id of the item to be transfered"
  },
  "destination": {
      "type": "string",
      "description": "New owner of the item"
  }
}
```

##### Example

```json
{
  "blueprint-id": 42,
  "item-id": 453,
  "destination": "CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp"
}
```

### ACCEPTITEMUPDATE

Accept all updates from by the [blueprint](blueprint) owner after succesful [blueprint's update](#updateblueprint). If not accepted, all updated will be in pending state.

##### Arguments

Pass appropriate arguments to corresponding extrinsic of the asylum-blueprints pallet directly or via connection lib. Let's describe arguments as JSON scheme:

```json
{
  "blueprint_id": 42,
  "item-id": 1,
}
```