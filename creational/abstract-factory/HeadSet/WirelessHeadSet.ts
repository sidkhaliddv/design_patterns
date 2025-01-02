import { HeadSet } from "./HeadSet";

export class WirelessHeadSet extends HeadSet {
  listen(): void {
    console.log('Listening though wireless headset')
  }
  
}
