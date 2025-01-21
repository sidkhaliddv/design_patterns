import { IMarkSheet } from "./IMarkSheet";
import { MarkSheet } from "./MarkSheet";

export class Exam  {
  constructor(private minPassingPercentage: number) {}

  has_passed(markSheet: IMarkSheet): boolean {
    return markSheet.getPercentage() >= this.minPassingPercentage
  }
  
}
