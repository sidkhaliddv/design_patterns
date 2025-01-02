import { KeyBoard } from "./KeyBoard";

export class WiredKeyBoard extends KeyBoard {
  type(): void {
    console.log('Typing with a wired keyboard')
  }
  
}
