import { Exam } from "../Exam/Exam";
import { IMarkSheet } from "../Exam/IMarkSheet";
import { MarkSheet } from "../Exam/MarkSheet";
import { GradeSheet } from "./GradeSheet";
import { Grade } from "./SubjectsGrade";

export class GradingSheetAdapter implements IMarkSheet {
  constructor(private gradeSheet: GradeSheet) {}
  
  getPercentage(): number {
    return (this.gradeSheet.getSGPA()/Grade['A'])*100
  }

}