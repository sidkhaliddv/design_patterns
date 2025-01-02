import { HeadSet } from "../HeadSet/HeadSet";
import { WirelessHeadSet } from "../HeadSet/WirelessHeadSet";
import { KeyBoard } from "../KeyBoard/KeyBoard";
import { WirelessKeyBoard } from "../KeyBoard/WirelessKeyBoard";
import { Factory } from "./factory";

export class WirelessFactory extends Factory {
  createHeadSet(): HeadSet {
    return new WirelessHeadSet()
  }
  createKeyBoard(): KeyBoard {
    return new WirelessKeyBoard
  }
  
}
