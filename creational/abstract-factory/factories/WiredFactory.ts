import { HeadSet } from "../HeadSet/HeadSet";
import { WiredHeadSet } from "../HeadSet/WiredHeadSet";
import { KeyBoard } from "../KeyBoard/KeyBoard";
import { WiredKeyBoard } from "../KeyBoard/WiredKeyBorad";
import { Factory } from "./factory";

export class WiredFactory extends Factory {
  createHeadSet(): HeadSet {
    return new WiredHeadSet();
  }
  createKeyBoard(): KeyBoard {
    return new WiredKeyBoard();
  }
  
}