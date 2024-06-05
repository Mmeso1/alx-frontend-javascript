export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const studentCopy = { ...student };
    if (studentCopy.location === city) {
      const gradeObjArray = newGrades.filter(
        (grade) => grade.studentId === studentCopy.id,
      );
      studentCopy.grade = gradeObjArray.length > 0 ? gradeObjArray[0].grade : 'N/A';
    }
    return studentCopy;
  });
}
