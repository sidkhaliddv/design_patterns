import { IMarkSheet } from "./IMarkSheet";
import { SubjectsMarks } from "./Subjects";

export class MarkSheet implements IMarkSheet {
  constructor(private subjectMarks: SubjectsMarks) {}

  getMarksObtained(): number {
    return this.subjectMarks.reduce((accumulator, subject) => (accumulator + subject.marks_got), 0)
  }

  getMarksTotal(): number {
    return this.subjectMarks.reduce((accumulator, subject) => (accumulator + subject.total_marks), 0)
  }

  getPercentage(): number {
    return (this.getMarksObtained()/this.getMarksTotal())*100
  }
}
