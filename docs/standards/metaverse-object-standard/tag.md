---
sidebar_position: 3
---

# Interpretation Tag

Interpretation tag is used to give an [interpretation](interpretation) a special semantic allowing Client to query specific interpretation according to the context. Interpretation tag can describe list of fields, that will be required from the interpretation.

## Interpretation Tag Standard

An interpretation tag MUST adhere to the following standard.

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

## Metadata

An interpretation tag MUST have metadata to describe it and help developers of the IMP ecosystem in the best way of leveraging this interpretation tag.

```json
{
  "id": "string",
  "description": {
    "type": "string",
    "description": "Description of the interpretation tag as a whole. Markdown is supported."
  },
  "metadataExtensions":  {
    "fields": Field[]
  }
}
```

Field's scheme:

```json
{
  "name": {
    "type": "string",
    "description": "Field's name"
  },
  "description": {
    "type": "string",
    "description": "Field's description"
  },
  "default": {
    "type": "any",
    "description": "Field's default value"
  },
  "type": {
    "type": "string",
    "description": "Field's value type"
  },
  "editable": {
    "type": "boolean",
    "description": "If metadata extension field marked as `editable` then `default` value can be ignored, otherwise the field is readonly"
  },
}
```

## Examples

Interpretation tag:

```json
{
  "name": "sound",
  "metadata": "ipfs://QmVgs8P4awhZpFXhkkgnCwBp4AdKRj3F9K58mCZ6fxvn3j"
}
```

Metadata:

```json
{
  "id": "sound",
  "description": "Sound",
  "metadata-extensions":  {
    "fields": [ 
      {
        "name" : "sound-related-parameter",
        "type": "float",
        "description": "sound-related-paramter-description",
      }
    ]
 }
}
```

## Interactions

[CREATEINTERPRETATIONTAG](interactions#createinterpretationtag) - creates a new interpretation tag
