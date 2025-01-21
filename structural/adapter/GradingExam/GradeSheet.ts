import { Grade, SubjectsGrade } from "./SubjectsGrade";

export class GradeSheet {
  constructor(private grades: SubjectsGrade) {}

  getSGPA():number {
    return this.grades.reduce((acc, subject)=> (acc+subject.grade), 0)/this.grades.length;
  }

}
