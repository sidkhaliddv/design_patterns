import { HeadSet } from "./HeadSet";

export class WiredHeadSet extends HeadSet {
  listen(): void {
    console.log('Listening though wired headset')
  }
  
}
