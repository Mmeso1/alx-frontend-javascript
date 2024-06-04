export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const studentCopy = { ...student };
    if (studentCopy.location === city) {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === studentCopy.id,
      );
      studentCopy.grade = gradeObj ? gradeObj.grade : 'N/A';
    }
    return studentCopy;
  });
}
