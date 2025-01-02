import { HeadSet } from "../HeadSet/HeadSet";
import { KeyBoard } from "../KeyBoard/KeyBoard";

export abstract class Factory {
  abstract createHeadSet(): HeadSet;
  abstract createKeyBoard(): KeyBoard;
}
