---
sidebar_position: 3
description: Mint NFTs for different accounts, items minting, 2d game space overview.
---

# Items Minting

### In this guide:
- mint NFTs for different accounts
- approval process
- 2d game space overview.

## Prerequisites

1. Choose one of two options to install Creator Studio:
   - [Docker setup](../asylum-ui/creator-studio/installation-docker) (Recommended)
   - [Manual installation](../asylum-ui/creator-studio/installation-manual)

2. [Install](https://polkadot.js.org/extension/) PolkadotJS browser extension.
3. Import seeder account you used during Creator Studio installation.
4. Navigate to `http://localhost:3000` in the browser.
5. Click `disconnected` button and connect to the local node and local ipfs:
   ![](img/blueprint-setup/node-connection.png)
6. Click `connect wallet` button -> Select `Polkadot{.js} wallet` -> Select seeder account, which you have imported before:
   ![](img/blueprint-setup/node-select-extension.png)
   ![](img/blueprint-setup/node-select-wallet.png)


### Step 1: Minting items

1. Click `Mint item` button either from Blueprint Overview page or directly from Blueprints list. You'll see Mint Item window:
   ![](img/approval-process/mint-item.png)

2. Here we can change `Name` and `Owner` of the item we're going to create. Owner's address is automatically filled with our own (blueprint owner) wallet. Let's change `Name` to `My first Item` field and leave `Owner` field as it is for now.
   ![](img/approval-process/mint-item-name.png)

3. After that we can click 'Mint item' button, Polkadot will ask you to enter your wallet password and, hopefully, you'll see a successful minting notification
   ![](img/approval-process/mint-item-notification.png)

### Step 2: Items overview

1. Open `Items` page. Here we can see all items created by us and the seeding script. Let's find item that we minted previously. Click `Filter` button, select blueprint we used and click `Apply`
   ![](img/approval-process/search-blueprint.png)

3. Now we can clearly see our item, but if needed you can use Search bar for additional narrowing by item name.
   ![](img/approval-process/filtered-items.png)

4. Let's click on our item and look at Item overview page
   ![](img/approval-process/blueprint-overview.png)
   We can see all information we may need about the item like Blueprint id, description and interpretations.

### Step 2: Minting items for another account

Let's mint another item. But this time for another wallet. In my case `Alice` (blueprint owner) will mint item for `Bob`
1. Mint item just like in the first step, but change owner's field to Bob's (or any other) address this time.
   ![](img/approval-process/mint-for-Bob.png)

2. Let's change our account. Click on address (top right corner), press `change wallet` and select account you've minted item for.
   ![](img/approval-process/accounts.png)

3. Open `Items` page. You can see item you minted is pending approval
   ![](img/approval-process/items-bob.png)

4. Let's click on it to open detail item overview and scroll to interpretations
   ![](img/approval-process/pending-interpretations.png)
   As we can see item awaits you to approve interpretation updates. Let's do it with `Approve all updates` button. Be aware that account should possess some tokens to successfully approve updates.

5. Now you can see items interpretations approved and `pending approval` status disappeared.
   ![](img/approval-process/approved-initial-bob.png)

6. Let's change back to Alice's account and add another interpretation to this item
   ![](img/approval-process/add-interpretation.png)

7. Now we can return to Bob's account, open our item and see that new (or edited) interpretations await approval.
   ![](img/approval-process/interpretation-pending.png)

8. We can accept them just like before with `Approve all updates` button.
   ![](img/approval-process/interpretation-approved.png)

### Step 3: Using items in-space

Let's finally use some of our items in the space!

> Bob doesn't have any spaces on his account and we didn't implement purchase mechanic yet so we should switch to Alice (seeder account) for now.

1. Open 'Select space' page, choose our space and click 'Run'
   ![](img/approval-process/game-list.png)

2. Select map that represent levels and choose any level
   ![](img/approval-process/space-map.png)
   ![](img/approval-process/space-levels.png)

3. Open inventory (chest in the top right corner). Here you can equip and unequip items. As you can see sword is equipped and the character uses it in space
   ![](img/approval-process/space-screenshot.png)
   ![](img/approval-process/space-inventory.png)
