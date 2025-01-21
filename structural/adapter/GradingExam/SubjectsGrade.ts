export enum Grade {
  F = 0,
  D = 1,
  C = 2,
  B = 3,
  A = 4
}

export type SubjectsGrade = {
  name: string,
  grade: Grade
}[]
