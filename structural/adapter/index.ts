import { Exam } from "./Exam/Exam";
import { MarkSheet } from "./Exam/MarkSheet";
import { GradeSheet } from "./GradingExam/GradeSheet";
import { GradingSheetAdapter } from "./GradingExam/GradingSheetAdapter";
import { Grade } from "./GradingExam/SubjectsGrade";

const exam = new Exam(50.0);

const markSheet = new MarkSheet([
  {
    name: 'Maths',
    marks_got: 50,
    total_marks: 100
  },
  {
    name: 'Physics',
    marks_got: 70,
    total_marks: 100
  }
])

const gradeSheet = new GradeSheet([
  {name: 'Maths', grade: Grade['A']},
  {name: 'Physics', grade: Grade['F']},
])

console.log(`Exam is ${exam.has_passed(markSheet) ? 'passed' : 'failed' }`)

//to check the grade sheet we will use grade sheet adapter
const gradeSheetAdapter = new GradingSheetAdapter(gradeSheet)

console.log(`Exam is ${exam.has_passed(gradeSheetAdapter) ? 'passed' : 'failed' }`)
