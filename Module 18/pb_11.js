let addGrade = (students) => {

    const getGrade = (marks) => {

    if (marks >= 90){
        return "A+"
    }
    else if(marks >= 80){
        return "A"
    }
    else if(marks >= 60){
        return "b"
    }
    else{
        return "Fail"
    }
    };

  const modifiedStudents = students.map((student) => {
    // console.log(student, "student");
    const { name, marks } = student;

    const newStudentWithGrade = { name, marks, grade: getGrade(marks) };

    return newStudentWithGrade;
  });

  return modifiedStudents;
};

let students = [
  { name: "harun", marks: 85 },
  { name: "karim", marks: 45 },
];

console.log(addGrade(students));
console.log(students)
