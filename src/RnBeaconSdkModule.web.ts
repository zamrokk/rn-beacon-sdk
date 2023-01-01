import { DAppClientOptions } from "@airgap/beacon-sdk";
import { BeaconWallet } from "@taquito/beacon-wallet";

export default {
  newBeaconWallet(config: DAppClientOptions): BeaconWallet {
    return new BeaconWallet(config);
  },
};
