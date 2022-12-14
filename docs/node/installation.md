---
sidebar_position: 1
---

# Installation

### Rust Setup

First, complete the [basic Rust setup instructions](https://www.rust-lang.org/tools/install).
If you are a Windows user the this [link](https://docs.substrate.io/install/windows/) is for you. But native development of substrate is not very well supported.

### Run

Use Rust's native `cargo` command to build and launch the asylum node:

```sh
cargo run --release -- --dev --tmp
```

### Build

The `cargo run` command will perform an initial build. Use the following command to build the node
without launching it:

```sh
cargo build --release
```

### Embedded Docs

Once the project has been built, the following command can be used to explore all parameters and
subcommands:

```sh
./target/release/node-asylum -h
```

## Run

The provided `cargo run` command will launch a temporary node and its state will be discarded after
you terminate the process. After the project has been built, there are other ways to launch the
node.

### Single-Node Development Chain

This command will start the single-node development chain with non-persistent state:

```bash
./target/release/node-asylum --dev
```

Purge the development chain's state:

```bash
./target/release/node-asylum purge-chain --dev
```

Start the development chain with detailed logging:

```bash
RUST_BACKTRACE=1 ./target/release/node-asylum -ldebug --dev
```

:::info

Development chain means that the state of our chain will be in a tmp folder while the nodes are
running. Also, **alice** account will be authority and sudo account as declared in the [genesis state](https://github.com/substrate-developer-hub/substrate-node-template/blob/main/node/src/chain_spec.rs#L49). At the same time the following accounts will be prefunded:
- Alice
- Bob
- Alice//stash
- Bob//stash
:::

In case of being interested in maintaining the chain' state between runs a base path must be added
so the db can be stored in the provided folder instead of a temporal one. We could use this folder
to store different chain databases, as a different folder will be created per different chain that
is ran. The following commands shows how to use a newly created folder as our db base path.

```bash
// Create a folder to use as the db base path
$ mkdir my-chain-state

// Use of that folder to store the chain state
$ ./target/release/node-template --dev --base-path ./my-chain-state/

// Check the folder structure created inside the base path after running the chain
$ ls ./my-chain-state
chains
$ ls ./my-chain-state/chains/
dev
$ ls ./my-chain-state/chains/dev
db keystore network
```


### Connect with Polkadot-JS Apps Front-end

Once the node template is running locally, you can connect it with **Polkadot-JS Apps** front-end
to interact with your chain. [Click
here](https://polkadot.js.org/apps/#/explorer?rpc=ws://localhost:9944) connecting the Apps to your
local node template.

### Multi-Node Local Testnet

If you want to see the multi-node consensus algorithm in action, refer to our
[Start a Private Network tutorial](https://docs.substrate.io/tutorials/v3/private-network).

### Pallets

Asylum consists of core and spaces pallets:

- Asylum Blueprints pallet: this module provides functionality for blueprints and items management.
- Asylum Spaces pallet: this module provides functionality for spaces and space pass' management.