export default function createIteratorObject(report) {
  const employees = [];

  for (const department in report.allEmployees) {
    if (report.allEmployees) {
      employees.push(...report.allEmployees[department]);
    }
  }

  return employees;
}
