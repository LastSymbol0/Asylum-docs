---
sidebar_position: 1
---

# Installation

:::info
Interactions with NFT items are not supported in the current version of the Connection Library
:::

Almost all functionality of the Connection Library is covered in the [seed script](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/packages/connection-library/seed/index.ts) and can be used as a reference.

## Installation steps

1. Install and run [Asylum node](../../node/installation)
2. Add [Connection Library](https://gitlab.com/asylum-space/asylum-ui/-/tree/main/packages/connection-library) as a local dependency your project `package.json`.

```json title="package.json"
{
  dependencies: {
    "@asylum-ui/connection-library": "^0.1.0",
     ...
  }
}
```

## Prepare account

To start working with the Connection Library we need to prepare an account:

```js
import { AsylumApi } from '@asylum-ui/connection-library'

const nodeUrl = "ws://127.0.0.1:9944"
const ipfsUrl = "http://127.0.0.1:5001"

const api = AsylumApi.connect({ nodeUrl, ipfsUrl })
   .then(async (api) => {
        const mnemonic = "eternal danger cherry radar exit damage slam hip say relief awesome middle"

        const testAccount = new Keyring({ type: 'sr25519' }).addFromUri(mnemonic)
        const alice = new Keyring({ type: 'sr25519' }).addFromUri('//Alice')

        await api
           .withKeyringPair(alice)
           .signAndSendWrapped(api.polkadotApi.tx.balances.transfer(seeder.address, 10 ** 12))

        return api.withKeyringPair(testAccount)
   }
```

All subsequent steps will be performed with the current preset.




