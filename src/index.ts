// Import the native module. On web, it will be resolved to RnBeaconSdk.web.ts

import { DAppClientOptions } from "@airgap/beacon-sdk";
import { BeaconWallet } from "@taquito/beacon-wallet";
import RnBeaconSdkModule from "./RnBeaconSdkModule";

// and on native platforms to RnBeaconSdk.ts
export function newBeaconWallet(config: DAppClientOptions): BeaconWallet {
  return RnBeaconSdkModule.newBeaconWallet(config);
}
