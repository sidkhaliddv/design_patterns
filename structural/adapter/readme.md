## Adapter Pattern - Structural 

Its a structural design pattern that allows to deal with incompatible interfaces

Lets walk an example

Lets say we have an exam system that takes a report in form of Marks and tell us whether the student has passed or failed.

the report is in the following format.

[{
  name: 'Maths',
  marks_got: 50,
  total_marks: 100
}]

now after some time we have a new system which doesnt give marks but grades something like
[{
  name: 'Maths', 
  grade: Grade['A']
}]

Now, our system does not know how to compute this type of input and generate result so we make an adapter.

AdapterClass will behave like Marksheet and will have an association to the GradeSheet and give the result on which we can decide whether the student passed or failed.

The code for this is also available and you can run this and take a look at it for better understanding.
